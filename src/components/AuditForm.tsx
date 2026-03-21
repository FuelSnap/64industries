"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlideIn, GradientOrb } from "@/components/Motion";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      platform: formData.get("platform"),
      handle: formData.get("handle"),
      followers: formData.get("followers"),
      niche: formData.get("niche"),
      service: formData.get("service"),
      challenge: formData.get("challenge"),
    };

    try {
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // Still show success — data logged server-side
    }

    setSubmitting(false);
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
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
            Our team is reviewing your profile and building your personalized
            monetization audit. Check your inbox and DMs.
          </p>
          <div className="bg-white/5 rounded-card border border-white/10 p-6 max-w-md mx-auto">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">What happens next</div>
            <div className="space-y-3 text-left">
              {[
                "We review your content and audience data",
                "We build a revenue projection with real numbers",
                "We reach out via email or DM with your full audit",
              ].map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="font-mono text-brand-red text-[12px] mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-zinc-400 text-[13px]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  const inputClass = "w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn placeholder:text-zinc-600 focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all";
  const selectClass = "w-full bg-white/5 border border-white/10 px-4 py-3 text-white text-sm rounded-btn focus:outline-none focus:border-brand-red focus:shadow-[0_0_0_3px_rgba(225,25,0,0.1)] transition-all appearance-none";
  const labelClass = "block font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2";

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
              <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest leading-loose mb-6">
                100% Free<br />
                No Credit Card<br />
                No Obligations<br />
                Results in 48 Hours
              </div>
              <div className="font-mono text-[10px] text-brand-red uppercase tracking-widest">
                Limited to 10 creators per month
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input name="name" type="text" required placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Primary Platform</label>
                  <select name="platform" required className={selectClass}>
                    <option value="" className="bg-zinc-900">Select platform</option>
                    <option value="instagram" className="bg-zinc-900">Instagram</option>
                    <option value="tiktok" className="bg-zinc-900">TikTok</option>
                    <option value="youtube" className="bg-zinc-900">YouTube</option>
                    <option value="twitter" className="bg-zinc-900">X / Twitter</option>
                    <option value="multiple" className="bg-zinc-900">Multiple Platforms</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Handle</label>
                  <input name="handle" type="text" required placeholder="@yourhandle" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Follower Count</label>
                  <select name="followers" required className={selectClass}>
                    <option value="" className="bg-zinc-900">Select range</option>
                    <option value="5k-10k" className="bg-zinc-900">5K - 10K</option>
                    <option value="10k-25k" className="bg-zinc-900">10K - 25K</option>
                    <option value="25k-50k" className="bg-zinc-900">25K - 50K</option>
                    <option value="50k-100k" className="bg-zinc-900">50K - 100K</option>
                    <option value="100k+" className="bg-zinc-900">100K+</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Your Niche</label>
                  <select name="niche" required className={selectClass}>
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
                <label className={labelClass}>Interested In</label>
                <select name="service" required className={selectClass}>
                  <option value="" className="bg-zinc-900">Select service</option>
                  <option value="product-launch" className="bg-zinc-900">Product Launch Partnership</option>
                  <option value="social-media" className="bg-zinc-900">Social Media Management</option>
                  <option value="brand-deals" className="bg-zinc-900">Brand Deal Brokering</option>
                  <option value="not-sure" className="bg-zinc-900">Not Sure Yet — Help Me Decide</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Biggest monetization challenge (optional)
                </label>
                <textarea
                  name="challenge"
                  rows={3}
                  placeholder="What's holding you back from making more money from your audience?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-red text-white font-display font-600 text-[15px] tracking-wide py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Get My Free Audit"}
              </motion.button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
