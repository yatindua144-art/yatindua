import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yatinduawrites.com"),
  title: {
    default: "Yatin Dua | Policy, Research and Programs",
    template: "%s | Yatin Dua",
  },
  description: "Policy, research, program delivery, evaluation, and public-interest writing by Vancouver-based analyst Yatin Dua.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Yatin Dua",
    title: "Yatin Dua | Policy, Research and Programs",
    description: "Policy, research, program delivery, evaluation, and public-interest writing by Vancouver-based analyst Yatin Dua.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Yatin Dua - policy, research and programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatin Dua | Policy, Research and Programs",
    description: "Policy, research, program delivery, evaluation, and public-interest writing by Vancouver-based analyst Yatin Dua.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
