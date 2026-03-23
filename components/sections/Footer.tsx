import Link from "next/link";
import { HardHat, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-black text-lg text-white block leading-none">Khushi</span>
                <span className="text-[10px] uppercase tracking-widest text-accent">Construction & Land Developers</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Construction · Petroleum · Concrete Blocks · Ready Mix Concrete · Transport — 5 divisions, one trusted group, building excellence since 2006.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/7HEz5N1QLD3rtB316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-accent transition-colors"
                >
                  https://maps.app.goo.gl/7HEz5N1QLD3rtB316
                </a>
              </li>
              <li>
                <a href="tel:9845447449" className="flex items-center gap-3 text-white/60 hover:text-accent text-sm transition-colors">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  9845447449
                </a>
              </li>
              <li>
                <a href="mailto:info@khushiconstruction.com" className="flex items-center gap-3 text-white/60 hover:text-accent text-sm transition-colors">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  info@khushiconstruction.com
                </a>
              </li>
            </ul>
            <div className="mt-5 bg-white/5 rounded-xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Business Hours</p>
              <p className="text-white/70 text-sm">Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-white/70 text-sm">Sat: 9:00 AM – 3:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {currentYear} Khushi Construction & Land Developers. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
