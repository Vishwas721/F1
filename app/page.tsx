export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0f0f0f]">
      <div id="canvas-container" className="absolute inset-0 z-0 h-screen w-screen" />

      <main
        id="dom-ui"
        className="pointer-events-none absolute inset-0 z-10 flex items-start justify-between p-6"
      >
        <section className="pointer-events-auto">
          <h1 className="text-sm uppercase tracking-[0.2em] text-zinc-300">
            F1 Portfolio Scaffold
          </h1>
        </section>
      </main>
    </div>
  );
}
