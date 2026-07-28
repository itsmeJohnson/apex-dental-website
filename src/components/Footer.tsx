import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Shield, Heart, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-slate-300 font-sans border-t border-slate-800">
      {/* Top Trust Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="p-3 bg-teal-950/50 rounded-xl text-secondary border border-teal-800/30">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">HIPAA Compliant Care</h4>
            <p className="text-xs text-slate-400">Your health data is completely secured &amp; private</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="p-3 bg-teal-950/50 rounded-xl text-secondary border border-teal-800/30">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">ADA Member Dentist</h4>
            <p className="text-xs text-slate-400">Adhering to the highest standards of dentistry</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <div className="p-3 bg-teal-950/50 rounded-xl text-secondary border border-teal-800/30">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Patient-First Financing</h4>
            <p className="text-xs text-slate-400">Flexible payment plans &amp; CareCredit accepted</p>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Map Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-poppins font-extrabold text-xl">A</span>
            </div>
            <span className="text-white font-poppins font-bold text-lg uppercase tracking-wider">
              Apex Dental
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Providing premium, gentle dental care using state-of-the-art technology. Helping families and professionals in San Francisco achieve radiant, healthy smiles.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-poppins font-semibold text-sm uppercase tracking-wider mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-secondary transition-colors">Dental Services</Link>
            </li>
            <li>
              <Link href="/before-after" className="hover:text-secondary transition-colors">Smile Gallery</Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-secondary transition-colors">Patient Reviews</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-secondary transition-colors">Dental Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition-colors">Contact Office</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div className="space-y-6 text-sm">
          <h3 className="text-white font-poppins font-semibold text-sm uppercase tracking-wider mb-2">
            Contact Us
          </h3>
          <div className="space-y-4">
            <a
              href="tel:+18005550199"
              className="flex items-start space-x-3 text-slate-300 hover:text-secondary transition-colors"
            >
              <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white text-base">(800) 555-0199</span>
                <span className="text-xs text-slate-400">Click to Call (Available 24/7)</span>
              </div>
            </a>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-white">123 Professional Parkway</span>
                <span className="block text-xs text-slate-400">Suite A, San Francisco, CA 94102</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 hover:text-secondary break-all">info@apexdentalcare.com</span>
            </div>
            <div className="flex items-start space-x-3 pt-2">
              <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 space-y-1">
                <span className="block text-slate-300 font-medium">Mon - Fri: 8:00 AM - 5:00 PM</span>
                <span className="block text-slate-300 font-medium">Sat: 9:00 AM - 2:00 PM</span>
                <span className="block text-rose-400 font-bold">Sun: Closed (Emergency Support Available)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Embed Local SEO Map */}
        <div className="space-y-4">
          <h3 className="text-white font-poppins font-semibold text-sm uppercase tracking-wider mb-2">
            Our Location
          </h3>
          <div className="w-full h-44 rounded-xl overflow-hidden shadow-inner border border-slate-800 bg-slate-900">
            {/* Standard static/iframe Google Maps container */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3153.08272990666!2d-122.421596!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050ec5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1565243456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apex Dental Location Map"
            />
          </div>
          <span className="block text-[11px] text-slate-500 leading-normal">
            Located next to the Civic Plaza, free patient parking available in the rear lot.
          </span>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-slate-950/60 py-6 text-xs text-slate-500 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; {currentYear} Apex Dental Center. All rights reserved. All content, images, and data are protected.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
