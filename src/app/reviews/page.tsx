import Link from "next/link";
import { Star, CheckCircle2, Phone, Calendar, Sparkles } from "lucide-react";
import ReviewsCarousel from "@/components/ReviewsCarousel";

interface PatientReview {
  id: number;
  author: string;
  rating: number;
  treatment: string;
  date: string;
  text: string;
}

const detailedReviews: PatientReview[] = [
  {
    id: 1,
    author: "Sarah Jenkins",
    rating: 5,
    treatment: "Cosmetic Veneers",
    date: "1 week ago",
    text: "Dr. Alexander and the team completely changed my smile! I was always self-conscious about my front teeth, but the veneers look so incredibly natural. The office is beautiful and the process was virtually pain-free."
  },
  {
    id: 2,
    author: "Michael Thompson",
    rating: 5,
    treatment: "Dental Implants",
    date: "3 weeks ago",
    text: "Absolutely top-notch dental clinic. I needed two implants, and I was nervous. Dr. Alexander explained everything with 3D models and guided me through. Smooth surgery, no pain, and now I can chew perfectly again."
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    rating: 5,
    treatment: "Invisalign® Treatment",
    date: "1 month ago",
    text: "Very professional and friendly staff. I chose Apex for my Invisalign treatment, and the experience has been seamless. The digital scanner they use is amazing - no messy goop molds! Highly recommend."
  },
  {
    id: 4,
    author: "David Chen",
    rating: 5,
    treatment: "Emergency Root Canal",
    date: "2 months ago",
    text: "I called at 7:30 AM with a throbbing toothache, and they got me in by 9:00 AM. Dr. Alexander performed a root canal on the spot. The pain was gone instantly. Truly professional and caring in an emergency."
  },
  {
    id: 5,
    author: "Amanda G.",
    rating: 5,
    treatment: "Pediatric Cleaning & Sealants",
    date: "2 months ago",
    text: "Took my 6-year-old son here for his checkup. He has dentist anxiety, but Dr. Alexander and her assistants were so gentle and patient. He left with a smile and a toy. We will be back!"
  },
  {
    id: 6,
    author: "George H.",
    rating: 5,
    treatment: "Teeth Whitening",
    date: "3 months ago",
    text: "Did the in-office LED whitening. The staff took their time protecting my gums and explaining the process. My teeth are significantly whiter and I had zero sensitivity. Great experience."
  }
];

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Testimonials</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            Patient Reviews &amp; Stories
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Read stories from actual patients. We are dedicated to providing general, cosmetic, and implant care that meets the highest standards.
          </p>
        </div>
      </section>

      {/* Featured Video / Carousel Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm mb-16 text-left">
          <div className="mb-8">
            <span className="text-xs text-secondary font-bold uppercase tracking-widest block mb-2">Featured Review</span>
            <h2 className="text-2xl font-poppins font-bold text-dark">Verified Patient Testimonials</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200/60 pb-8 text-left">
            <div>
              <h2 className="text-2xl font-poppins font-bold text-dark">All Google Reviews</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Verified patient feedback directly from our Google business listing.</p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-teal-800 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
              <CheckCircle2 className="h-4.5 w-4.5 text-secondary" />
              <span>Google Verified Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full uppercase">
                      {review.treatment}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-50 flex justify-between items-center text-xs">
                  <span className="font-bold text-dark">{review.author}</span>
                  <span className="text-slate-400 font-medium">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Conversion Block */}
      <section className="bg-primary py-16 sm:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/20 to-teal-800/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-poppins font-black text-white tracking-tight">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-teal-100 text-sm max-w-xl mx-auto leading-relaxed">
            Join the 500+ happy patients who have experienced our gentle and state-of-the-art dental care. We welcome new patient exams.
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
              <span>Call: (800) 555-0199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
