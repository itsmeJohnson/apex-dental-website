import Link from "next/link";
import { Star, ShieldCheck, Heart, Award, Sparkles, BookOpen, GraduationCap, Calendar, Phone } from "lucide-react";

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Ivy League Education",
      desc: "Dr. Alexander holds a Doctorate in Dental Surgery (DDS) from Columbia University School of Dental Surgery."
    },
    {
      icon: Award,
      title: "Board Certifications",
      desc: "Accredited member of the American Academy of Cosmetic Dentistry (AACD) and board certified in general dentistry."
    },
    {
      icon: BookOpen,
      title: "Continuous Education",
      desc: "Completes over 100 hours of clinical residency training annually in advanced dental implantology and digital prosthodontics."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Our Practice</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            About Apex Dental Center
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing general, cosmetic, and implant dentistry in a warm, state-of-the-art environment built around your comfort.
          </p>
        </div>
      </section>

      {/* Philosophy and Mission */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest">Our Philosophy</span>
            <h2 className="text-3xl font-poppins font-black text-dark">
              A Patient-First Dental Experience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Apex Dental Center, we believe that visiting the dentist shouldn't feel stressful. We've redesigned our clinic from the ground up to minimize anxiety and enhance clinical quality.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We employ advanced, ultra-low radiation digital x-rays, non-invasive laser gum therapies, and noise-cancelling patient headphones to keep you relaxed and informed. We don't perform unnecessary work; instead, we prioritize transparent, upfront treatment pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-slate-700 font-medium">
                <ShieldCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">HIPAA Secure Processing</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 font-medium">
                <Heart className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">Gentle Pedodontic Care</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video w-full bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1513412805490-2868bfd6eb6d?q=80&w=600&h=340&fit=crop"
                alt="Modern, luxury dental operatory room at Apex Dental"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Dentist Details */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] w-full bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&h=625&fit=crop"
                  alt="Dr. Sarah Alexander DDS at Apex Dental"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest">Meet Dr. Alexander</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                Dr. Sarah Alexander, DDS
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Dr. Sarah Alexander is a board-certified general, implant, and cosmetic dentist who has been restoring smiles in the San Francisco area for over 15 years. Her patients appreciate her gentle touch, comprehensive explanations, and commitment to detail.
                </p>
                <p>
                  She earned her Doctorate of Dental Surgery (DDS) from Columbia University School of Dental Surgery, graduating in the top 5% of her class. Following dental school, she completed a rigorous general practice residency at San Francisco General Hospital, specializing in complex oral surgical extractions and emergency restorations.
                </p>
                <p>
                  As an active fellow of the American Dental Association (ADA) and the American Academy of Cosmetic Dentistry (AACD), Dr. Alexander frequently lectures on digital smile design technologies and laser gum surgeries.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <h4 className="font-bold text-dark text-sm uppercase tracking-wider font-poppins">Certifications &amp; Awards</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Columbia University Surgical Dentistry Award</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>AACD Gold Medal in Veneers Restoration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>iTero® Certified Digital Planner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Certified Laser Safety Officer in Dentistry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Credentials Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Academic Excellence</span>
          <h2 className="text-3xl font-poppins font-black text-dark">
            Our Clinical Standard
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Dr. Alexander and the dental support team pursue extensive ongoing certifications to provide the highest clinical standards in San Francisco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <div key={index} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-4">
                <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-dark">{cred.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{cred.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="bg-primary py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/20 to-teal-800/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-white tracking-tight">
            Ready to Experience Gentle, Premium Care?
          </h2>
          <p className="text-teal-100 text-sm max-w-xl mx-auto">
            Book an appointment online 24/7 or call our office during business hours to schedule your consultation. We accept all major insurances.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-primary px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="h-4.5 w-4.5" />
              <span>Book Appointment Online</span>
            </Link>
            <a
              href="tel:+18005550199"
              className="w-full sm:w-auto bg-primary border border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call Now: (800) 555-0199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
