// Route transitions are visual-only on desktop; mobile keeps the lightweight path.
export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="route-transition-frame">{children}</div>;
}
