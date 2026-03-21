"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/Motion";

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
      <header className="pt-32 pb-16 px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-4">
              Case Studies
            </div>
            <h1 className="font-display font-800 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-brand-black">
              Real Numbers. Real Creators.
            </h1>
            <p className="text-[#44474A] text-[16px] max-w-lg mx-auto mt-4 leading-relaxed">
              Detailed breakdowns of how we help creators turn audiences into revenue — with full transparency on the numbers.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-24 px-8 bg-surface-light">
        <div className="max-w-[900px] mx-auto">
          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <HoverScale scale={1.01}>
                  <div className="bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-brand-black uppercase tracking-widest bg-surface-muted px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-[1fr_200px] gap-6 items-start">
                      <div>
                        <h2 className="font-display font-700 text-xl md:text-2xl tracking-[-0.02em] text-brand-black mb-2">
                          {study.creator}
                        </h2>
                        <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-4">
                          {study.niche}
                        </div>
                        <p className="text-[#44474A] text-[15px] leading-relaxed">
                          {study.summary}
                        </p>
                      </div>

                      <div className="bg-surface-light p-5 text-center">
                        <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-1">
                          {study.metric}
                        </div>
                        <div className="font-display font-800 text-3xl text-accent-emerald">
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
            <div className="mt-16 bg-white p-8 lg:p-10 text-center">
              <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest mb-3">
                Be The First
              </div>
              <h3 className="font-display font-700 text-xl text-brand-black mb-3">
                Want to be our next case study?
              </h3>
              <p className="text-[#44474A] text-[14px] mb-6 max-w-md mx-auto leading-relaxed">
                We&apos;re selecting creators for our next cohort. Get a free audit and
                see if your audience is ready for a product launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/audit"
                  className="bg-brand-black text-white font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:bg-brand-charcoal transition-all duration-300"
                >
                  Get Your Free Audit
                </Link>
                <a
                  href="https://calendly.com/64industries/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-muted text-brand-black font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:bg-surface-dim transition-all duration-300"
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
