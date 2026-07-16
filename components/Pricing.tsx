const plans = [
  {
    name: "TRACK",
    price: "$997",
    period: "/mo",
    description: "For independent creators who need a steady creative partner.",
    popular: false,
    features: [
      "2 single covers / month",
      "10 social assets / month",
      "1 podcast thumbnail / month",
      "Revisions: 2 rounds per asset",
      "Email support",
    ],
    cta: "Get started",
    href: "mailto:pulseframe@polsia.app",
  },
  {
    name: "STUDIO",
    price: "$2,497",
    period: "/mo",
    description:
      "For serious artists and creators running consistent release cycles.",
    popular: true,
    features: [
      "1 album or 4 single covers / month",
      "50+ social assets / month",
      "3 podcast thumbnails / month",
      "2 animated visualizers / month",
      "Ad creative for Meta + TikTok",
      "Revisions: unlimited",
      "Priority Slack support",
    ],
    cta: "Get started",
    href: "mailto:pulseframe@polsia.app",
  },
  {
    name: "LABEL",
    price: "$4,997",
    period: "/mo",
    description:
      "Full-service visual studio for labels, collectives, and high-volume teams.",
    popular: false,
    features: [
      "Everything in STUDIO",
      "Unlimited cover designs",
      "Unlimited social assets",
      "Unlimited animated visualizers",
      "Full brand identity system",
      "Dedicated creative director",
      "Same-day turnaround available",
    ],
    cta: "Get started",
    href: "mailto:pulseframe@polsia.app",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-pulse-purple text-xs font-semibold uppercase tracking-[0.2em]">
          Pricing
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
          One price, everything included.
        </h2>
        <p className="text-pulse-muted text-lg max-w-xl mx-auto">
          All plans include unlimited revisions on STUDIO and LABEL. No hidden
          fees, no per-asset billing.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 ${
              plan.popular
                ? "bg-pulse-surface border-pulse-purple glow-border scale-[1.02]"
                : "bg-pulse-card border-pulse-border hover:border-pulse-purple/40"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-pulse-purple text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most popular
                </span>
              </div>
            )}

            {/* Plan name */}
            <div className="mb-6">
              <p className="text-pulse-purple text-xs font-bold uppercase tracking-[0.2em] mb-3">
                {plan.name}
              </p>
              <div className="flex items-end gap-1 mb-3">
                <span className="font-serif text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-pulse-muted text-sm mb-2">
                  {plan.period}
                </span>
              </div>
              <p className="text-pulse-muted text-sm leading-relaxed">
                {plan.description}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-pulse-border mb-6" />

            {/* Features */}
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="text-pulse-purple mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={plan.href}
              className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                plan.popular
                  ? "bg-pulse-purple hover:bg-pulse-purple-dark text-white hover:shadow-[0_0_20px_rgba(124,92,255,0.4)]"
                  : "border border-pulse-border hover:border-pulse-purple text-white hover:bg-white/5"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
