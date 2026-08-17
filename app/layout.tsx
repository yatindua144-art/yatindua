import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yatin Dua | Writer and Researcher",
    template: "%s | Yatin Dua",
  },
  description: "Essays, public writing, field research, and open questions from Vancouver-based writer and researcher Yatin Dua.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
