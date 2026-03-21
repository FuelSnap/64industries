"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem, HoverScale, SlideIn } from "@/components/Motion";

const painPoints = [
  "You have 10K+ followers but make less than $1K/mo from your content",
  "Brand deals are inconsistent and pay less than you deserve",
  "You know you could sell a course or product but don't know where to start",
  "The business side of being a creator overwhelms you",
  "You've thought about coaching or mentorship but never launched it",
  "You spend hours creating content but barely see any return",
];

const services = [
  {
    title: "Product Launch Partnership",
    desc: "We build your digital product from scratch — the strategy, the tech, the copy, the launch plan. You focus on your content.",
    pricing: "Revenue Share — $0 Upfront",
    highlight: true,
  },
  {
    title: "Social Media Management",
    desc: "We manage your social media strategy, content scheduling, and audience growth. A bigger audience means bigger launches.",
    pricing: "$1,500 - $3,000/mo",
    highlight: false,
  },
  {
    title: "Brand Deal Brokering",
    desc: "We source brand partnerships, negotiate better rates, and manage the deals. Most micro-creators undercharge by 50-200%.",
    pricing: "15-20% Commission",
    highlight: false,
  },
];

export default function ForCreators() {
  return (
    <>
      {/* Hero (White) */}
      <header className="pt-32 pb-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-6">
              Partnership Model
            </div>
            <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] tracking-[-0.02em] text-brand-black max-w-4xl mb-6">
              Built for creators who are tired of leaving money on the table
            </h1>
            <p className="text-[#44474A] text-[17px] max-w-2xl mb-10 leading-relaxed">
              We don&apos;t do &quot;consulting.&quot; We partner with you, build
              the product, run the launch, and handle everything so you can focus
              on what you do best — creating.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="bg-brand-black text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-charcoal transition-all duration-300 text-center"
              >
                Get Your Free Audit
              </Link>
              <Link
                href="/how-it-works"
                className="bg-surface-muted text-brand-black font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-surface-dim transition-all duration-300 text-center"
              >
                See The Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Is This You? */}
      <section className="py-24 lg:py-32 px-8 bg-surface-light">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Sound Familiar?
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                Is This You?
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
            {painPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 p-5 bg-white hover:bg-surface-muted transition-colors duration-300">
                  <div className="w-5 h-5 shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-accent-emerald text-[12px]">&#x2713;</span>
                  </div>
                  <span className="text-[#44474A] text-[14px] leading-relaxed">
                    {point}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-[#9CA3AF] text-[14px]">
              If you checked even one of these, you&apos;re sitting on untapped
              revenue. Let us show you exactly how much.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Strategic Capabilities
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                What We Do For You
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <HoverScale>
                  <div className={`p-8 h-full transition-all duration-300 ${
                    service.highlight ? "bg-brand-black text-white" : "bg-surface-light"
                  }`}>
                    <h3 className={`font-display font-700 text-lg mb-3 ${service.highlight ? "text-white" : "text-brand-black"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-[14px] leading-relaxed mb-4 ${service.highlight ? "text-[#9CA3AF]" : "text-[#44474A]"}`}>
                      {service.desc}
                    </p>
                    <div className={`font-mono text-[11px] uppercase tracking-widest ${
                      service.highlight ? "text-accent-emerald" : "text-[#9CA3AF]"
                    }`}>
                      {service.pricing}
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 lg:py-32 px-8 bg-brand-black relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <div className="font-mono text-[10px] text-[#6B7280] uppercase tracking-[0.2em] mb-3">
                  The Deal
                </div>
                <h2 className="font-display font-800 text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6 leading-tight">
                  You create. We build the business behind it.
                </h2>
                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-8">
                  We handle the heavy lifting — product creation, tech setup, sales pages,
                  launch strategy, email sequences. Your main job is to keep creating the
                  content you already make.
                </p>
                <Link
                  href="/audit"
                  className="inline-block bg-white text-brand-black font-display font-600 text-[14px] tracking-wide px-7 py-3.5 rounded-btn hover:bg-surface-dim transition-all duration-300"
                >
                  See What You&apos;re Leaving on the Table
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: "Your Time", value: "3-5 hrs total", desc: "We handle everything else" },
                  { label: "Upfront Cost", value: "$0", desc: "Revenue share only" },
                  { label: "Your Share", value: "70-80%", desc: "You always get the bigger cut" },
                  { label: "Timeline", value: "35 days", desc: "From audit to launch" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 p-5 flex items-center justify-between hover:bg-white/8 transition-colors duration-300">
                    <div>
                      <div className="font-mono text-[10px] text-[#6B7280] uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-[#9CA3AF] text-[13px]">{item.desc}</div>
                    </div>
                    <div className="font-display font-800 text-xl text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 bg-surface-light">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-[-0.02em] text-brand-black mb-4">
              Stop leaving money on the table
            </h2>
            <p className="text-[#44474A] text-[15px] mb-8 max-w-lg mx-auto leading-relaxed">
              Get a free audit that shows you exactly how much revenue your audience can generate.
            </p>
            <Link
              href="/audit"
              className="inline-block bg-brand-black text-white font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-brand-charcoal transition-colors"
            >
              Get Your Free Audit
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
