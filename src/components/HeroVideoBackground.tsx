import HeroDesktopVideo from "./HeroDesktopVideo";

interface HeroVideoBackgroundProps {
  children?: React.ReactNode;
}

export default function HeroVideoBackground({ children }: HeroVideoBackgroundProps) {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <HeroDesktopVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(228,228,231,0.45),transparent_42%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
