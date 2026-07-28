import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone, Calendar, Check, Star, ArrowRight, ShieldCheck, HelpCircle, Activity } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

interface FAQ {
  q: string;
  a: string;
}

interface ServiceData {
  title: string;
  seoTitle: string;
  metaDescription: string;
  subtitle: string;
  image: string;
  description: string;
  benefits: string[];
  process: string[];
  faqs: FAQ[];
  testimonial: {
    text: string;
    author: string;
    treatment: string;
  };
}

const serviceDictionary: Record<string, ServiceData> = {
  invisalign: {
    title: "Invisalign® Clear Aligners",
    seoTitle: "Invisalign Clear Aligners San Francisco | Invisible Braces",
    metaDescription: "Straighten your teeth discretely with Invisalign clear aligners from Dr. Sarah Alexander. Schedule your free 3D digital scan consultation today.",
    subtitle: "The discreet, modern alternative to traditional braces.",
    image: "https://images.unsplash.com/photo-1513412805490-2868bfd6eb6d?q=80&w=800&h=500&fit=crop",
    description: "Invisalign® clear aligners offer a modern, virtually invisible method to straighten crowded or misaligned teeth. Using custom-molded, removable plastic trays, Invisalign gently shifts your teeth into alignment without the discomfort of metal wires or brackets.",
    benefits: [
      "Virtually invisible aligners that let you smile confidently during treatment.",
      "Removable trays allow you to eat whatever you want and brush/floss with ease.",
      "Smooth, medical-grade plastic edges prevent lip and cheek irritation.",
      "Fewer office visits are required compared to traditional metal adjustments."
    ],
    process: [
      "Digital 3D Scan: We take a precise, comfortable digital sweep of your teeth using the iTero® scanner.",
      "Custom Treatment Map: Dr. Alexander plans the exact movement of your teeth and generates a 3D simulation.",
      "Wear Your Trays: You receive customized trays to wear 20-22 hours a day, swapping trays every 1-2 weeks.",
      "Reveal Your Smile: Watch your teeth align, revealing a beautifully straight, healthy smile."
    ],
    faqs: [
      {
        q: "How long does Invisalign treatment take?",
        a: "Most adult cases are completed within 6 to 18 months, depending on the complexity of your alignment. We will provide an exact timeline during your consultation."
      },
      {
        q: "Is wearing Invisalign aligners painful?",
        a: "You may feel mild pressure or soreness for the first 1-2 days of starting a new tray, which is a sign your teeth are moving. It is significantly more comfortable than traditional braces."
      },
      {
        q: "How often do I need to wear the aligners?",
        a: "You must wear your aligners for 20 to 22 hours per day, removing them only to eat, drink, brush, and floss."
      }
    ],
    testimonial: {
      text: "I was self-conscious about wearing braces in my 30s. Invisalign was perfect. No one could tell I was wearing them, and my teeth are now perfectly straight!",
      author: "Emily R., Invisalign Patient",
      treatment: "Invisalign Clear Aligners"
    }
  },
  "dental-implants": {
    title: "Dental Implants",
    seoTitle: "Dental Implants San Francisco | Permanent Tooth Replacement",
    metaDescription: "Restore full chewing power and jawbone health with permanent, natural-looking dental implants from Dr. Sarah Alexander. Call today.",
    subtitle: "The gold standard for permanent, natural tooth replacement.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&h=500&fit=crop",
    description: "Dental implants are titanium posts surgically placed into the jawbone, acting as replacement roots for missing teeth. Once fused with the bone, they are topped with high-grade porcelain crowns that replicate the strength, feel, and function of a natural tooth.",
    benefits: [
      "Restores 100% of your biting and chewing capabilities, letting you eat anything.",
      "Prevents bone deterioration and changes in your facial profile.",
      "Does not require drilling or compromising adjacent healthy teeth.",
      "A permanent solution that, with proper hygiene, lasts a lifetime."
    ],
    process: [
      "Diagnostics: We perform a 3D cone-beam CT scan to analyze bone density and plan implant placement.",
      "Implant Placement: The titanium post is gently placed into the jawbone under local anesthesia or sedation.",
      "Fusion (Osteointegration): We allow 3-6 months for the bone to grow and fuse naturally around the post.",
      "Abutment & Crown: We attach a supportive collar (abutment) and top it with a customized porcelain crown."
    ],
    faqs: [
      {
        q: "Are dental implants painful?",
        a: "The surgical procedure is completely pain-free under anesthesia. Most patients report only mild soreness for 3-5 days after surgery, which is manageable with over-the-counter pain medication."
      },
      {
        q: "How long does the dental implant process take?",
        a: "The entire process usually takes between 3 to 6 months. This allows the implant to fully fuse with the bone, ensuring it can support full chewing force."
      },
      {
        q: "What is the success rate of dental implants?",
        a: "When placed by an experienced provider like Dr. Alexander, dental implants have a clinical success rate of over 95-98%."
      }
    ],
    testimonial: {
      text: "Losing a tooth made me self-conscious. The implant Dr. Alexander placed feels exactly like my real teeth. I can eat normally again without any worry.",
      author: "Michael T., Dental Implant Patient",
      treatment: "Single Tooth Implant"
    }
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry & Smile Makeovers",
    seoTitle: "Cosmetic Dentistry San Francisco | Veneers & Smile Design",
    metaDescription: "Transform your smile with cosmetic veneers, bonding, and teeth whitening. Customized smile design by San Francisco's top cosmetic dentist.",
    subtitle: "Artistry meets clinical excellence to design your perfect smile.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&h=500&fit=crop",
    description: "Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, and overall bite. Dr. Alexander combines clinical precision with artistic design to resolve chips, spacing gaps, misalignment, and dark staining, crafting a natural, radiant smile.",
    benefits: [
      "Instantly corrects visual defects like chipped, worn down, or crooked teeth.",
      "Improves symmetry and facial aesthetics customized to your features.",
      "Whitens and brightens teeth that do not respond to bleaching gels.",
      "Improves overall self-esteem and confidence in professional settings."
    ],
    process: [
      "Smile Consultation: We discuss your goals and analyze your teeth proportions and facial structure.",
      "Digital Smile Design: We create a 3D digital simulation of your target smile for your approval.",
      "Preparation: We make minor preparations to the teeth enamel for absolute bonding strength.",
      "Bonding & Finishing: We place your custom restorations, contouring and polishing them to a brilliant shine."
    ],
    faqs: [
      {
        q: "What procedures are included in cosmetic dentistry?",
        a: "It includes porcelain veneers, cosmetic bonding, teeth whitening, clear aligners, and gum recontouring. We customize a mix of these depending on your needs."
      },
      {
        q: "Will cosmetic dental work look natural?",
        a: "Yes! We use advanced translucent porcelains that reflect light exactly like natural enamel. We customize the tooth shade to match your facial skin tone."
      },
      {
        q: "How long do cosmetic restorations last?",
        a: "Porcelain veneers and crowns typically last 15 to 20 years with proper oral hygiene and regular checkups."
      }
    ],
    testimonial: {
      text: "The smile makeover I received has completely changed how I interact with clients. I get compliments on my teeth all the time. Absolutely worth every penny!",
      author: "Sarah J., Smile Makeover Patient",
      treatment: "Full Arch Porcelain Veneers"
    }
  },
  "emergency-dentistry": {
    title: "Same-Day Emergency Dentistry",
    seoTitle: "Emergency Dentist San Francisco | Same-Day Dental Relief",
    metaDescription: "Immediate relief for severe tooth pain, broken fillings, abscesses, or knocked-out teeth. Call now for a same-day emergency dental visit.",
    subtitle: "Fast, gentle pain relief when you need it most.",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=800&h=500&fit=crop",
    description: "Dental emergencies can be frightening and agonizing. Whether you are dealing with a severe, throbbing toothache, a broken crown, jaw swelling, or an avulsed (knocked-out) tooth, we reserve priority scheduling slots daily to treat your emergency immediately.",
    benefits: [
      "Dedicated same-day scheduling slots so you don't have to wait in pain.",
      "On-call dentist support to advise you on immediate steps.",
      "Complete pain alleviation using local blocks and sedation.",
      "Prevents infection from spreading or damaging surrounding teeth."
    ],
    process: [
      "Urgent Assessment: We immediately bring you back and take targeted digital x-rays of the painful area.",
      "Anesthetization: We administer local numbing to stop the tooth pain instantly.",
      "Active Treatment: Dr. Alexander performs a restorative repair (filling, root canal, or extraction).",
      "Aftercare & Prescriptions: We provide detailed recovery steps and prescribe anti-inflammatories if needed."
    ],
    faqs: [
      {
        q: "What constitutes a dental emergency?",
        a: "A dental emergency is any condition causing severe throbbing pain, facial swelling, continuous bleeding, a knocked-out tooth, or a broken tooth that exposes sensitive pulp."
      },
      {
        q: "How quickly can I be seen for an emergency?",
        a: "We prioritize emergencies. If you call us, we can usually accommodate you in our office within 1 to 2 hours of your call."
      },
      {
        q: "Do you offer sedation for emergency treatments?",
        a: "Yes. We offer nitrous oxide (laughing gas) and oral conscious sedation to help highly anxious or painful patients stay relaxed."
      }
    ],
    testimonial: {
      text: "A throbbing toothache kept me awake all night. I called Apex at 8 AM, and they got me in by 9 AM. Dr. Alexander performed a root canal and cured the pain immediately.",
      author: "David C., Emergency Patient",
      treatment: "Emergency Root Canal"
    }
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    seoTitle: "Pediatric Dentist San Francisco | Gentle Children's Dentistry",
    metaDescription: "Anxiety-free, gentle dental checkups and sealants tailored specifically for toddlers, kids, and teens. Welcome your child to a fun dentist visit.",
    subtitle: "Building healthy habits and happy dental associations early.",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=800&h=500&fit=crop",
    description: "Pediatric dentistry focuses on the unique oral health needs of children from infancy through adolescence. Our team is trained in pediatric dental development and child psychology, ensuring that visits are gentle, educational, and fun.",
    benefits: [
      "An anxiety-free environment that builds a lifetime of positive dental visits.",
      "Fitted dental sealants that block food debris and reduce cavities by up to 80%.",
      "Tracking bone structure and jaw growth to detect alignment problems early.",
      "Fun rewards and interactive guidance to make brushing at home exciting."
    ],
    process: [
      "Fun Introduction: We introduce your child to the dental chair, counting their teeth together in a game.",
      "Gentle Cleaning: We brush away plaque and check for signs of decay or misalignment.",
      "Fluoride Treatment: We apply a quick, tooth-strengthening varnish to reinforce enamel.",
      "Brushing Class: We teach the child (and parent) proper brushing and flossing techniques."
    ],
    faqs: [
      {
        q: "At what age should my child first visit the dentist?",
        a: "The American Academy of Pediatric Dentistry recommends scheduling their first dental checkup by their first birthday, or within 6 months of their first tooth erupting."
      },
      {
        q: "What are dental sealants, and are they safe?",
        a: "Yes! Sealants are safe, thin plastic coatings painted on the chewing surfaces of your child's rear molars to block decay-causing plaque."
      },
      {
        q: "How can I prepare my child for their first visit?",
        a: "Keep it simple and positive. Use happy words and explain that the dentist will count and shine their teeth. Avoid using scary words like 'shot' or 'drill'."
      }
    ],
    testimonial: {
      text: "My children actually look forward to dental checkups. Dr. Alexander and her assistants are incredibly patient, kind, and make everything fun.",
      author: "Jessica M., Parent of two",
      treatment: "Kids Cleaning & Exam"
    }
  },
  "teeth-whitening": {
    title: "Professional Teeth Whitening",
    seoTitle: "Professional Teeth Whitening San Francisco | Instant Brightening",
    metaDescription: "Brighten your smile up to 8 shades in a single in-office hour. Formulation designed to prevent tooth sensitivity. Book now.",
    subtitle: "Brighten your smile up to 8 shades in just 60 minutes.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&h=500&fit=crop",
    description: "Over-the-counter whitening strips can take weeks to work and often trigger sharp tooth sensitivity. Our professional, clinical-strength teeth whitening system uses concentrated peroxide gels activated by cool LED light to safely remove years of staining from coffee, tea, and aging in a single session.",
    benefits: [
      "Brightens your smile up to 8 shades in just one hour-long visit.",
      "Formulated with desensitizers to prevent tooth sensitivity and pain.",
      "Removes deep, structural enamel stains that over-the-counter strips miss.",
      "Conducted safely under dentist supervision to protect gums."
    ],
    process: [
      "Prep: We record your current tooth shade and apply a protective barrier over your gums.",
      "Gel Application: We coat your teeth with a premium, professional-strength whitening gel.",
      "LED Activation: We position a cool blue LED light over your teeth to activate the gel oxidation.",
      "Rinse & Seal: We rinse the gel and apply a post-treatment desensitizing varnish."
    ],
    faqs: [
      {
        q: "How long do professional teeth whitening results last?",
        a: "Results typically last 1 to 3 years. It depends on your lifestyle; cutting down on staining items like coffee, red wine, and tobacco will prolong the brightness."
      },
      {
        q: "Will this treatment trigger tooth sensitivity?",
        a: "Our clinical formula has built-in buffers and desensitizers, so 95% of patients experience little to no post-treatment sensitivity or 'zaps'."
      },
      {
        q: "Does professional whitening work on crowns or fillings?",
        a: "No, dental bleaching agents only work on natural enamel. If you have visible crowns, veneers, or fillings, we can replace them after whitening to match your new shade."
      }
    ],
    testimonial: {
      text: "My teeth were severely stained from years of drinking coffee. After a single session with Dr. Alexander, they are brighter than they've ever been! Quick and easy.",
      author: "Robert K., Whitening Patient",
      treatment: "In-Office Teeth Whitening"
    }
  }
};

interface StaticParams {
  slug: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return [
    { slug: "invisalign" },
    { slug: "dental-implants" },
    { slug: "cosmetic-dentistry" },
    { slug: "emergency-dentistry" },
    { slug: "pediatric-dentistry" },
    { slug: "teeth-whitening" },
    { slug: "general-dentistry" },
    { slug: "dental-cleaning" },
    { slug: "crowns" }
  ];
}

interface ServicePageProps {
  params: Promise<StaticParams>;
}

// Generate Metadata dynamically for SEO optimization
export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const service = serviceDictionary[slug];

  if (!service) {
    return {
      title: "Dental Service | Apex Dental Care",
      description: "Learn more about our premium dental treatments in San Francisco.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      type: "article",
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Fallback for non-core pages to prevent 404
  let service = serviceDictionary[slug];
  
  if (!service) {
    // Generate a default dataset for other slugs
    const prettyTitle = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    service = {
      title: prettyTitle,
      seoTitle: `${prettyTitle} San Francisco | Apex Dental Care`,
      metaDescription: `Get professional, gentle ${prettyTitle} in San Francisco from Dr. Sarah Alexander. Accept new patients and same-day dental appointments.`,
      subtitle: `State-of-the-art ${prettyTitle.toLowerCase()} customized for your comfort.`,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&h=500&fit=crop",
      description: `We offer premium ${prettyTitle.toLowerCase()} using modern techniques and materials. Our experienced team ensures that your treatment is efficient, safe, and comfortable.`,
      benefits: [
        `High-quality clinical materials and techniques.`,
        `Comfortable, gentle care designed to reduce stress.`,
        `Fully customized to your unique anatomical goals.`
      ],
      process: [
        "Consultation: Dr. Alexander performs a detailed clinical exam and digital diagnostics.",
        "Treatment Plan: We provide you with upfront options and cost estimations.",
        "Gentle Care: We perform the procedure utilizing our high-comfort protocols.",
        "Aftercare: We follow up with supportive care instructions."
      ],
      faqs: [
        {
          q: `Is ${prettyTitle.toLowerCase()} covered by dental insurance?`,
          a: "Most plans cover standard restorative treatments. Cosmetic procedures may have different coverage. We will compile a detailed breakdown of your benefits."
        },
        {
          q: "How many visits are required?",
          a: "It depends on the complexity of your case. Many treatments are completed in a single visit, while custom porcelain restorations require two visits."
        }
      ],
      testimonial: {
        text: `Dr. Alexander and the staff made my treatment completely pain-free. They explain everything and the results are outstanding!`,
        author: "Alex P., Patient",
        treatment: prettyTitle
      }
    };
  }

  // Create FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white">
      {/* FAQ Schema Inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <Link
                href="/services"
                className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline"
              >
                &larr; Back to Services
              </Link>
              <h1 className="text-3xl sm:text-5xl font-poppins font-black text-dark tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {service.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#book-service"
                  className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm px-6 py-3 rounded-full font-bold shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Calendar className="h-4.5 w-4.5" />
                  <span>Request Consultation</span>
                </a>
                <a
                  href="tel:+18005550199"
                  className="bg-white text-slate-800 text-xs sm:text-sm px-6 py-3 rounded-full font-bold border border-slate-200 hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-4.5 w-4.5 text-secondary" />
                  <span>Call (800) 555-0199</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] w-full bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Detailed Info Column */}
          <div className="lg:col-span-7 space-y-12 text-left">
            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-poppins font-bold text-dark">Treatment Overview</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-poppins font-bold text-dark">Key Patient Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs"
                  >
                    <Check className="h-4.5 w-4.5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Process */}
            <div className="space-y-6">
              <h2 className="text-2xl font-poppins font-bold text-dark">The Treatment Process</h2>
              <div className="relative border-l border-slate-200 pl-6 space-y-8 ml-3">
                {service.process.map((step, idx) => {
                  const [stepTitle, stepDesc] = step.split(":");
                  return (
                    <div key={idx} className="relative">
                      {/* Step Indicator Dot */}
                      <span className="absolute -left-[31px] top-0.5 w-4.5 h-4.5 rounded-full bg-teal-50 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-dark text-sm font-poppins">{stepTitle}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{stepDesc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-poppins font-bold text-dark flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-secondary" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2 text-xs">
                    <h4 className="font-poppins font-bold text-dark text-sm flex items-start gap-2">
                      <span className="text-primary font-black uppercase bg-teal-100/50 px-2 py-0.5 rounded">Q</span>
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial & Form Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Treatment Testimonial */}
            <div className="bg-teal-50/50 border border-teal-900/5 p-8 rounded-3xl space-y-4 text-left">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 italic text-sm leading-relaxed">
                "{service.testimonial.text}"
              </p>
              <div className="text-xs">
                <span className="block font-bold text-dark">{service.testimonial.author}</span>
                <span className="block text-slate-400 font-medium">Verified Case: {service.testimonial.treatment}</span>
              </div>
            </div>

            {/* Custom Side Form (Conversion target) */}
            <div id="book-service" className="scroll-mt-24">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
