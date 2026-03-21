"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlideIn, GradientOrb } from "@/components/Motion";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 lg:py-32 px-8 bg-brand-dark relative overflow-hidden">
        <GradientOrb color="rgba(0, 200, 83, 0.06)" size="500px" position="center" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center relative z-10"
        >
          <div className="font-mono text-[#00C853] text-[12px] uppercase tracking-widest mb-6">
            Received
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-6 text-white">
            We&apos;ll be in touch within 48 hours
          </h2>
          <p className="text-zinc-400 text-[15px] leading-relaxed">
            Our team is reviewing your profile and building your personalized
            monetization audit. Check your DMs.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 px-8 bg-brand-dark relative overflow-hidden">
      <GradientOrb color="rgba(225, 25, 0, 0.04)" size="600px" position="top-left" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <SlideIn direction="left">
            <div>
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Free Audit
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight mb-4 text-white leading-tight">
                Get Your Free Creator Audit
              </h2>
              <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                We&apos;ll analyze your content, audience, and engagement to show
                you exactly how much revenue you&apos;re leaving on the table.
              </p>
              <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest leading-loose">
                100% Free<br />
                No Credit Card<br />
                No Obligations<br />
                Results in 48 Hours
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn placeholder:text-zinc-600 focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@yourhandle"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn placeholder:text-zinc-600 focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    Follower Count
                  </label>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all appearance-none"
                  >
                    <option value="" className="bg-zinc-900">Select range</option>
                    <option value="5k-10k" className="bg-zinc-900">5K - 10K</option>
                    <option value="10k-25k" className="bg-zinc-900">10K - 25K</option>
                    <option value="25k-50k" className="bg-zinc-900">25K - 50K</option>
                    <option value="50k-100k" className="bg-zinc-900">50K - 100K</option>
                    <option value="100k+" className="bg-zinc-900">100K+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                    Your Niche
                  </label>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all appearance-none"
                  >
                    <option value="" className="bg-zinc-900">Select niche</option>
                    <option value="fitness" className="bg-zinc-900">Fitness & Health</option>
                    <option value="finance" className="bg-zinc-900">Personal Finance</option>
                    <option value="business" className="bg-zinc-900">Business & Entrepreneurship</option>
                    <option value="self-improvement" className="bg-zinc-900">Self-Improvement</option>
                    <option value="parenting" className="bg-zinc-900">Parenting & Family</option>
                    <option value="relationships" className="bg-zinc-900">Relationships</option>
                    <option value="mental-health" className="bg-zinc-900">Mental Health & Mindset</option>
                    <option value="beauty" className="bg-zinc-900">Beauty & Skincare</option>
                    <option value="food" className="bg-zinc-900">Food & Cooking</option>
                    <option value="automotive" className="bg-zinc-900">Automotive & Moto</option>
                    <option value="other" className="bg-zinc-900">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                  Biggest monetization challenge (optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="What's holding you back from making more money from your audience?"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn placeholder:text-zinc-600 focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-red text-white font-display font-600 text-[15px] tracking-wide py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
              >
                Get My Free Audit
              </motion.button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
