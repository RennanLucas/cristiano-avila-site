'use client';

export default function MetricsPreferences() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("clinic-metrics-preferences"))}>
      Preferências de métricas
    </button>
  );
}
