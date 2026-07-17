export type ConsentChoice = "accepted" | "rejected" | null;

const KEY = "imelectric_cookie_consent";

export function getConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

export function setConsent(choice: "accepted" | "rejected"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, choice);
}
