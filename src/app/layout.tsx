import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groomed Gent Co. Event Experience",
  description: "Scan to shop Groomed Gent Co. and receive 15% off your next online order with LEGACY15.",
  applicationName: "Groomed Gent Co. Event Experience",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Groomed Gent Co. Event Experience",
    description: "Where Grooming Meets Health. Where Mindset Builds Legacy.",
    type: "website",
    siteName: "Groomed Gent Co.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#151119",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
