"use client";

import Link from "next/link";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/Motion";

const values = [
  {
    title: "Performance Only",
    desc: "We don't charge retainers for launches. We take a revenue share. If we don't make you money, we don't make money. Period.",
  },
  {
    title: "Creator First",
    desc: "Your brand stays your brand. Your audience, your name, your reputation. We work behind the scenes so you stay in the spotlight.",
  },
  {
    title: "No Bullshit",
    desc: "Transparent numbers. Real projections. No hidden fees, no vague promises. We show you the math before we start.",
  },
  {
    title: "Long Term",
    desc: "We're not looking to do one launch and disappear. We build lasting partnerships that compound in value over time.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero (White) */}
      <header className="pt-32 pb-20 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-6">
              About
            </div>
            <h1 className="font-display font-800 text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-[-0.02em] text-brand-black">
              Who we are.
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* Origin Story */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
            <SlideIn direction="left">
              <h2 className="font-display font-800 text-4xl md:text-5xl tracking-[-0.02em] leading-[1.1] text-brand-black">
                From Agency<br />to Partner.
              </h2>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <div className="space-y-5 text-[#44474A] text-[16px] leading-relaxed">
                <p>
                  64 Industries started as a traditional creative agency but evolved. We spent
                  years inside the standard agency model. We saw the bloated retainers, the
                  focus on &quot;impressions&quot; over income, and the misalignment of
                  incentives. The agency gets paid regardless of whether the creator wins.
                </p>
                <p>
                  We realized that creators don&apos;t need another agency. They need a
                  partner who only wins when they win. A team that treats their business
                  like a revenue engine, where every action is measured by its impact on
                  the bottom line.
                </p>
                <p>
                  The shift forced us to become obsessed with data and efficiency. We focused
                  on targeting tangible outcomes for our partners. So we built 64 Industries
                  — a performance-only model where we stopped being a vendor and started
                  being the engine behind creator revenue.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Our Principles
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                What Drives Us
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <HoverScale>
                  <div className="bg-surface-light p-8 h-full hover:bg-surface-muted transition-colors duration-300">
                    <h3 className="font-display font-700 text-lg mb-3 text-brand-black">
                      {value.title}
                    </h3>
                    <p className="text-[#44474A] text-[14px] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA (Charcoal) */}
      <section className="py-20 px-8 bg-brand-black">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-[-0.02em] text-white mb-4">
              Ready to turn your audience into revenue?
            </h2>
            <p className="text-[#6B7280] text-[15px] mb-8 max-w-lg mx-auto leading-relaxed">
              Find out exactly how much you&apos;re leaving on the table. No cost, no commitment.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-white text-brand-black font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-surface-dim transition-colors"
            >
              Get Your Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
