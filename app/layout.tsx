import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://williamhankey.dev"),
  title: {
    default: "William Hankey",
    template: "%s · William Hankey",
  },
  icons: {
    icon: [{ url: "/assets/wordmark.svg", type: "image/svg+xml" }],
    shortcut: "/assets/wordmark.svg",
    apple: "/assets/wordmark.svg",
  },
};

/**
 * Root layout is intentionally bare.
 *
 * There is no general portfolio at the apex: each role lives at its own
 * versioned route with its own shell, navigation and footer, so nothing that
 * mixes the three roles is ever rendered.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased w-full">{children}</body>
    </html>
  );
}
