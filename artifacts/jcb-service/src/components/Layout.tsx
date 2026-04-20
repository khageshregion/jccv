import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

const BUSINESS_PHONE = "+91 7706034464";
const WHATSAPP_URL = "https://wa.me/917706034464?text=Hello%20Aman%20Trading%20JCB%20Service%2C%20I%20need%20JCB%20support%20for%20my%20project.%20Please%20share%20availability%20and%20pricing.";
const EMAIL = "hello@amantradingjcbservice.in";

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <div className="bg-secondary text-secondary-foreground text-sm py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Serving Bihar Lalpur & surrounding areas</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>Mon-Sun, 6AM-9PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${BUSINESS_PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-primary transition-colors" data-testid="link-topbar-phone">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-bold">{BUSINESS_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2" data-testid="link-logo">
              <div className="bg-primary text-primary-foreground p-2 font-display font-black text-xl tracking-tighter uppercase leading-none">
                AMAN<br />TRADING
              </div>
              <div className="hidden sm:block flex-col font-display font-bold uppercase leading-none text-secondary">
                <span className="text-xl">JCB Service</span>
                <span className="text-xs tracking-wider text-muted-foreground block">Earthmoving Support</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-4 text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                    location === link.href
                      ? "border-primary text-primary"
                      : "border-transparent text-secondary"
                  }`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="default" className="font-bold uppercase tracking-wider">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="btn-nav-whatsapp">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                data-testid="btn-mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background absolute w-full left-0 z-50">
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block pl-3 pr-4 py-3 border-l-4 text-base font-bold uppercase tracking-wider ${
                    location === link.href
                      ? "bg-primary/10 border-primary text-primary"
                      : "border-transparent text-secondary hover:bg-muted hover:border-border hover:text-secondary"
                  }`}
                  data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-4">
                <Button asChild variant="default" className="w-full font-bold uppercase tracking-wider">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="btn-mobile-nav-whatsapp">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 md:px-8 border-y-8 border-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">Need JCB support quickly?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Talk to us about your next job site. We offer reliable earthmoving support for residential, commercial, and industrial projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="secondary" className="font-bold text-lg h-14 px-8 uppercase tracking-wide">
              <a href={`tel:${BUSINESS_PHONE.replace(/\s+/g, '')}`} data-testid="btn-footer-call">
                <Phone className="mr-2 h-5 w-5" />
                Call {BUSINESS_PHONE}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold text-lg h-14 px-8 uppercase tracking-wide bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="btn-footer-whatsapp">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground p-2 font-display font-black text-xl tracking-tighter uppercase leading-none inline-block mb-2">
              AMAN<br />TRADING
            </div>
            <p className="text-muted-foreground">
              Dependable, no-nonsense JCB hire service used by plot owners, local contractors, and industrial site managers.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{BUSINESS_PHONE}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-primary">Service Area</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Serving Bihar Lalpur and surrounding areas across rural Bihar.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-primary">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block">Monday to Sunday</span>
                  <span className="text-muted-foreground">6:00 AM to 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Aman Trading JCB Service. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
