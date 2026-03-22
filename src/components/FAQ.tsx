"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

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
    a: "You keep 70-80% of every dollar generated. We take the smaller share. As the partnership grows and we add more services, the split may adjust — but you always get the bigger share to start.",
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
    <section className="py-24 lg:py-32 px-8 bg-white">
      <div className="max-w-[800px] mx-auto">
        <FadeIn>
          <div className="mb-12">
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
              FAQ
            </div>
            <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
              Common Questions
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-0" staggerDelay={0.06}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={i}>
                <div className={`overflow-hidden transition-colors duration-200 ${
                  isOpen ? "bg-surface-light" : "bg-white hover:bg-surface-light/50"
                }`} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                  >
                    <span className={`font-mono text-[12px] shrink-0 transition-colors duration-200 ${
                      isOpen ? "text-accent-emerald" : "text-[#C4C8CC]"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display font-600 text-[15px] flex-1 transition-colors pr-4 ${
                      isOpen ? "text-brand-black" : "text-brand-black"
                    }`}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-xl shrink-0 font-light transition-colors duration-200 ${
                        isOpen ? "text-accent-emerald" : "text-[#C4C8CC]"
                      }`}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-[52px]">
                          <p className="text-[#44474A] text-[15px] leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
