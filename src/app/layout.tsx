import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tabathachase.com"),
  title: {
    default: "Tabatha Chase | SoCal Realtor — Corona, Yorba Linda, Eastvale, Riverside",
    template: "%s | Tabatha Chase",
  },
  description:
    "Tabatha Chase (DRE 01968575) at Fiv Realty Co. — Southern California real estate with interior design expertise and complimentary staging. Making life beautiful one home at a time.",
  keywords: [
    "Tabatha Chase",
    "Corona realtor",
    "Yorba Linda realtor",
    "Eastvale realtor",
    "Riverside realtor",
    "Anaheim realtor",
    "Fiv Realty",
    "SoCal real estate",
  ],
  openGraph: {
    title: "Tabatha Chase | SoCal Realtor",
    description:
      "Making life beautiful one home at a time. Corona, Yorba Linda, Eastvale, Riverside, Anaheim.",
    type: "website",
    locale: "en_US",
    siteName: "Tabatha Chase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tabatha Chase | SoCal Realtor",
    description: "Making life beautiful one home at a time.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
