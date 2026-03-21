"use client";

import { useState } from "react";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-data text-[#00C853] text-sm uppercase tracking-widest mb-6">
            Received
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6">
            WE&apos;LL BE IN TOUCH WITHIN 48 HOURS
          </h2>
          <p className="text-neutral-400 font-light">
            Our team is reviewing your profile and building your personalized
            monetization audit. Check your DMs.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
            Free Audit
          </div>
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase mb-4">
            GET YOUR FREE
            <br />
            MONETIZATION AUDIT
          </h2>
          <p className="text-neutral-500 font-light text-sm max-w-lg mx-auto">
            We&apos;ll analyze your content, audience, and engagement to show
            you exactly how much revenue you&apos;re leaving on the table.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Full name"
                className="w-full bg-surface-container-lowest border border-white/5 px-4 py-3 text-white text-sm font-light placeholder:text-neutral-600 focus:outline-none focus:border-[#E11900] transition-colors"
              />
            </div>
            <div>
              <label className="block font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                Instagram Handle
              </label>
              <input
                type="text"
                required
                placeholder="@yourhandle"
                className="w-full bg-surface-container-lowest border border-white/5 px-4 py-3 text-white text-sm font-light placeholder:text-neutral-600 focus:outline-none focus:border-[#E11900] transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                Follower Count
              </label>
              <select
                required
                className="w-full bg-surface-container-lowest border border-white/5 px-4 py-3 text-white text-sm font-light focus:outline-none focus:border-[#E11900] transition-colors appearance-none"
              >
                <option value="">Select range</option>
                <option value="5k-10k">5K - 10K</option>
                <option value="10k-25k">10K - 25K</option>
                <option value="25k-50k">25K - 50K</option>
                <option value="50k-100k">50K - 100K</option>
                <option value="100k+">100K+</option>
              </select>
            </div>
            <div>
              <label className="block font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                Your Niche
              </label>
              <select
                required
                className="w-full bg-surface-container-lowest border border-white/5 px-4 py-3 text-white text-sm font-light focus:outline-none focus:border-[#E11900] transition-colors appearance-none"
              >
                <option value="">Select niche</option>
                <option value="fitness">Fitness & Health</option>
                <option value="finance">Personal Finance</option>
                <option value="business">Business & Entrepreneurship</option>
                <option value="self-improvement">Self-Improvement</option>
                <option value="parenting">Parenting & Family</option>
                <option value="relationships">Relationships</option>
                <option value="mental-health">Mental Health & Mindset</option>
                <option value="beauty">Beauty & Skincare</option>
                <option value="food">Food & Cooking</option>
                <option value="automotive">Automotive & Moto</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-data text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
              Biggest monetization challenge (optional)
            </label>
            <textarea
              rows={3}
              placeholder="What's holding you back from making more money from your audience?"
              className="w-full bg-surface-container-lowest border border-white/5 px-4 py-3 text-white text-sm font-light placeholder:text-neutral-600 focus:outline-none focus:border-[#E11900] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E11900] text-white font-headline font-black text-xl tracking-tighter py-4 uppercase hover:bg-white hover:text-black transition-all duration-200"
          >
            GET MY FREE AUDIT
          </button>

          <div className="text-center font-data text-[10px] text-neutral-600 uppercase tracking-widest">
            100% Free &mdash; No Credit Card &mdash; No Obligations &mdash;
            Results in 48 Hours
          </div>
        </form>
      </div>
    </section>
  );
}
