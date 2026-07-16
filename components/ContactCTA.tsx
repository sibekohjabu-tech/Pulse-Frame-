export default function ContactCTA() {
  return (
    <section
      id="work"
      className="py-24 px-6 border-t border-pulse-border relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-pulse-purple opacity-[0.07] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
          Start Creating
        </h2>
        <p className="text-pulse-muted text-lg leading-relaxed">
          Tell us about your project and we&apos;ll match you with the right
          plan. Most onboarding calls happen within 48 hours.
        </p>
        <a
          href="mailto:pulseframe@polsia.app"
          className="inline-flex items-center gap-3 bg-pulse-purple hover:bg-pulse-purple-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(124,92,255,0.4)] text-lg"
        >
          <span>✉</span>
          <span>Email us — pulseframe@polsia.app</span>
        </a>
      </div>
    </section>
  );
}
