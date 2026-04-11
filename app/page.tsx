import HeroHUD from "@/components/dom/HeroHUD";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0f0f0f]">
      <div id="canvas-container" className="absolute inset-0 z-0 h-screen w-screen" />

      <main
        id="dom-ui"
        className="pointer-events-none absolute inset-0 z-10"
      >
        <HeroHUD />
      </main>
    </div>
  );
}
