import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PulseFrame — Studio-Quality Visuals. On Demand.",
  description:
    "PulseFrame is the subscription studio built for artists, musicians, and podcasters who need high-volume, professional visual output — every month, without the project-to-project markup.",
  keywords: [
    "subscription design studio",
    "visual production",
    "artists",
    "musicians",
    "podcasters",
    "AI consulting",
    "brand identity",
    "UI UX design",
  ],
  openGraph: {
    title: "PulseFrame — Studio-Quality Visuals. On Demand.",
    description:
      "The subscription studio for artists, musicians, and podcasters.",
    type: "website",
    url: "https://pulseframe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseFrame — Studio-Quality Visuals. On Demand.",
    description:
      "The subscription studio for artists, musicians, and podcasters.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-pulse-bg text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
