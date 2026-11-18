import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Arya Kumalajati — Engineering Portfolio", template: "%s | Arya Kumalajati" },
  description: "Engineering portfolio of Arya Hafiidh Kumalajati: FPGA and RTL design, embedded signal processing, Python automation, and engineering software.",
  applicationName: "Arya Kumalajati Portfolio",
  keywords: ["Arya Kumalajati", "Electrical Engineering", "FPGA", "Embedded Systems", "Python", "RWTH Aachen", "Signal Processing", "CI/CD"],
  authors: [{ name: "Arya Hafiidh Kumalajati" }],
  openGraph: {
    type: "website",
    title: "Arya Kumalajati — Engineering Portfolio",
    description: "Building at the intersection of hardware, embedded systems, and software.",
    siteName: "Arya Kumalajati",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07121a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-[#c5f57c] focus:p-3 focus:text-[#10191a]" href="#main">Skip to content</a>
    <SiteHeader/>
    {children}
    <SiteFooter/>
  </body></html>;
}
