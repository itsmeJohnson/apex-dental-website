import { ShieldCheck, Clock, Sparkles } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

export default function BookPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Booking Page Header */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-secondary font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-900/5">
            <Sparkles className="h-3 w-3" />
            Guaranteed Response
          </span>
          <h1 className="text-3xl sm:text-5xl font-poppins font-black text-dark tracking-tight leading-tight">
            Book Your Appointment
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Fill out the form below. A clinical coordinator will contact you by phone or email within 1 business hour to finalize your time.
          </p>
        </div>

        {/* Center Booking Form */}
        <div className="max-w-2xl mx-auto">
          <AppointmentForm />
        </div>

        {/* Bottom Trust Factors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-center sm:text-left pt-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 bg-white rounded-xl text-primary shadow-sm border border-slate-200/50 flex-shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-xs text-slate-500 space-y-0.5">
              <span className="block font-bold text-dark">HIPAA Secure</span>
              <p>Your clinical data is fully encrypted and stored securely.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 bg-white rounded-xl text-primary shadow-sm border border-slate-200/50 flex-shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div className="text-xs text-slate-500 space-y-0.5">
              <span className="block font-bold text-dark">Quick Response</span>
              <p>Confirmed via call/SMS in under 60 minutes.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="p-2 bg-white rounded-xl text-primary shadow-sm border border-slate-200/50 flex-shrink-0">
              <Clock className="h-5 w-5 text-rose-500" />
            </div>
            <div className="text-xs text-slate-500 space-y-0.5">
              <span className="block font-bold text-dark">Emergency Care</span>
              <p>Need care now? Call directly for same-day priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
