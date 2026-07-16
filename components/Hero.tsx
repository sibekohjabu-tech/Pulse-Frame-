export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pulse-purple opacity-[0.06] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-pulse-purple opacity-[0.08] blur-[60px]" />
      </div>

      {/* Watermark text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 pointer-events-none select-none overflow-hidden">
        {["Production", "Storytelling", "Excellence", "Creativity", "Visuals"].map(
          (word, i) => (
            <span
              key={i}
              className="text-[80px] md:text-[120px] font-serif font-bold text-white opacity-[0.025] whitespace-nowrap"
              style={{ transform: `translateX(${i % 2 === 0 ? "-5%" : "5%"})` }}
            >
              {word}
            </span>
          )
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-pulse-surface border border-pulse-border rounded-full px-4 py-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-pulse-purple animate-pulse" />
          <span className="text-pulse-muted">Now accepting new clients</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="text-white glow-purple block">
            Studio-Quality Visuals.
          </span>
          <span className="text-pulse-purple block mt-2">On Demand.</span>
        </h1>

        {/* Description */}
        <p className="text-pulse-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          PulseFrame is the subscription studio built for artists, musicians,
          and podcasters who need high-volume, professional visual output —
          every month, without the project-to-project markup.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="bg-pulse-purple hover:bg-pulse-purple-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(124,92,255,0.4)] w-full sm:w-auto text-center"
          >
            See pricing
          </a>
          <a
            href="mailto:pulseframe@polsia.app"
            className="border border-pulse-border hover:border-pulse-purple text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto text-center hover:bg-white/5"
          >
            Talk to us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-pulse-muted">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-pulse-muted to-transparent" />
      </div>
    </section>
  );
}
