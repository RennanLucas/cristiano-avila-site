export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/95 transition-[transform,box-shadow] duration-300 md:bg-white/80 md:backdrop-blur-xl md:hover:-translate-y-1.5 md:hover:scale-[1.008] md:hover:shadow-[0_35px_90px_rgba(0,0,0,0.13)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,244,245,0.48))]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-zinc-200/80 bg-zinc-100/70 transition-transform duration-700 md:group-hover:scale-125" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-fuchsia-100/40 blur-3xl opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.96),rgba(250,204,21,0.05)_24%,rgba(217,70,239,0.04)_42%,transparent_70%)] opacity-0 transition-opacity duration-300 md:block md:group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
    </div>
  );
}
