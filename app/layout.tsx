import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEKT Solutions | Product Design & Engineering Studio",
  description:
    "MEKT is a product design and engineering studio. We partner with founders and teams across Africa to design, build, and ship digital products people actually use.",
  keywords: [
    "MEKT",
    "product design",
    "engineering",
    "fintech",
    "Africa",
    "software studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
