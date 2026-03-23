import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Khushi Construction & Land Developers — 18 years of building premium homes with integrity, craftsmanship, and care.",
};

export default function AboutPage() {
  return <AboutContent />;
}
