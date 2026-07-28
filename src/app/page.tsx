"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Phone,
  Star,
  Check,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  Smile,
  Clock,
  MapPin,
  Flame,
  FileCheck,
  Layers,
  Sparkle,
  Plus
} from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

export default function HomePage() {
  const chooseUsCards = [
    {
      icon: Award,
      title: "Experienced Dentists",
      desc: "Led by Ivy League graduate Dr. Sarah Alexander with over 15 years of surgical and cosmetic excellence."
    },
    {
      icon: Sparkles,
      title: "Modern Technology",
      desc: "Using ultra-low radiation 3D scanning, laser dentistry, and digital scanners for mess-free impressions."
    },
    {
      icon: Smile,
      title: "Gentle, Anxiety-Free Care",
      desc: "We offer custom sedation options, warm blankets, and noise-cancelling headphones for absolute comfort."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Pricing",
      desc: "Upfront estimates with zero hidden fees. We work directly with all major insurance providers."
    },
    {
      icon: Clock,
      title: "Same-Day Appointments",
      desc: "Dedicated daily scheduling blocks reserved exclusively for emergency toothaches and dental trauma."
    },
    {
      icon: Zap,
      title: "Family Friendly",
      desc: "A warm, welcoming environment for patients of all ages, from toddlers’ first checkups to seniors."
    }
  ];

  const coreServices = [
    {
      title: "Cosmetic Dentistry",
      slug: "cosmetic-dentistry",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=400&h=250&fit=crop",
      desc: "Transform your smile with custom porcelain veneers, cosmetic bonding, and smile makeovers.",
      benefits: ["Stain resistant", "Custom color match", "Completed in 2 visits"]
    },
    {
      title: "Dental Implants",
      slug: "dental-implants",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=250&fit=crop",
      desc: "Permanent, natural-looking replacement for missing teeth that look, feel, and function like real teeth.",
      benefits: ["Restores chewing power", "Prevents bone loss", "Lasts a lifetime"]
    },
    {
      title: "Invisalign® Aligners",
      slug: "invisalign",
      image: "https://images.unsplash.com/photo-1513412805490-2868bfd6eb6d?q=80&w=400&h=250&fit=crop",
      desc: "Straighten your teeth discretely with clear, comfortable, and removable orthodonic aligners.",
      benefits: ["Virtually invisible", "No food restrictions", "Faster than traditional braces"]
    },
    {
      title: "Emergency Dentistry",
      slug: "emergency-dentistry",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=400&h=250&fit=crop",
      desc: "Urgent dental relief for severe pain, tooth extractions, broken fillings, or chipped teeth.",
      benefits: ["Same-day appointments", "Immediate pain relief", "24/7 call support"]
    },
    {
      title: "Teeth Whitening",
      slug: "teeth-whitening",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=250&fit=crop",
      desc: "Brighten your smile up to 8 shades in a single in-office session, or using premium take-home kits.",
      benefits: ["Instant results", "Clinical strength formula", "Low sensitivity technique"]
    },
    {
      title: "Pediatric Dentistry",
      slug: "pediatric-dentistry",
      image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=400&h=250&fit=crop",
      desc: "Gentle, positive dental checkups and sealants tailored specifically for young children and teens.",
      benefits: ["Anxiety-free environment", "Fun, educational visits", "Prevents childhood cavities"]
    }
  ];

  const technologies = [
    { title: "Digital 3D X-Rays", desc: "Reduces radiation exposure by up to 90% while yielding crystal-clear bone models." },
    { title: "Intraoral 3D Camera", desc: "Enables you to see exactly what the dentist sees in real-time on screen." },
    { title: "Laser Dentistry", desc: "Perform drills and gum treatments silently, often without needing anesthesia." },
    { title: "iTero® Digital Scanner", desc: "No messy molds. We take 3D digital sweeps of your mouth for Invisalign in minutes." }
  ];

  const faqs = [
    {
      q: "Do you accept my dental insurance?",
      a: "Yes! We are in-network with all major PPO insurance plans (Delta Dental, Cigna, MetLife, Guardian, Aetna, etc.). Our dedicated insurance coordinator will file all claims on your behalf and maximize your benefits so you pay the lowest out-of-pocket costs possible."
    },
    {
      q: "What financing options do you offer if I don't have insurance?",
      a: "For patients without insurance, we offer a custom In-House Savings Plan that covers all cleaning, exams, and x-rays for a low annual fee, plus 20% off all dental work. We also partner with CareCredit for 0% interest monthly payment options up to 24 months."
    },
    {
      q: "What should I do in case of a sudden dental emergency?",
      a: "If you have a dental emergency (severe pain, swelling, knocked-out tooth, or bleeding), call us immediately at (800) 555-0199. We prioritize emergency cases and reserve dedicated same-day slots to relieve your pain immediately."
    },
    {
      q: "Is cosmetic teeth whitening safe for sensitive teeth?",
      a: "Absolutely. Our professional whitening systems use advanced buffers and desensitizers specifically formulated to protect your enamel and prevent the post-whitening zaps associated with over-the-counter whitening strips."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 pt-10 pb-20 sm:pb-32 sm:pt-16 lg:pb-36 lg:pt-24 border-b border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Content Left */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              {/* Trust Badge Top */}
              <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-900/5 px-4 py-1.5 rounded-full shadow-sm">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-teal-800">
                  4.9 Rating (500+ Patients)
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-black text-dark tracking-tight leading-[1.1] text-balance-balanced">
                  Healthy Smiles <br />
                  <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Start Here
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Trusted family and cosmetic dentistry providing gentle, state-of-the-art care in San Francisco. Welcome to comfort.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/book"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white text-base px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/35 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href="tel:+18005550199"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 text-base px-8 py-4 rounded-full font-bold border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center space-x-2 shadow-sm"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>Call (800) 555-0199</span>
                </a>
              </div>

              {/* Bullet Trust Factors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg font-bold text-dark font-poppins">Same-Day</span>
                  <span className="text-xs text-slate-500">Emergency Care</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg font-bold text-dark font-poppins">In-Network</span>
                  <span className="text-xs text-slate-500">Major Insurances</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg font-bold text-dark font-poppins">iTero® 3D</span>
                  <span className="text-xs text-slate-500">Digital Scans</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-lg font-bold text-dark font-poppins">CareCredit®</span>
                  <span className="text-xs text-slate-500">0% Financing</span>
                </div>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/3] w-full">
                {/* Standard dentist image */}
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&h=600&fit=crop"
                  alt="Friendly Dr. Sarah Alexander smiling with a patient"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                />
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary font-bold">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-widest font-bold">ADA Accredited</span>
                    <span className="block text-sm text-dark font-extrabold font-poppins">Board Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <span className="text-xs text-secondary font-bold uppercase tracking-widest">The Apex Difference</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
              Why Patients Choose Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We combine absolute clinical excellence with a compassionate, high-comfort environment to reshape your dental experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {chooseUsCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-teal-500/10 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-teal-950/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4 text-left">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest">Our Specialty Treatments</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                Premium Dental Care Tailored for You
              </h2>
            </div>
            <Link
              href="/services"
              className="text-primary hover:text-primary-hover font-bold text-sm flex items-center gap-1 group pb-2 border-b border-primary/20 hover:border-primary-hover"
            >
              <span>View All 15+ Services</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-poppins font-bold text-dark">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="space-y-2 pt-2">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                          <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center bg-slate-50 hover:bg-primary hover:text-white text-primary font-bold text-sm py-3 rounded-full border border-slate-100 hover:border-primary transition-all duration-300 gap-1.5"
                  >
                    <span>Read Treatment Guide</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER PREVIEW */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest">Real Results</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                Smile Makeover Gallery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Witness the power of cosmetic and implant treatments. Use our interactive slider tool to slide between Dr. Alexander's clinical cases before and after care.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <div className="p-1 bg-teal-50 text-primary rounded-lg mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>Full-mouth restorations &amp; whitening</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-slate-700">
                  <div className="p-1 bg-teal-50 text-primary rounded-lg mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>Invisalign alignments before &amp; after charts</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/before-after"
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center gap-1.5"
                >
                  <span>Enter Before &amp; After Gallery</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              {/* Teeth Whitening Slider Simulation */}
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&h=400&fit=crop"
                afterImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&h=400&fit=crop"
                beforeLabel="Stained / Uneven Teeth"
                afterLabel="Perfect Whitened Smile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS & SOCIAL PROOF */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest">Patient Stories</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
              What Our Happy Patients Say
            </h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* 6. MEET THE DOCTOR */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/5] w-full">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&h=625&fit=crop"
                  alt="Dr. Sarah Alexander DDS"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100 space-y-1">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Lead Dentist &amp; Director</span>
                  <h4 className="text-lg font-bold text-dark font-poppins">Dr. Sarah Alexander, DDS</h4>
                  <span className="text-xs text-secondary font-semibold">Columbia University Dental Surgery Graduate</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs text-secondary font-bold uppercase tracking-widest">Expert Care</span>
                <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                  Gentle Care from an Industry Leader
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Dr. Sarah Alexander is a board-certified general and cosmetic dentist dedicated to providing high-quality dental care. She holds a Doctorate in Dental Surgery from Columbia University and has completed extensive post-graduate residency training in full-mouth dental implants.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With over 15 years of surgical excellence, Dr. Alexander belongs to the American Dental Association (ADA) and has been awarded the Cosmetic Excellence award for her custom veneers work.
                </p>
              </div>

              {/* Bio Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/60 text-sm">
                <div>
                  <span className="block font-bold text-dark text-base">Columbia University</span>
                  <span className="block text-xs text-slate-500">Doctorate of Dental Surgery</span>
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">15+ Years</span>
                  <span className="block text-xs text-slate-500">Clinical Experience</span>
                </div>
                <div>
                  <span className="block font-bold text-dark text-base">AACD &amp; ADA</span>
                  <span className="block text-xs text-slate-500">Active Board Member</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all inline-flex items-center gap-1.5"
                >
                  <span>Read Full Doctor Biography</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY */}
      <section className="py-24 sm:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest">Dental Innovation</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
              Ultra-Modern Clinical Technology
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We leverage state-of-the-art tools to decrease pain, shorten treatment times, and render highly precise diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                <span className="inline-block w-8 h-8 rounded-lg bg-teal-50 text-primary flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </span>
                <h3 className="font-poppins font-bold text-dark text-base">{tech.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSURANCE & FINANCING */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest">Affordable Care</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                Insurance Accepted &amp; Payment Options
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Your oral health is a priority. We make premium dental care affordable by processing all claims with major insurance providers and offering flexible, interest-free payment terms.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>Delta Dental</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>Cigna PPO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>Aetna</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>MetLife PPO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>CareCredit Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>In-House Savings Plan</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-8 rounded-3xl space-y-6 text-center">
              <div className="mx-auto w-12 h-12 bg-teal-50 text-primary rounded-xl flex items-center justify-center font-bold">
                <FileCheck className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-poppins font-bold text-dark">No Dental Insurance?</h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto">
                  Our customized In-House Smile Plan offers 2 cleanings, exams, all routine x-rays, and 20% off all cosmetic/restorative work for only $29/month.
                </p>
              </div>
              <Link
                href="/book"
                className="inline-flex bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm px-6 py-3 rounded-full font-bold shadow-sm transition-all"
              >
                Join Savings Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOOKING & ONLINE REQUEST (FORM IN HOME PAGE) */}
      <section id="book-online" className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100 scroll-mt-20">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest font-sans">Easy Booking</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                Schedule Your Visit in Less than 60 Seconds
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Ready to secure your appointment? Select a preferred date and time that fits your busy calendar. Our staff will confirm your final slot immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4 text-sm text-slate-700">
                <div className="flex-1 flex items-center space-x-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary font-bold">
                    1h
                  </div>
                  <div>
                    <span className="block font-bold text-dark text-xs">Response Time</span>
                    <span className="block text-slate-500 text-[11px]">We confirm bookings fast</span>
                  </div>
                </div>
                <div className="flex-1 flex items-center space-x-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-primary font-bold">
                    24h
                  </div>
                  <div>
                    <span className="block font-bold text-dark text-xs">Always Open</span>
                    <span className="block text-slate-500 text-[11px]">Online request portal is open 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest">Frequently Asked</span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
              Dental Questions &amp; Answers
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-2.5 text-sm"
              >
                <h3 className="font-poppins font-bold text-dark text-base flex items-start gap-2.5">
                  <span className="text-primary text-xs font-black uppercase bg-teal-50 border border-teal-900/5 px-2 py-0.5 rounded mt-0.5">Q</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LOCAL SEO CONTACT MAP */}
      <section className="py-24 sm:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* NAP Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-secondary font-bold uppercase tracking-widest">Find Our Clinic</span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-black text-dark">
                San Francisco Dental Office
              </h2>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-dark">Apex Dental Center</span>
                    <span className="block">123 Professional Parkway, Suite A</span>
                    <span className="block">San Francisco, CA 94102</span>
                    <span className="block text-xs text-slate-400 mt-1 font-medium">Landmarks: Next to Civic Plaza, across from Main Library</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-dark">Call Support</span>
                    <a href="tel:+18005550199" className="hover:text-primary hover:underline font-bold text-base block">(800) 555-0199</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-dark">Office Hours</span>
                    <span className="block">Monday - Friday: 8:00 AM - 5:00 PM</span>
                    <span className="block">Saturday: 9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm px-6 py-3 rounded-full font-bold shadow-sm transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Map Frame Right */}
            <div className="lg:col-span-7">
              <div className="w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-200 shadow-md">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
