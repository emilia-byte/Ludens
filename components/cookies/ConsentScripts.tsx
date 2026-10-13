"use client";

import Script from "next/script";
import { useConsent } from "@/lib/use-consent";

// ID de Google Analytics 4 (por ejemplo G-XXXXXXX). Si no está definido, no se carga nada.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Scripts no esenciales: solo se cargan después de que el usuario acepta las cookies.
export function ConsentScripts() {
  const consent = useConsent();
  if (consent !== "accepted" || !GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
