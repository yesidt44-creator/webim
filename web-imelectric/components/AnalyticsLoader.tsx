"use client";

import { useState, useSyncExternalStore } from "react";
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

function subscribeConsent(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = () => onStoreChange();
  window.addEventListener("imelectric-consent", handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("imelectric-consent", handler);
    window.removeEventListener("storage", handler);
  };
}

function getConsentAccepted() {
  return getConsent() === "accepted";
}

export const AnalyticsLoader = ({ gaMeasurementId, clarityProjectId, nonce }: Props) => {
  const storedAccepted = useSyncExternalStore(subscribeConsent, getConsentAccepted, () => false);
  const [acceptedThisSession, setAcceptedThisSession] = useState(false);
  const analyticsEnabled = storedAccepted || acceptedThisSession;

  const handleConsent = (choice: "accepted" | "rejected") => {
    if (choice === "accepted") {
      setAcceptedThisSession(true);
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
