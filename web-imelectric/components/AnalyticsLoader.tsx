"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ConsentBanner } from "./ConsentBanner";
import { getConsent } from "@/lib/consent";

interface Props {
  gaMeasurementId?: string;
  clarityProjectId?: string;
  /** Nonce generado en proxy.ts — necesario para CSP strict con 'strict-dynamic'. */
  nonce?: string;
}

export const AnalyticsLoader = ({ gaMeasurementId, clarityProjectId, nonce }: Props) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (getConsent() === "accepted") {
      setAnalyticsEnabled(true);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    if (choice === "accepted") {
      setAnalyticsEnabled(true);
    }
  };

  return (
    <>
      <ConsentBanner onConsent={handleConsent} />

      {analyticsEnabled && gaMeasurementId ? (
        <GoogleAnalytics gaId={gaMeasurementId} nonce={nonce} />
      ) : null}

      {analyticsEnabled && clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive" nonce={nonce}>
          {`
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityProjectId}");
          `.trim()}
        </Script>
      ) : null}
    </>
  );
};
