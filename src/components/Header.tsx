"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Clock, Shield, Menu, X, Calendar, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Before & After", href: "/before-after" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-dark text-slate-200 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span>123 Professional Pkwy, San Francisco</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              <span>Mon - Fri: 8 AM - 5 PM | Sat: 9 AM - 2 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-3.5 w-3.5 text-secondary" />
              <span>All Major Insurances Welcome</span>
            </div>
            <div className="flex items-center space-x-2 text-rose-400 font-semibold animate-pulse">
              <Activity className="h-3.5 w-3.5" />
              <Link href="/services/emergency-dentistry">Same-Day Emergencies Welcome</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glassmorphism shadow-md py-3 border-b border-teal-900/10"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus-visible:outline-none">
            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-poppins font-extrabold text-2xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-poppins font-extrabold text-lg leading-tight uppercase tracking-wider">
                Apex Dental
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                &amp; Cosmetic Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium text-sm transition-colors duration-200 ${
                    isActive ? "text-primary font-semibold" : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+18005550199"
              className="flex items-center space-x-2 text-slate-700 font-semibold hover:text-primary transition-colors text-sm px-3 py-2 rounded-lg"
            >
              <Phone className="h-4 w-4 text-secondary" />
              <span>(800) 555-0199</span>
            </a>
            <Link
              href="/book"
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:+18005550199"
              className="p-2 text-primary bg-teal-50 rounded-full hover:bg-teal-100 transition-colors"
              aria-label="Call Office"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="h-9 w-9 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-poppins font-extrabold text-xl">A</span>
                    </div>
                    <span className="text-primary font-poppins font-bold text-base uppercase tracking-wider">
                      Apex Dental
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-slate-500 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium py-2 border-b border-slate-50 transition-colors ${
                          isActive ? "text-primary font-semibold pl-1" : "text-slate-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="space-y-4 mt-auto pt-6 border-t border-slate-100">
                <a
                  href="tel:+18005550199"
                  className="w-full flex items-center justify-center space-x-2 bg-slate-50 hover:bg-slate-100 text-slate-800 py-3 rounded-full font-bold border border-slate-200 transition-all"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>Call (800) 555-0199</span>
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover text-white py-3 rounded-full font-bold shadow-md shadow-primary/20 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Link>
                <p className="text-center text-xs text-slate-400">
                  Mon-Fri: 8AM-5PM | Sat: 9AM-2PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA Footer Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex gap-4 shadow-lg">
        <a
          href="tel:+18005550199"
          className="flex-1 flex items-center justify-center space-x-2 bg-secondary text-white py-3 rounded-full font-bold shadow-md text-sm active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>
        <Link
          href="/book"
          className="flex-grow-[1.5] flex items-center justify-center space-x-2 bg-primary text-white py-3 rounded-full font-bold shadow-md text-sm active:scale-95 transition-transform"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Online</span>
        </Link>
      </div>
    </>
  );
}
