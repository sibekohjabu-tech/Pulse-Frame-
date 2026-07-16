import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-pulse-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-white font-bold">PulseFrame</span>

        <p className="text-pulse-muted text-xs text-center">
          © {new Date().getFullYear()} PulseFrame. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-pulse-muted">
          <Link
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <a
            href="mailto:pulseframe@polsia.app"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
