import Link from "next/link";
import { Check, ChevronRight, Phone, Calendar, Star } from "lucide-react";

interface ServiceItem {
  name: string;
  slug: string;
  desc: string;
  benefits: string[];
}

interface ServiceCategory {
  title: string;
  desc: string;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Preventative & Family Care",
    desc: "Maintaining healthy smiles for the entire family through regular cleanings, diagnostics, and patient education.",
    services: [
      {
        name: "General Dentistry",
        slug: "general-dentistry",
        desc: "Comprehensive exams, diagnostic digital x-rays, and customized treatments designed to maintain oral wellness.",
        benefits: ["Personalized oral plans", "Decay detection", "Gum health diagnostics"]
      },
      {
        name: "Dental Cleaning",
        slug: "dental-cleaning",
        desc: "Professional cleanings to remove calcified plaque and tartar, complete with a tooth polish and fluoride wash.",
        benefits: ["Freshens breath", "Stain removal", "Prevents gum disease"]
      },
      {
        name: "Pediatric Dentistry",
        slug: "pediatric-dentistry",
        desc: "Fun, positive, and gentle dental checkups designed specifically for toddlers, kids, and adolescents.",
        benefits: ["Anxiety-free setting", "Cavity-preventing sealants", "Oral growth tracking"]
      }
    ]
  },
  {
    title: "Restorative Dentistry",
    desc: "Rebuilding teeth that have been damaged by decay, fractures, wear, or missing elements to original function.",
    services: [
      {
        name: "Dental Fillings",
        slug: "dental-fillings",
        desc: "Composite resin tooth-colored fillings that seal cavities invisible to the eye while preserving structure.",
        benefits: ["Mercury-free", "Blends with natural teeth", "Restores biting strength"]
      },
      {
        name: "Root Canal",
        slug: "root-canal",
        desc: "High-precision therapy that removes infected pulp within a damaged tooth, stopping toothaches and saving the tooth.",
        benefits: ["Eliminates severe pain", "Prevents tooth loss", "Completed in one visit"]
      },
      {
        name: "Crowns & Bridges",
        slug: "crowns",
        desc: "Porcelain crowns and bridges to encase weak teeth or bridge empty gaps, matching natural color and bite.",
        benefits: ["Long-lasting durability", "Protects cracked teeth", "Bridges gaps seamlessly"]
      },
      {
        name: "Dental Implants",
        slug: "dental-implants",
        desc: "Titanium replacement roots topped with customized crowns, replicating natural teeth with permanent bone stability.",
        benefits: ["Restores full chewing power", "Prevents jaw bone loss", "Lasts a lifetime"]
      },
      {
        name: "Wisdom Tooth Removal",
        slug: "wisdom-tooth-removal",
        desc: "Gentle extractions of impacted or crowded wisdom teeth to prevent infection and structural misalignment.",
        benefits: ["Anesthesia options", "Minimally invasive", "Relieves jaw pressure"]
      },
      {
        name: "Dentures",
        slug: "dentures",
        desc: "Comfortable, modern full or partial dentures that stay secure, letting you smile and eat with confidence.",
        benefits: ["Restores facial profile", "Natural-looking acrylics", "Implant-supported options"]
      }
    ]
  },
  {
    title: "Cosmetic & Orthodontics",
    desc: "Enhancing the aesthetic appeal of your smile through modern alignment, color improvements, and tooth shaping.",
    services: [
      {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        desc: "Custom-designed smile makeovers utilizing bonding, reshaping, and gum contouring for ideal symmetry.",
        benefits: ["Restores confidence", "Corrects alignment flaws", "Custom virtual mockups"]
      },
      {
        name: "Porcelain Veneers",
        slug: "veneers",
        desc: "Ultra-thin custom porcelain shells bonded to the front of teeth, correcting chips, gaps, and dark stains.",
        benefits: ["Stain resistant", "Dramatic, rapid changes", "Natural light reflection"]
      },
      {
        name: "Teeth Whitening",
        slug: "teeth-whitening",
        desc: "Clinical-strength teeth whitening that brightens smiles up to 8 shades in a single in-office hour.",
        benefits: ["Instant results", "Formulated for sensitivity", "Take-home kits available"]
      },
      {
        name: "Invisalign® Clear Aligners",
        slug: "invisalign",
        desc: "Removable clear aligners that straighten teeth without the metal brackets or wire adjustments.",
        benefits: ["Completely invisible", "Easy brushing/eating", "Fewer office visits needed"]
      }
    ]
  },
  {
    title: "Urgent & Emergency Care",
    desc: "Immediate daily openings reserved specifically for painful emergencies, extractions, and trauma.",
    services: [
      {
        name: "Emergency Dentistry",
        slug: "emergency-dentistry",
        desc: "Same-day priority diagnostics and pain relief for toothaches, loose crowns, broken teeth, or swelling.",
        benefits: ["Same-day emergency block", "On-call dentist support", "Rapid pain relief"]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Our Care Catalogue</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            Premium Dental Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From basic cleaning checkups to complex full-mouth implants and cosmetic veneers, Dr. Alexander provides complete dental care.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-8">
            {/* Category Header */}
            <div className="border-b border-slate-150 pb-6 text-left">
              <h2 className="text-2xl font-poppins font-bold text-dark">{cat.title}</h2>
              <p className="text-slate-500 text-sm mt-1 max-w-3xl leading-relaxed">{cat.desc}</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.services.map((service, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-teal-500/10 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-poppins font-bold text-dark">{service.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                    <div className="space-y-2 pt-2">
                      {service.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-xs text-slate-600">
                          <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-center bg-white hover:bg-primary hover:text-white text-primary font-bold text-xs py-2.5 rounded-full border border-slate-200 hover:border-primary transition-all duration-300 gap-1"
                    >
                      <span>Read Treatment Guide</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Trust factors bottom */}
      <section className="bg-slate-50 py-16 text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex text-amber-500 justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <h3 className="text-2xl font-poppins font-bold text-dark">Not Sure Which Treatment You Need?</h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Schedule a general checkup and exam. Dr. Alexander will evaluate your oral health and provide options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="h-4.5 w-4.5" />
              <span>Request Checkup</span>
            </Link>
            <a
              href="tel:+18005550199"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 px-8 py-3.5 rounded-full font-bold text-sm border border-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-4.5 w-4.5 text-secondary" />
              <span>Call: (800) 555-0199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
