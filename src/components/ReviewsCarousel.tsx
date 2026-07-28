"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  treatment: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    rating: 5,
    date: "1 week ago",
    treatment: "Cosmetic Veneers",
    text: "Dr. Alexander and the team completely changed my smile! I was always self-conscious about my front teeth, but the veneers look so incredibly natural. The office is beautiful and the process was virtually pain-free.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Michael Thompson",
    rating: 5,
    date: "3 weeks ago",
    treatment: "Dental Implants",
    text: "Absolutely top-notch dental clinic. I needed two implants, and I was nervous. Dr. Alexander explained everything with 3D models and guided me through. Smooth surgery, no pain, and now I can chew perfectly again.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    date: "1 month ago",
    treatment: "Invisalign® Treatment",
    text: "Very professional and friendly staff. I chose Apex for my Invisalign treatment, and the experience has been seamless. The digital scanner they use is amazing - no messy goop molds! Highly recommend.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "David Chen",
    rating: 5,
    date: "2 months ago",
    treatment: "Emergency Root Canal",
    text: "I called at 7:30 AM with a throbbing toothache, and they got me in by 9:00 AM. Dr. Alexander performed a root canal on the spot. The pain was gone instantly. Truly professional and caring in an emergency.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop",
  },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Google Ratings and Summary */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-teal-50/50 p-6 rounded-3xl border border-teal-900/5 space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-extrabold text-dark font-poppins">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-500 mt-0.5">Google Rating</span>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed">
            Based on <span className="font-bold text-dark">500+ Patient Reviews</span>. Our commitment to gentle, premium dental care is highly rated.
          </div>
          <div className="flex items-center space-x-2 text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl w-fit">
            <CheckCircle2 className="h-4 w-4 text-secondary" />
            <span>100% Verified Google Reviews</span>
          </div>
        </div>

        {/* Video Testimonial Thumbnail */}
        <div
          className="relative group rounded-3xl overflow-hidden shadow-lg aspect-video w-full bg-slate-900 border border-slate-200 cursor-pointer"
          onClick={() => setIsVideoPlaying(true)}
        >
          {isVideoPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Patient Video Review"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <>
              {/* Fake Patient Video Review Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=600&h=350&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex flex-col justify-end p-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <Play className="h-4.5 w-4.5 fill-white" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white font-bold text-sm">Hear Sarah's Story</span>
                    <span className="block text-slate-300 text-xs">Veneers Patient Review • 1:45 min</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Reviews Slideshow */}
      <div className="lg:col-span-8 relative">
        <div className="min-h-[280px] bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-3xl flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Star Rating & Treatment */}
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="flex text-amber-500">
                  {[...Array(reviews[index].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold bg-teal-50 text-primary px-3 py-1 rounded-full">
                  {reviews[index].treatment}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 font-medium text-base sm:text-lg italic leading-relaxed">
                "{reviews[index].text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center space-x-4">
                <img
                  src={reviews[index].avatar}
                  alt={reviews[index].name}
                  className="h-12 w-12 rounded-full object-cover border border-teal-500/10 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-dark font-poppins text-sm">
                    {reviews[index].name}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium">
                    Verified Patient • {reviews[index].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-end space-x-3 mt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-primary hover:border-primary active:scale-95 transition-all"
              aria-label="Previous Review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-primary hover:border-primary active:scale-95 transition-all"
              aria-label="Next Review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
