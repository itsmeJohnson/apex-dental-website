import { notFound } from "next/navigation";
import Link from "next/link";
import { User, Calendar, Clock, ChevronLeft, Phone, Heart, Shield } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

interface ArticleData {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

const articleDictionary: Record<string, ArticleData> = {
  "teeth-whitening-tips": {
    title: "5 Dental Tips for Maintaining Brighter White Teeth After Whitening",
    category: "Dental Tips",
    author: "Dr. Sarah Alexander",
    date: "July 24, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&h=500&fit=crop",
    content: [
      "Professional in-office whitening is one of the quickest ways to dramatically boost your smile. However, the first 48 hours after your procedure are critical. During this time, the pores in your dental enamel remain open, making them highly vulnerable to new staining compounds.",
      "Here are the top 5 clinical tips to maintain your bright white smile long-term:",
      "1. Heed the 'White Diet' rule: For the first 48 hours, consume only neutral-colored foods and liquids. Avoid coffee, black tea, dark sodas, red wine, soy sauce, and tomato paste. Instead, stick to white meat chicken, pasta, rice, egg whites, and milk.",
      "2. Drink through a straw: When you do return to coffee or iced tea, drinking through a straw helps bypass your front teeth entirely, reducing direct enamel exposure.",
      "3. Rinse with water immediately: If you do consume staining foods, rinse your mouth with plain water immediately. This dilutes the chromogens (pigments) before they can bind to the enamel.",
      "4. Upgrade to an electric toothbrush: Electric toothbrushes remove surface stains much more effectively than manual brushes, slowing down stain accumulation between checkups.",
      "5. Use whitening toothpaste selectively: Whitening toothpastes are slightly abrasive. Use them twice a week to polish stains, but use a standard fluoride toothpaste for daily enamel protection."
    ]
  },
  "dental-emergency-guide": {
    title: "What to Do in a Dental Emergency: Knocks, Fractures, and Pain",
    category: "Emergency Care",
    author: "Dr. Sarah Alexander",
    date: "June 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=800&h=500&fit=crop",
    content: [
      "A sudden dental injury or severe toothache can be terrifying. Knowing how to react in the first few minutes can save your tooth and prevent serious jaw infections. We reserve dedicated emergency spaces daily, but home preparation is crucial.",
      "Here is the standard clinical guide on handling major dental emergencies:",
      "Emergency 1: A Knocked-Out (Avulsed) Tooth. Time is critical. Pick up the tooth by the chewing surface (crown), NEVER touch the root. Gently rinse it in water if dirty, but do not scrub. Attempt to insert the tooth back into the empty socket and bite down gently. If that is not possible, store the tooth in a glass of cold milk or saliva. Contact us immediately; a tooth can be successfully re-implanted if treated within 60 minutes.",
      "Emergency 2: Severe, Throbbing Toothache. Rinse your mouth with warm salt water. Use dental floss gently to check if trapped food debris is causing the pain. Do not place aspirin directly on the gums, as this causes chemical burns. Call our office for a same-day emergency appointment.",
      "Emergency 3: Chipped or Broken Tooth. Save any broken pieces. Rinse your mouth with warm water. Apply a cold compress to your cheek to control swelling. We can easily restore the structure using tooth-colored composite resins."
    ]
  },
  "how-invisalign-works": {
    title: "How Clear Aligners Correct Bite Occlusion: Invisalign 3D Planning",
    category: "Cosmetic Dentistry",
    author: "Dr. Sarah Alexander",
    date: "May 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1513412805490-2868bfd6eb6d?q=80&w=800&h=500&fit=crop",
    content: [
      "Historically, correcting crooked teeth meant wearing metal brackets and wire ties. Today, Invisalign clear aligners leverage advanced digital technology to guide tooth movement with incredible precision.",
      "The clinical magic happens during the initial consultation. Using the iTero digital scanner, we map out a 3D digital model of your dental arches. Dr. Alexander then uses Invisalign's ClinCheck software to simulate the exact movement vector for each individual tooth.",
      "Unlike braces which apply high, constant force, Invisalign applies low, controlled forces. Each tray in your series is manufactured to be slightly different, prompting incremental movements. This reduces the risk of root resorption and makes alignment highly comfortable.",
      "Furthermore, aligners do not just align your smile; they correct your overall bite occlusion. Straightening teeth prevents uneven wearing, reduces grinding damage, and relieves strain on the temporomandibular joint (TMJ)."
    ]
  }
};

interface StaticParams {
  slug: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  return [
    { slug: "teeth-whitening-tips" },
    { slug: "dental-emergency-guide" },
    { slug: "how-invisalign-works" }
  ];
}

interface ArticlePageProps {
  params: Promise<StaticParams>;
}

export default async function BlogDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = articleDictionary[slug];

  if (!article) {
    return notFound();
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-4">
          <Link
            href="/blog"
            className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline"
          >
            &larr; Back to Blog
          </Link>
          <span className="text-xs text-primary font-black uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-900/5 w-fit block">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-poppins font-black text-dark tracking-tight leading-snug">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center space-x-1.5">
              <User className="h-4 w-4" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Reading Column */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="relative rounded-3xl overflow-hidden shadow-md aspect-video w-full bg-slate-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <article className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            {/* Quick trust signal inside content */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
              <div className="p-2.5 bg-teal-50 text-primary rounded-xl flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <span className="block font-bold text-dark text-sm">Medical Review Disclaimer</span>
                <p>
                  All content on this blog is reviewed and approved by Dr. Sarah Alexander, DDS, for medical accuracy. This content is for educational purposes only and does not constitute individual medical advice. Always consult your dentist for diagnostic guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-teal-50/50 border border-teal-900/5 p-8 rounded-3xl space-y-4 text-left">
              <Heart className="h-8 w-8 text-secondary" />
              <h3 className="text-lg font-bold font-poppins text-dark">Schedule a Dental Consultation</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Have questions about whitening, Invisalign, or dental implants? Request a consultation with Dr. Alexander today.
              </p>
              <a
                href="tel:+18005550199"
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white py-3 rounded-full font-bold text-xs shadow-md transition-all gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call (800) 555-0199</span>
              </a>
            </div>

            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
