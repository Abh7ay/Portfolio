export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#181818] text-white flex items-center"
    >
      <div className="relative w-full overflow-hidden">
        <div className="relative flex items-center justify-center px-4 sm:px-8 md:px-16 py-24">
          {/* Subtle vignette like Portavia */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_70%_100%,rgba(94,110,242,0.18),transparent_55%)] opacity-70" />

          <div className="relative z-10 flex w-full max-w-6xl items-center justify-between">
            {/* Left: name + DIGITAL */}
            <div className="flex flex-col gap-4">
              <span className="font-antonio text-xs md:text-sm tracking-[0.35em] text-white/70">
                ABHISHEK
              </span>
              <h1 className="font-antonio text-[clamp(72px,10vw,140px)] leading-none tracking-tight">
                DIGITAL
              </h1>
            </div>

            {/* Right: DESIGNER + subtitle */}
            <div className="flex flex-col items-end gap-4 text-right">
              <h1 className="font-antonio text-[clamp(72px,10vw,140px)] leading-none tracking-tight">
                DESIGNER
              </h1>
              <p className="max-w-xs text-xs sm:text-sm md:text-base text-white/70">
                I&apos;m a React developer and Framer enthusiast crafting modern,
                interaction‑rich web experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
