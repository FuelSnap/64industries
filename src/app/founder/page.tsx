"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, HoverScale, GradientOrb } from "@/components/Motion";

const philosophy = [
  {
    title: "Aligned Incentives",
    desc: "Revenue share forces us to deliver results. We can't hide behind vanity metrics. Either the product sells or it doesn't.",
  },
  {
    title: "Fewer, Deeper",
    desc: "We don't want 100 clients. We want 10 incredible partnerships where we can go deep and create compounding revenue.",
  },
  {
    title: "Long-Term Vision",
    desc: "We're not looking to do one launch and disappear. We build lasting partnerships that compound in value over time.",
  },
  {
    title: "Integrity First",
    desc: "The creator economy is worth $250 billion, but most creators see almost none of it. We exist to change that equation.",
  },
];

const credentials = [
  { label: "YouTube", value: "1.5M+ Subscribers" },
  { label: "Creator Since", value: "2013" },
  { label: "Brands Built", value: "Multiple 6-Figure" },
  { label: "Based In", value: "Toronto, Canada" },
];

export default function Founder() {
  return (
    <>
      {/* Hero (Light/Gray) */}
      <header className="pt-32 pb-16 px-8 bg-surface-muted">
        <div className="max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <h1 className="font-display font-800 text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-zinc-900 uppercase">
              The Founder
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* Bio (Light) */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-[380px_1fr] gap-12 items-start">
            {/* Photo */}
            <SlideIn direction="left">
              <div className="rounded-card overflow-hidden border border-surface-border shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <Image
                  src="/founder.jpg"
                  alt="Founder of 64 Industries"
                  width={380}
                  height={380}
                  className="w-full object-cover aspect-[4/5]"
                  priority
                />
              </div>
            </SlideIn>

            {/* Bio Text */}
            <SlideIn direction="right" delay={0.15}>
              <div>
                <h2 className="font-display font-800 text-2xl md:text-3xl tracking-tight text-zinc-900 mb-2">
                  Founder & CEO
                </h2>
                <div className="font-mono text-[11px] text-brand-red uppercase tracking-widest mb-6">
                  64 Industries
                </div>

                {/* Credential badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {credentials.map((c) => (
                    <div key={c.label} className="bg-surface-muted rounded-btn px-3 py-1.5 border border-surface-border">
                      <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">{c.label}</span>
                      <span className="font-display font-600 text-[13px] text-zinc-900 ml-2">{c.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 text-zinc-500 text-[16px] leading-relaxed">
                  <p>
                    I built my career as a creator — growing a YouTube channel to
                    over 1.5 million subscribers, launching a merch brand, and learning
                    every side of the creator business firsthand.
                  </p>
                  <p>
                    Along the way, I worked with dozens of creators and kept
                    seeing the same pattern: talented people with real audiences,
                    making almost nothing from them. A $300 brand deal here, a $500
                    affiliate commission there, and thinking that was the ceiling.
                  </p>
                  <p>
                    That gap between what creators earn and what they could earn is
                    what led me to build 64 Industries. A real partnership where we
                    build the product, run the launch, and split the revenue. If we
                    don&apos;t make money for the creator, we don&apos;t make money.
                  </p>
                  <p>
                    I&apos;ve been in the trenches — building audiences, negotiating
                    deals, launching products, running ads. 64 Industries exists because
                    I know what creators go through, and I know what&apos;s possible
                    when someone actually helps them build a real business.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Philosophy Cards */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
                Philosophy
              </div>
              <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-zinc-900">
                How We Think
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <HoverScale>
                  <div className="bg-white rounded-card border border-surface-border p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full hover:shadow-lg transition-shadow duration-300">
                    <h3 className="font-display font-700 text-[14px] uppercase tracking-wide mb-3 text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA (Dark) */}
      <section className="py-20 px-8 bg-brand-dark relative overflow-hidden">
        <GradientOrb color="rgba(225, 25, 0, 0.05)" size="500px" position="center" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-4">
              Connect With The Vision
            </div>
            <h2 className="font-display font-800 text-2xl md:text-3xl tracking-tight text-white mb-8">
              Ready to build the future together?
            </h2>
            <Link
              href="/audit"
              className="inline-block bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-brand-red-hover hover:shadow-[0_8px_30px_rgba(225,25,0,0.3)] transition-all duration-300"
            >
              Get Your Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
