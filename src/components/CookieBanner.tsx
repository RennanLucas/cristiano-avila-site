'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('ca_privacy_notice_seen');
    if (!acknowledged) {
      const timer = window.setTimeout(() => setShow(true), 1600);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const close = () => {
    localStorage.setItem('ca_privacy_notice_seen', '1');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-3 right-3 z-50 rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl min-[390px]:left-4 min-[390px]:right-4 min-[390px]:p-5 sm:bottom-5 sm:left-6 sm:right-auto sm:max-w-md" role="dialog" aria-label="Aviso de privacidade">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-black">Privacidade</p>
        <p className="text-xs leading-relaxed text-textMuted">O site utiliza apenas recursos necessários ao funcionamento e às preferências de navegação. Consulte a{' '}<Link href="/politica-de-privacidade" className="font-medium text-black underline underline-offset-2">Política de Privacidade</Link>{' '}para saber mais.</p>
        <button type="button" onClick={close} className="w-full rounded-xl bg-black px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800">Entendi</button>
      </div>
    </div>
  );
}
