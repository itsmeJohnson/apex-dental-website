"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, Phone } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface GalleryCase {
  id: number;
  title: string;
  category: "veneers" | "implants" | "whitening" | "makeover";
  problem: string;
  solution: string;
  beforeImg: string;
  afterImg: string;
}

const galleryCases: GalleryCase[] = [
  {
    id: 1,
    title: "10-Unit Upper Arch Veneers",
    category: "veneers",
    problem: "Severe discoloration, enamel wearing, and moderate spacing gaps in the smile zone.",
    solution: "10 customized translucent porcelain veneers placed on the upper teeth, restoring symmetry and shade.",
    beforeImg: "/images/veneers_before.png",
    afterImg: "/images/veneers_after.png",
  },
  {
    id: 2,
    title: "Single Front Tooth Implant Replacement",
    category: "implants",
    problem: "Missing front incisor from a sporting accident, leading to difficulties speaking and chewing.",
    solution: "Surgical titanium post placement followed by a customized Zirconia crown matching natural shade.",
    beforeImg: "/images/implant_before.png",
    afterImg: "/images/implant_after.png",
  },
  {
    id: 3,
    title: "Professional Cool-LED Whitening",
    category: "whitening",
    problem: "Severe yellowing and dark surface staining from coffee, red wine, and aging.",
    solution: "A single 60-minute in-office LED activation session brightened the enamel by 8 full shades.",
    beforeImg: "/images/whitening_before.png",
    afterImg: "/images/whitening_after.png",
  },
  {
    id: 4,
    title: "Full Mouth Aesthetic Reconstructive Makeover",
    category: "makeover",
    problem: "Heavily worn, chipped, and crowded teeth compounded by old metallic silver fillings.",
    solution: "Full-mouth coordination using metal-free porcelain crowns and minor clear alignment.",
    beforeImg: "/images/crooked_before.png",
    afterImg: "/images/crooked_after.png",
  },
];

export default function BeforeAfterPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCases =
    activeFilter === "all"
      ? galleryCases
      : galleryCases.filter((c) => c.category === activeFilter);

  const filters = [
    { value: "all", label: "All Cases" },
    { value: "veneers", label: "Porcelain Veneers" },
    { value: "implants", label: "Dental Implants" },
    { value: "whitening", label: "Teeth Whitening" },
    { value: "makeover", label: "Smile Makeovers" },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Clinical Results</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            Smile Before &amp; After Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Review actual patient cases treated by Dr. Sarah Alexander. Use the interactive slider on each card to compare results.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-16 pb-8 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-dark border border-slate-200/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Cases List */}
      <section className="pb-24 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {filteredCases.length > 0 ? (
          filteredCases.map((c, idx) => (
            <div
              key={c.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Info Column */}
              <div
                className={`lg:col-span-5 space-y-5 text-left ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="inline-flex items-center gap-1 text-xs font-bold text-secondary uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-900/5">
                  <Sparkles className="h-3.5 w-3.5" />
                  {c.category === "veneers"
                    ? "Cosmetic Veneers"
                    : c.category === "implants"
                    ? "Dental Implants"
                    : c.category === "whitening"
                    ? "Teeth Whitening"
                    : "Smile Makeover"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-poppins font-black text-dark tracking-tight">
                  {c.title}
                </h2>
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <span className="block font-bold text-dark text-xs uppercase tracking-wider mb-1">
                      Clinical Problem:
                    </span>
                    <p className="leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <span className="block font-bold text-dark text-xs uppercase tracking-wider mb-1">
                      Dentist Solution:
                    </span>
                    <p className="leading-relaxed">{c.solution}</p>
                  </div>
                </div>
              </div>

              {/* Slider Column */}
              <div
                className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <BeforeAfterSlider
                  beforeImage={c.beforeImg}
                  afterImage={c.afterImg}
                  beforeLabel="Before Treatment"
                  afterLabel="Completed Smile"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 font-medium">No case studies found for this filter.</p>
          </div>
        )}
      </section>

      {/* CTA Bottom */}
      <section className="bg-slate-50 py-16 text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-poppins font-bold text-dark">Get Your Smile Transformation Plan</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Interested in veneers, implants, or aligners? Schedule a consultation with Dr. Alexander for a custom cosmetic mockup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="h-4.5 w-4.5" />
              <span>Book consultation</span>
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
