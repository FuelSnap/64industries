"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does this cost me?",
    a: "$0 upfront. We operate on a revenue share model — we only make money when your product makes money. If we launch and it makes $0, you owe us nothing. We have skin in the game.",
  },
  {
    q: "What kind of product will you build for me?",
    a: "It depends on your audience and expertise. Could be a digital course, a coaching program, a paid community, or a simple digital product. During the free audit, we'll recommend the best fit based on your content and audience behavior.",
  },
  {
    q: "How much of my time does this take?",
    a: "Minimal. Our team handles the heavy lifting — tech, copy, strategy, launch planning. Your main job is to keep creating the content you already make and post the launch sequences we write for you. Most creators spend 3-5 hours total.",
  },
  {
    q: "What if my audience is too small?",
    a: "If you have at least 10,000 engaged followers, there's money to be made. A creator with 30K followers selling a $95 product to just 2.5% of their audience generates over $70,000. Size matters less than engagement.",
  },
  {
    q: "What's the revenue split?",
    a: "We typically start with 80/20 or 70/30 in your favor. As the partnership grows and we add more services, it can move toward 50/50. You always get the bigger share to start.",
  },
  {
    q: "Do I need to be in a specific niche?",
    a: "You need to have teachable expertise — something your audience wants to learn or get help with. Fitness, finance, productivity, parenting, mindset, cooking, business — if people follow you to learn something, we can build a product around it.",
  },
  {
    q: "What if the launch doesn't go well?",
    a: "You risk nothing. We absorb all the time and effort. That said, we only take on creators we believe in — our audit process validates demand before we build anything.",
  },
  {
    q: "How is this different from a talent agency?",
    a: "Talent agencies take 15-20% for connecting you to brand deals. We build entire revenue streams around your expertise. We don't just find deals — we create products, run launches, and generate income that didn't exist before.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 px-8 bg-surface-light">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-12">
          <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
            FAQ
          </div>
          <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
            Common Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-card border border-surface-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="font-display font-600 text-[15px] text-zinc-900 group-hover:text-brand-red transition-colors pr-4">
                  {faq.q}
                </span>
                <span className="text-brand-red text-xl shrink-0 font-light">
                  {open === i ? "\u2212" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-500 text-[15px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
