'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

const preferenceKey = "ca_metrics_preference";
const containerId = "GTM-KGGKLHNK";
// Enable only after auditing the published GTM container and consent behavior.
const metricsEnabled = process.env.NEXT_PUBLIC_CLINIC_METRICS_ENABLED === "true";
const allowedPaths = new Set(["/", "/contato", "/sobre", "/unidades", "/especialidades/psicoterapia"]);
const unitPath = /^\/unidades\/(praia-grande|santos|atibaia|sao-bernardo)$/;

type ContactEvent = "booking_click" | "phone_click" | "whatsapp_click";
type ConsentSettings = {
  analytics_storage: "granted";
  ad_storage: "denied";
  ad_user_data: "denied";
  ad_personalization: "denied";
};
type DataLayer = (IArguments | { event: string; "gtm.start"?: number })[];

function loadContainer() {
  const browser = window as Window & { dataLayer?: DataLayer };
  const dataLayer = (browser.dataLayer ??= []);

  if (!document.getElementById(containerId)) {
    const setConsent: (command: "consent", mode: "default", settings: ConsentSettings) => void = function () {
      dataLayer.push(arguments);
    };
    setConsent("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.id = containerId;
    script.async = true;
    script.referrerPolicy = "no-referrer";
    script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
    document.head.append(script);
  }
  return dataLayer;
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const restore = window.setTimeout(() => {
      let preference: string | null = null;
      try { preference = localStorage.getItem(preferenceKey); } catch { /* Storage unavailable. */ }
      setAllowed(preference === "allow");
      setOpen(metricsEnabled && !preference);
    }, 0);
    const showPreferences = () => setOpen(true);
    window.addEventListener("clinic-metrics-preferences", showPreferences);
    return () => {
      window.clearTimeout(restore);
      window.removeEventListener("clinic-metrics-preferences", showPreferences);
    };
  }, []);

  useEffect(() => {
    if (!metricsEnabled || !allowed) return;

    const record = (event: ContactEvent) => {
      if (!allowedPaths.has(location.pathname) && !unitPath.test(location.pathname)) return;
      loadContainer().push({ event });
    };
    const trackClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;

      if (link.protocol === "tel:") {
        record("phone_click");
      } else if (link.hostname === "wa.me") {
        const isBooking = link.dataset.contactAction === "booking_click";
        record(isBooking ? "booking_click" : "whatsapp_click");
      }
    };
    const trackSubmit = (event: SubmitEvent) => {
      if (event.target instanceof HTMLFormElement && event.target.dataset.contactAction === "whatsapp_click" && event.target.checkValidity() && event.target.querySelector<HTMLInputElement>('#name')?.value.trim()) {
        record("whatsapp_click");
      }
    };

    // Load only on a consented contact event, not on a page view.
    document.addEventListener("click", trackClick, true);
    document.addEventListener("submit", trackSubmit, true);
    return () => {
      document.removeEventListener("click", trackClick, true);
      document.removeEventListener("submit", trackSubmit, true);
    };
  }, [allowed]);

  function choose(allow: boolean) {
    let saved = false;
    try {
      localStorage.setItem(preferenceKey, allow ? "allow" : "deny");
      saved = true;
    } catch { /* Keep choice for this visit. */ }

    if (!allow && allowed) {
      for (const entry of document.cookie.split(";")) {
        const name = entry.split("=")[0].trim();
        if (!/^_ga(?:_[A-Z0-9]+)?$/i.test(name)) continue;

        for (const domain of ["", `; Domain=${location.hostname}`]) {
          const expired = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain}`;
          document.cookie = `${expired}; Secure`;
          if (location.protocol === "http:") document.cookie = expired;
        }
      }
      if (saved) {
        window.location.reload();
        return;
      }
    }
    setAllowed(allow);
    setOpen(false);
  }

  if (!metricsEnabled || !open) return null;

  return (
    <div className="fixed bottom-4 left-3 right-3 z-50 rounded-2xl border border-zinc-200 bg-white p-3 shadow-2xl sm:bottom-5 sm:left-auto sm:right-6 sm:max-w-sm sm:p-4" role="region" aria-label="Preferências de métricas">
      <p className="text-sm font-semibold text-black">Preferências de métricas</p>
      <p className="mt-1.5 text-xs leading-snug text-zinc-600">Com sua autorização, medimos o uso dos botões de contato. Leia a <Link href="/politica-de-privacidade" className="font-medium text-black underline">Política de Privacidade</Link>.</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => choose(false)} className="min-h-11 rounded-xl border border-zinc-300 px-2 text-xs font-semibold text-black">Recusar métricas</button>
        <button type="button" onClick={() => choose(true)} className="min-h-11 rounded-xl border border-zinc-300 px-2 text-xs font-semibold text-black">Permitir métricas</button>
      </div>
    </div>
  );
}
