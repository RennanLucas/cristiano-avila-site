"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type RailItem = { id: string; label: string; index: number };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function DesktopExperience() {
  const pathname = usePathname();
  const [railItems, setRailItems] = useState<RailItem[]>([]);
  const [activeSectionId, setActiveSectionId] = useState("");
  const showRail = useMemo(() => pathname === "/" && railItems.length >= 5, [pathname, railItems.length]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("desktop-premium");
    root.dataset.activeTone = "light";

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    sections.forEach((section, index) => {
      if (!section.id) section.id = `secao-${index + 1}`;
      if (section.id !== "inicio") section.classList.add("premium-reveal-section");
    });

    const items = sections.map((section, index) => {
      const editorial = section.querySelector<HTMLElement>(".editorial-label")?.textContent?.trim();
      const heading = section.querySelector<HTMLElement>("h2, h1")?.textContent?.trim();
      const label = section.id === "inicio" ? "Início" : editorial || heading || `Seção ${index + 1}`;
      return {
        id: section.id,
        label: label.length > 34 ? `${label.slice(0, 31)}…` : label,
        index: index + 1,
      };
    });

    setRailItems(items);
    if (items[0]) setActiveSectionId(items[0].id);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-premium-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.025, rootMargin: "0px 0px -1% 0px" },
    );

    sections
      .filter((section) => section.id !== "inicio")
      .forEach((section) => revealObserver.observe(section));

    const activeObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (!visible[0]) return;
        const section = visible[0].target as HTMLElement;
        setActiveSectionId(section.id);
        root.dataset.activeTone = section.dataset.tone === "dark" ? "dark" : "light";
      },
      { threshold: 0, rootMargin: "-36% 0px -54% 0px" },
    );

    sections.forEach((section) => activeObserver.observe(section));

    const hero = document.getElementById("inicio");
    const updateHeroPointer = (event: PointerEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty(
        "--hero-pointer-x",
        `${clamp(((event.clientX - rect.left) / Math.max(1, rect.width)) * 100, 0, 100)}%`,
      );
      hero.style.setProperty(
        "--hero-pointer-y",
        `${clamp(((event.clientY - rect.top) / Math.max(1, rect.height)) * 100, 0, 100)}%`,
      );
    };

    if (finePointer.matches) {
      hero?.addEventListener("pointermove", updateHeroPointer, { passive: true });
    }

    return () => {
      revealObserver.disconnect();
      activeObserver.disconnect();
      hero?.removeEventListener("pointermove", updateHeroPointer);
      sections.forEach((section) => section.classList.remove("premium-reveal-section", "is-premium-visible"));
      root.classList.remove("desktop-premium");
      delete root.dataset.activeTone;
      setRailItems([]);
    };
  }, [pathname]);

  const goToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 92,
      behavior: "smooth",
    });
  };

  if (!showRail) return null;

  return (
    <nav className="premium-section-rail" aria-label="Navegação pelas seções da página">
      <div className="premium-section-rail-line" aria-hidden="true" />
      {railItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`premium-section-rail-item ${activeSectionId === item.id ? "is-active" : ""}`}
          onClick={() => goToSection(item.id)}
          aria-label={`Ir para ${item.label}`}
        >
          <span className="premium-section-rail-label">{item.label}</span>
          <span className="premium-section-rail-index">{String(item.index).padStart(2, "0")}</span>
          <span className="premium-section-rail-dot" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}
