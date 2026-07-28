"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Calendar, User, Search, Sparkles } from "lucide-react";

interface BlogPost {
  title: string;
  slug: string;
  category: "dental-tips" | "kids-dentistry" | "cosmetic-dentistry" | "oral-health" | "emergency";
  author: string;
  date: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "5 Dental Tips for Maintaining Brighter White Teeth After Whitening",
    slug: "teeth-whitening-tips",
    category: "dental-tips",
    author: "Dr. Sarah Alexander",
    date: "July 24, 2026",
    excerpt: "Professional whitening can last years, but your drinking habits dictate the speed of staining. Read the top 5 habits to avoid and items to use to stay white.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&h=250&fit=crop",
  },
  {
    title: "What to Do in a Dental Emergency: Knocks, Fractures, and Pain",
    slug: "dental-emergency-guide",
    category: "emergency",
    author: "Dr. Sarah Alexander",
    date: "June 18, 2026",
    excerpt: "Knocked out a front tooth? Agonizing jaw swelling? Learn the exact steps to preserve a loose tooth and check when to head straight to the emergency clinic.",
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?q=80&w=400&h=250&fit=crop",
  },
  {
    title: "How clear aligners correct bite occlusion: Invisalign 3D planning",
    slug: "how-invisalign-works",
    category: "cosmetic-dentistry",
    author: "Dr. Sarah Alexander",
    date: "May 12, 2026",
    excerpt: "Straightening teeth isn't just about appearance. Poor alignment causes wearing. Learn how the iTero 3D scanner tracks progress over time.",
    image: "https://images.unsplash.com/photo-1513412805490-2868bfd6eb6d?q=80&w=400&h=250&fit=crop",
  },
  {
    title: "A Parent's Guide to Cavity-Prevention Sealants for Kids",
    slug: "kids-sealants-guide",
    category: "kids-dentistry",
    author: "Dr. Sarah Alexander",
    date: "April 02, 2026",
    excerpt: "Plaque easily builds up in deep molar ridges. Dental sealants coat these areas without pain, blocking cavities by up to 80%. Let's review child dental care.",
    image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&w=400&h=250&fit=crop",
  },
  {
    title: "Dental Implants vs Bridges: Which option is right for you?",
    slug: "implants-vs-bridges",
    category: "oral-health",
    author: "Dr. Sarah Alexander",
    date: "March 15, 2026",
    excerpt: "Choosing between bridge crowns and implant titanium posts? We breakdown the bone-retention benefits, structural costs, and durability options.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&h=250&fit=crop",
  }
];

const categories = [
  { value: "all", label: "All Articles" },
  { value: "dental-tips", label: "Dental Tips" },
  { value: "kids-dentistry", label: "Kids Dentistry" },
  { value: "cosmetic-dentistry", label: "Cosmetic Dentistry" },
  { value: "oral-health", label: "Oral Health" },
  { value: "emergency", label: "Emergency Guide" },
];

export default function BlogArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs text-secondary font-bold uppercase tracking-widest">Oral Health Resource</span>
          <h1 className="text-4xl sm:text-5xl font-poppins font-black text-dark tracking-tight">
            Apex Dental Education Blog
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stay informed with clinical tips, cosmetic guidelines, emergency protocols, and treatment answers from Dr. Sarah Alexander.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2.5 rounded-full font-bold text-xs transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 space-y-4 text-left">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full uppercase border border-teal-900/5">
                      <Sparkles className="h-3 w-3" />
                      {post.category.replace("-", " ")}
                    </span>
                    <h3 className="text-lg font-poppins font-bold text-dark leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center space-x-2">
                    <User className="h-3.5 w-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 font-medium">No articles matched your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
