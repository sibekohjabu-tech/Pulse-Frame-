const clients = [
  "Independent Artists",
  "Record Labels",
  "Podcast Networks",
  "Creative Agencies",
  "Music Studios",
  "Independent Artists",
  "Record Labels",
  "Podcast Networks",
  "Creative Agencies",
  "Music Studios",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-pulse-border py-6 overflow-hidden">
      <div className="flex items-center gap-4 mb-4 px-6">
        <span className="text-xs text-pulse-muted uppercase tracking-widest font-medium whitespace-nowrap">
          Trusted by
        </span>
        <div className="flex-1 h-px bg-pulse-border" />
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {clients.concat(clients).map((client, i) => (
            <span
              key={i}
              className="text-pulse-muted text-sm font-medium whitespace-nowrap px-8 border-r border-pulse-border last:border-r-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
