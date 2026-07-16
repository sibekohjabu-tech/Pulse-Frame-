import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-pulse-bg text-white px-6 py-24 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-pulse-purple text-sm font-medium mb-8 block hover:underline"
      >
        ← Back to PulseFrame
      </Link>
      <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-pulse-muted leading-relaxed">
        <p>
          <strong className="text-white">Last updated:</strong>{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p>
            PulseFrame collects information you provide directly to us, such as
            when you contact us via email or submit an inquiry. This includes
            your name, email address, and any project details you share.
          </p>
        </section>
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, and communicate with you about your project.
            We do not sell or share your personal information with third parties
            for marketing purposes.
          </p>
        </section>
        <section>
          <h2 className="text-white text-xl font-semibold mb-3">Contact</h2>
          <p>
            For any privacy-related questions, contact us at{" "}
            <a
              href="mailto:pulseframe@polsia.app"
              className="text-pulse-purple hover:underline"
            >
              pulseframe@polsia.app
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
