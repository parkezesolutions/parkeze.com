import { Link, useLocation } from "wouter";
import logo from "@assets/ParkezeNoBg.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useTheme();

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/developers", label: "Developers" },
    { href: "/case-study/uofsc-pilot", label: "Case Study" },
    { href: "/company", label: "Company" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={logo} alt="Parkeze" className="h-8 w-auto" />
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">Parkeze</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`
                text-sm font-medium transition-colors hover:text-primary
                ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}
              `}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://map.parkeze.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground">
                Map
              </Button>
            </a>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-white font-medium shadow-md shadow-primary/20"
              onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  <div className={`
                    block px-3 py-3 rounded-md text-base font-medium
                    ${isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}
                  `}>
                    {link.label}
                  </div>
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4 flex flex-col gap-3">
                <a href="https://map.parkeze.com" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">View Map</Button>
                </a>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Button className="w-full" onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8" id="footer-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Parkeze" className="h-6 w-auto opacity-90" />
              <span className="font-display font-bold text-lg">Parkeze</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building the digital layer for physical parking infrastructure. 
              Smart, connected, and data-driven solutions for modern cities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://map.parkeze.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Live Map</a></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Hardware Sensors</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Analytics Dashboard</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">API Access</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/company" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/case-study/uofsc-pilot" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/developers" className="hover:text-primary transition-colors">Developers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to modernize your parking infrastructure?
            </p>
            <a href="mailto:hello@parkeze.com" className="text-primary hover:underline text-sm font-medium">
              hello@parkeze.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Parkeze Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
