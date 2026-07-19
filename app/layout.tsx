import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Yatin Dua | Policy Researcher and Writer",
    template: "%s | Yatin Dua",
  },
  description: "Policy research, program practice, field observations, public writing, and active questions from Vancouver-based policy practitioner Yatin Dua.",
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
