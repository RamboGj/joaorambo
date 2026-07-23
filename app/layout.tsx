import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = "João Rambo — Fullstack Software Engineer";

/** Longer form, for search results. */
const description =
  "Fullstack Software Engineer shipping across fintech, Web3 and AI — architecture to production, end to end. Open to Senior roles, remote.";

/** Tighter form for link previews, matching the OG card artwork. */
const social =
  "Fintech · Web3 · AI — architecture to production, end to end. 5+ years shipping.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joaorambo.dev"),
  title,
  description,
  openGraph: {
    title,
    description: social,
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: social,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">
        {/* Reveals start hidden and are shown by an IntersectionObserver, so
            without scripting the page would render blank. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
