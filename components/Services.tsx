const services = [
  {
    title: "AI Consulting",
    icon: "✦",
    items: [
      "Business AI strategy",
      "AI implementation",
      "Workflow automation",
      "Internal AI assistants",
      "Prompt engineering",
      "Knowledge management",
      "AI training",
    ],
  },
  {
    title: "Brand Identity",
    icon: "◈",
    items: [
      "Logo design",
      "Brand strategy",
      "Visual systems",
      "Typography",
      "Colour systems",
      "Brand guidelines",
      "Social media identity",
    ],
  },
  {
    title: "UI / UX Design",
    icon: "⊞",
    items: [
      "Mobile applications",
      "Web applications",
      "Dashboards",
      "SaaS interfaces",
      "Design systems",
      "Prototypes",
    ],
  },
  {
    title: "Web Development",
    icon: "◇",
    items: [
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "E-commerce",
      "Custom dashboards",
      "Performance optimization",
      "SEO",
    ],
  },
  {
    title: "Automation",
    icon: "⟳",
    items: [
      "CRM automation",
      "Email workflows",
      "Customer support bots",
      "Business dashboards",
      "Data reporting",
      "AI agents",
      "Process optimization",
    ],
  },
  {
    title: "Creative Studio",
    icon: "◉",
    items: [
      "Photography",
      "Video editing",
      "Motion graphics",
      "Social media content",
      "Commercial campaigns",
      "3D visuals",
      "Product mockups",
      "Presentation design",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-pulse-purple text-xs font-semibold uppercase tracking-[0.2em]">
          What we deliver
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
          Core Services
        </h2>
        <p className="text-pulse-muted text-lg max-w-xl mx-auto">
          Every project combines strategy, creativity, and artificial
          intelligence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-pulse-card border border-pulse-border rounded-2xl p-6 hover:border-pulse-purple/40 hover:bg-pulse-surface transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-pulse-purple/10 border border-pulse-purple/20 flex items-center justify-center text-pulse-purple text-lg mb-4 group-hover:bg-pulse-purple/20 transition-colors">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-lg mb-3">
              {service.title}
            </h3>

            {/* Items */}
            <ul className="space-y-1.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-pulse-muted text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-pulse-purple flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
