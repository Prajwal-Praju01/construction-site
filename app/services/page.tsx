import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Complete construction services — basement to turnkey. Structural work, MEP systems, interior finishing, and full project management.",
  alternates: {
    canonical: "/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Khushi Construction Services",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    description: service.description,
    areaServed: "Karnataka and Maharashtra",
    provider: {
      "@type": "LocalBusiness",
      name: "Khushi Construction & Land Developers",
      url: "https://khushiconstruction.com",
    },
    url: `https://khushiconstruction.com${service.href}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesContent />
    </>
  );
}
