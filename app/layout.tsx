import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kushi Groups Tavarekere",
  url: "https://khushiconstruction.com",
  image: "https://khushiconstruction.com/og-image.jpg",
  telephone: "+91 9845447449",
  email: "kushigroups2012@gmail.com",
  hasMap: "https://maps.app.goo.gl/7HEz5N1QLD3rtB316",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9654252,
    longitude: 77.392188,
  },
  areaServed: ["Karnataka", "Maharashtra"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://khushiconstruction.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Kushi Groups Tavarekere | Premium Home Building Services",
    template: "%s | Kushi Groups Tavarekere",
  },
  description:
    "From basement to dream home — Kushi Groups Tavarekere delivers complete construction solutions including structural work, plumbing, electrical, and interior finishing with premium materials.",
  keywords: [
    "construction company",
    "home building",
    "basement construction",
    "structural construction",
    "interior finishing",
    "plumbing",
    "electrical installation",
    "turnkey house",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khushiconstruction.com",
    siteName: "Kushi Groups Tavarekere",
    title: "Kushi Groups Tavarekere | Premium Home Building Services",
    description: "Complete construction solutions from basement to dream home.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushi Groups Tavarekere",
    description: "Premium home building services from basement to completion.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton phoneNumber="9845447449" />
      </body>
    </html>
  );
}
