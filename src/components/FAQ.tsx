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
    <section className="py-32 px-6 bg-surface-dim">
      <div className="max-w-3xl mx-auto">
        <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-4">
          Common Questions
        </div>
        <h2 className="font-headline font-black text-5xl md:text-6xl tracking-tighter uppercase mb-16">
          FAQ
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/5 bg-surface-container-low"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left group"
              >
                <span className="font-headline font-bold text-lg uppercase tracking-tight text-white group-hover:text-primary transition-colors pr-4">
                  {faq.q}
                </span>
                <span className="font-data text-[#E11900] text-xl shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-neutral-400 font-light leading-relaxed text-sm">
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
