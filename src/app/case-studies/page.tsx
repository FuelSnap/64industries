"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, GradientOrb } from "@/components/Motion";

const caseStudies = [
  {
    slug: "coming-soon",
    creator: "Case Study Coming Soon",
    niche: "Creator Monetization",
    result: "$XX,XXX",
    metric: "Launch Revenue",
    summary:
      "We're currently building case studies with our first cohort of creator partners. Real numbers, real results — no fluff.",
    tags: ["Product Launch", "Revenue Share"],
    placeholder: true,
  },
];

export default function CaseStudies() {
  return (
    <>
      <header className="pt-32 pb-16 px-8 bg-brand-dark relative overflow-hidden">
        <GradientOrb color="rgba(225, 25, 0, 0.05)" size="600px" position="top-right" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <FadeIn>
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-4">
              Case Studies
            </div>
            <h1 className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-white">
              Real Numbers. Real Creators.
            </h1>
            <p className="text-zinc-400 text-[16px] max-w-lg mx-auto mt-4 leading-relaxed">
              Detailed breakdowns of how we help creators turn audiences into revenue — with full transparency on the numbers.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <HoverScale scale={1.01}>
                  <div className="bg-white rounded-card border border-surface-border p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-brand-red uppercase tracking-widest bg-brand-red/5 px-3 py-1 rounded-btn"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-[1fr_200px] gap-6 items-start">
                      <div>
                        <h2 className="font-display font-700 text-xl md:text-2xl tracking-tight text-zinc-900 mb-2">
                          {study.creator}
                        </h2>
                        <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-4">
                          {study.niche}
                        </div>
                        <p className="text-zinc-500 text-[15px] leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="bg-surface-light rounded-card border border-surface-border p-5 text-center">
                        <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">
                          {study.metric}
                        </div>
                        <div className="font-display font-800 text-3xl text-brand-red">
                          {study.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div className="mt-16 bg-surface-light rounded-card border border-surface-border p-8 lg:p-10 text-center">
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-3">
                Be The First
              </div>
              <h3 className="font-display font-700 text-xl text-zinc-900 mb-3">
                Want to be our next case study?
              </h3>
              <p className="text-zinc-500 text-[14px] mb-6 max-w-md mx-auto leading-relaxed">
                We&apos;re selecting creators for our next cohort. Get a free audit and
                see if your audience is ready for a product launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/audit"
                  className="bg-brand-red text-white font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
                >
                  Get Your Free Audit
                </Link>
                <a
                  href="https://calendly.com/64industries/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-surface-border text-zinc-600 font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:border-brand-red/30 hover:text-brand-red transition-all duration-300"
                >
                  Book a 15-Min Call
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
