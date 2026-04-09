"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HardHat, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <HardHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className={cn(
                    "font-heading font-black text-lg leading-none block transition-colors",
                    scrolled || !isHome ? "text-primary" : "text-white"
                  )}
                >
                  Kushi Groups
                </span>
                <span
                  className={cn(
                    "text-[10px] font-medium uppercase tracking-widest transition-colors",
                    scrolled || !isHome ? "text-accent" : "text-accent/90"
                  )}
                >
                  Tavarekere
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group",
                    pathname === link.href
                      ? "text-accent"
                      : scrolled || !isHome
                      ? "text-gray-600 hover:text-primary"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:9845447449"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  scrolled || !isHome ? "text-primary hover:text-accent" : "text-white/80 hover:text-white"
                )}
              >
                <Phone className="w-4 h-4" />
                9845447449
              </a>
              <Button asChild variant="accent" size="sm">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled || !isHome
                  ? "text-primary hover:bg-primary/5"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-navigation"
              className="absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col pt-24 pb-8 px-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-3 px-4 rounded-xl text-base font-semibold transition-colors",
                      pathname === link.href
                        ? "text-accent bg-accent/5"
                        : "text-primary hover:text-accent hover:bg-accent/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto pt-6 border-t border-construction-border space-y-3">
                <a
                  href="tel:9845447449"
                  className="flex items-center gap-2 text-primary font-medium text-sm"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  9845447449
                </a>
                <Button asChild variant="accent" size="md" className="w-full justify-center">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
