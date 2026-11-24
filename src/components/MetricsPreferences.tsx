'use client';

export default function MetricsPreferences() {
  if (process.env.NEXT_PUBLIC_CLINIC_METRICS_ENABLED !== "true") return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("clinic-metrics-preferences"))}>
      Preferências de métricas
    </button>
  );
}
