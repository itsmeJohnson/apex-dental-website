"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const appointmentSchema = z.object({
  name: z.string().min(2, "Full name is required (minimum 2 characters)"),
  phone: z.string().min(10, "Valid phone number is required (minimum 10 digits)"),
  email: z.string().email("Please enter a valid email address"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time window"),
  reason: z.string().min(1, "Please select a treatment or consult option"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const reasons = [
  { value: "cleaning", label: "Dental Cleaning & Exam" },
  { value: "cosmetic", label: "Cosmetic Dentistry Consult" },
  { value: "invisalign", label: "Invisalign® Consultation" },
  { value: "implants", label: "Dental Implants Consult" },
  { value: "whitening", label: "Professional Teeth Whitening" },
  { value: "pediatric", label: "Pediatric (Kids) Dentistry" },
  { value: "emergency", label: "Same-Day Emergency Visit" },
  { value: "general", label: "General Checkup / Other" },
];

const times = [
  { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (12:00 PM - 5:00 PM)" },
  { value: "saturday", label: "Saturday Hours (9:00 AM - 2:00 PM)" },
];

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      reason: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
    reset();
  };

  // Get tomorrow's date for date-picker min-date restriction
  const getMinDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 sm:p-12 rounded-3xl border border-teal-900/10 shadow-xl shadow-teal-900/5 text-center space-y-6"
      >
        <div className="mx-auto w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-secondary">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-poppins font-bold text-dark">Appointment Requested!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you. A treatment coordinator will contact you by phone and email within 1 hour to finalize your time slot.
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl text-xs text-slate-500 max-w-sm mx-auto space-y-1">
          <p className="font-semibold text-slate-700">Need Immediate Assistance?</p>
          <p>For immediate scheduling or emergency queries, please call us directly.</p>
          <a href="tel:+18005550199" className="inline-block text-primary font-bold hover:underline mt-1">
            (800) 555-0199
          </a>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-primary font-semibold text-sm hover:text-primary-hover hover:underline transition"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-10 rounded-3xl border border-teal-900/10 shadow-xl shadow-teal-900/5">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs text-secondary font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full mb-3">
          <Sparkles className="h-3 w-3" />
          Quick 24/7 Scheduling
        </span>
        <h3 className="text-2xl font-poppins font-bold text-dark">Request an Appointment</h3>
        <p className="text-slate-500 text-sm mt-1">
          Select your preferred time. We will call you within an hour to confirm.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
            <input
              id="name"
              type="text"
              placeholder="Dr. Alexander Flemming"
              {...register("name")}
              className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                errors.name
                  ? "border-rose-400 focus:ring-rose-200"
                  : "border-slate-200 focus:border-primary focus:ring-teal-100"
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-rose-500 font-medium mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
              <input
                id="phone"
                type="tel"
                placeholder="(415) 555-2671"
                {...register("phone")}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                  errors.phone
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:ring-teal-100"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-500 font-medium mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
              <input
                id="email"
                type="email"
                placeholder="alexander@example.com"
                {...register("email")}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                  errors.email
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:ring-teal-100"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-rose-500 font-medium mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Reason for Appointment */}
        <div>
          <label htmlFor="reason" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Reason for Visit
          </label>
          <select
            id="reason"
            {...register("reason")}
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
              errors.reason
                ? "border-rose-400 focus:ring-rose-200"
                : "border-slate-200 focus:border-primary focus:ring-teal-100"
            }`}
          >
            <option value="">Select treatment type...</option>
            {reasons.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
          {errors.reason && (
            <p className="text-xs text-rose-500 font-medium mt-1">{errors.reason.message}</p>
          )}
        </div>

        {/* Date & Time preferred */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
              <input
                id="preferredDate"
                type="date"
                min={getMinDate()}
                {...register("preferredDate")}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                  errors.preferredDate
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:ring-teal-100"
                }`}
              />
            </div>
            {errors.preferredDate && (
              <p className="text-xs text-rose-500 font-medium mt-1">{errors.preferredDate.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Preferred Time Window
            </label>
            <div className="relative">
              <Clock className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
              <select
                id="preferredTime"
                {...register("preferredTime")}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all ${
                  errors.preferredTime
                    ? "border-rose-400 focus:ring-rose-200"
                    : "border-slate-200 focus:border-primary focus:ring-teal-100"
                }`}
              >
                <option value="">Select time...</option>
                {times.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.preferredTime && (
              <p className="text-xs text-rose-500 font-medium mt-1">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting request...</span>
            </>
          ) : (
            <span>Submit Appointment Request</span>
          )}
        </button>

        <p className="text-center text-[10px] text-slate-400 leading-normal">
          By submitting, you agree to receive automated messages or phone calls from our staff to finalize details. HIPAA secure.
        </p>
      </form>
    </div>
  );
}
