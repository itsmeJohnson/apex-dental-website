import { Phone, MapPin, Clock, Mail, ShieldAlert, Car, Compass } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Connect With Us</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            Contact Our San Francisco Office
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions or ready to book? Reach out by phone, visit our clinic, or submit a quick appointment request online.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-poppins font-bold text-dark">Office Details</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We are conveniently located in San Francisco. Free patient parking is available directly behind our building.
              </p>
            </div>

            {/* NAP Info */}
            <div className="space-y-6 text-sm text-slate-700">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 text-primary rounded-xl mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">Apex Dental Center</span>
                  <span className="block mt-0.5 text-slate-600">123 Professional Parkway, Suite A</span>
                  <span className="block text-slate-600">San Francisco, CA 94102</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 text-primary rounded-xl mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">Phone Number</span>
                  <a href="tel:+18005550199" className="text-primary font-extrabold text-lg block hover:underline">
                    (800) 555-0199
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">Emergency lines open 24/7</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 text-primary rounded-xl mt-0.5">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">Office Hours</span>
                  <div className="text-slate-600 space-y-1 mt-1 text-xs">
                    <span className="block font-medium">Monday - Friday: 8:00 AM - 5:00 PM</span>
                    <span className="block font-medium">Saturday: 9:00 AM - 2:00 PM</span>
                    <span className="block text-rose-500 font-bold">Sunday: Emergency Calls Only</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 text-primary rounded-xl mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">Email Support</span>
                  <span className="block mt-0.5 text-slate-600">info@apexdentalcare.com</span>
                </div>
              </div>
            </div>

            {/* Landmarks & Parking */}
            <div className="border-t border-slate-100 pt-8 space-y-4 text-xs text-slate-500">
              <div className="flex items-start space-x-3">
                <Compass className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-700">Nearby Landmarks</span>
                  <p>Located immediately adjacent to the Civic Plaza and directly across the street from the Main Library.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Car className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-slate-700">Parking Details</span>
                  <p>Free, dedicated parking spots are reserved for Apex Dental patients in the rear parking lot. Validation is not required.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-[450px] w-full border-t border-slate-200 bg-slate-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091765352662!2d-122.4208472!3d37.7749292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050ec5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1614052456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Apex Dental Location Map"
        />
      </section>
    </div>
  );
}
