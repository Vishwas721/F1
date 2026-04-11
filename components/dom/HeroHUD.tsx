const navItems = [
  { label: "PROJECTS", tone: "cyan" },
  { label: "SERVICES", tone: "red" },
  { label: "HOME", tone: "cyan", primary: true },
  { label: "CONTACT", tone: "red" },
  { label: "ABOUT", tone: "cyan" },
] as const;

const glowStyles = {
  cyan:
    "hover:shadow-[0_0_18px_rgba(0,255,255,0.65),0_0_44px_rgba(0,255,255,0.24)] hover:border-cyan-300/80 hover:text-cyan-200",
  red:
    "hover:shadow-[0_0_18px_rgba(255,0,51,0.65),0_0_44px_rgba(255,0,51,0.24)] hover:border-rose-400/80 hover:text-rose-200",
} as const;

export default function HeroHUD() {
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-auto fixed bottom-5 left-1/2 z-20 w-[min(94vw,54rem)] -translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-[2.25rem] border border-zinc-800/80 bg-zinc-950/80 px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_24%,rgba(255,255,255,0.02))]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-linear-to-r from-transparent via-rose-500/30 to-transparent" />

        <div className="relative flex flex-col gap-3">
          <div className="flex items-center justify-between px-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-zinc-400">
            <span className="font-mono text-cyan-300/90">RPM: 11000</span>
            <span className="font-mono text-zinc-500">MODE: QUALI</span>
            <span className="font-mono text-rose-300/90">LAP 01/100</span>
          </div>

          <div className="flex items-stretch justify-between gap-2 sm:gap-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                aria-label={item.label}
                className={`group relative flex min-w-0 flex-1 items-center justify-center overflow-hidden rounded-[1.15rem] border border-zinc-800/90 px-2 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-zinc-200 transition-all duration-300 ease-out sm:px-3 sm:py-4 sm:text-[0.8rem] ${
                  item.primary
                    ? "bg-zinc-900/95 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_20px_rgba(0,255,255,0.18),0_0_28px_rgba(255,0,51,0.14)]"
                    : "bg-zinc-950/60"
                } ${glowStyles[item.tone]}`}
              >
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_55%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-3 top-2 h-px bg-white/10 transition-colors duration-300 group-hover:bg-white/25" />
                <span className="absolute inset-y-2 left-2 w-px bg-white/5 transition-colors duration-300 group-hover:bg-white/20" />
                <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between px-2 text-[0.62rem] font-mono uppercase tracking-[0.32em] text-zinc-500">
            <span>ERS: OVERRIDE</span>
            <span className="text-zinc-400">DRS: READY</span>
            <span className="text-zinc-500">TYRE: SOFT</span>
          </div>
        </div>
      </div>
    </nav>
  );
}