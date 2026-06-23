import type { Metadata } from "next";
import "./globals.css";

const title = "MEKT Solutions | Product Design & Engineering Studio";
const description =
  "MEKT is a product design and engineering studio. We partner with founders and teams across Africa to design, build, and ship digital products people actually use.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mektsolutions.com"),
  title,
  description,
  keywords: ["MEKT", "product design", "engineering", "fintech", "Africa", "software studio"],
  openGraph: {
    type: "website",
    siteName: "MEKT Solutions",
    url: "https://mektsolutions.com",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
