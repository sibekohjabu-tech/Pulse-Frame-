const benefits = [
  "Same creative team, every month",
  "Fixed monthly cost, no per-project surprises",
  "Unlimited revisions on STUDIO and LABEL",
  "Direct access to your creative director",
];

export default function WhySubscription() {
  return (
    <section className="py-24 px-6 bg-pulse-surface border-y border-pulse-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-6">
          <p className="text-pulse-purple text-xs font-semibold uppercase tracking-[0.2em]">
            Why subscription
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Consistency beats speed.
          </h2>
          <p className="text-pulse-muted text-lg leading-relaxed">
            Studios charge per project, build in revision buffers, and treat
            each job as a one-off. PulseFrame is built for ongoing relationships
            — your creative partner that learns your taste, accelerates with
            your volume, and never bills surprise rush fees.
          </p>

          <ul className="space-y-3 pt-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-white">
                <span className="w-5 h-5 rounded-full bg-pulse-purple/20 border border-pulse-purple/40 flex items-center justify-center text-pulse-purple text-xs flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stat */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-pulse-card border border-pulse-border rounded-3xl p-12 text-center glow-border">
            <div className="font-serif text-8xl font-bold text-pulse-purple mb-3">
              12×
            </div>
            <p className="text-white font-semibold text-lg mb-1">
              deliverables per year
            </p>
            <p className="text-pulse-muted text-sm">at consistent quality</p>
          </div>
        </div>
      </div>
    </section>
  );
}
