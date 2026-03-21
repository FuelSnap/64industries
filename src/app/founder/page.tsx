"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, HoverScale } from "@/components/Motion";

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
  { label: "YouTube", value: "1.5M+ Subscribers", href: "https://www.youtube.com/@6Foot4Honda" },
  { label: "Creator Since", value: "2013", href: null },
  { label: "Brands Built", value: "Multiple 6-Figure", href: "https://www.6foot4honda.com" },
  { label: "Based In", value: "Toronto, Canada", href: null },
];

export default function Founder() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-16 px-8 bg-surface-light">
        <div className="max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-4">
              Leadership
            </div>
            <h1 className="font-display font-800 text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-brand-black">
              The Founder
            </h1>
          </FadeIn>
        </div>
      </header>

      {/* Bio */}
      <section className="py-24 lg:py-32 px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-[380px_1fr] gap-12 items-start">
            <SlideIn direction="left">
              <div className="space-y-4">
                <div className="overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Founder of 64 Industries"
                    width={380}
                    height={380}
                    className="w-full object-cover aspect-[4/5]"
                    priority
                  />
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.youtube.com/@6Foot4Honda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-surface-light px-4 py-2.5 hover:bg-surface-muted transition-colors flex-1"
                  >
                    <svg className="w-4 h-4 fill-brand-black shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <div>
                      <div className="font-display font-600 text-[12px] text-brand-black">YouTube</div>
                      <div className="font-mono text-[9px] text-[#9CA3AF]">1.5M+ subscribers</div>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/6foot4honda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-surface-light px-4 py-2.5 hover:bg-surface-muted transition-colors flex-1"
                  >
                    <svg className="w-4 h-4 fill-brand-black shrink-0" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    <div>
                      <div className="font-display font-600 text-[12px] text-brand-black">Instagram</div>
                      <div className="font-mono text-[9px] text-[#9CA3AF]">213K followers</div>
                    </div>
                  </a>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.15}>
              <div>
                <h2 className="font-display font-800 text-2xl md:text-3xl tracking-[-0.02em] text-brand-black mb-2">
                  Founder & CEO
                </h2>
                <div className="font-mono text-[11px] text-[#44474A] uppercase tracking-widest mb-6">
                  64 Industries
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {credentials.map((c) => {
                    const inner = (
                      <>
                        <span className="font-mono text-[9px] text-[#9CA3AF] uppercase tracking-widest">{c.label}</span>
                        <span className="font-display font-600 text-[13px] text-brand-black ml-2">{c.value}</span>
                      </>
                    );
                    return c.href ? (
                      <a
                        key={c.label}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-surface-light px-3 py-1.5 hover:bg-surface-muted transition-colors"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={c.label} className="bg-surface-light px-3 py-1.5">
                        {inner}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-5 text-[#44474A] text-[16px] leading-relaxed">
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
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                Philosophy
              </div>
              <h2 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] text-brand-black">
                How We Think
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {philosophy.map((item) => (
              <StaggerItem key={item.title}>
                <HoverScale>
                  <div className="bg-white p-6 h-full hover:bg-surface-muted transition-colors duration-300">
                    <h3 className="font-display font-700 text-[14px] uppercase tracking-wide mb-3 text-brand-black">
                      {item.title}
                    </h3>
                    <p className="text-[#44474A] text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA (Charcoal) */}
      <section className="py-20 px-8 bg-brand-black relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#6B7280] uppercase tracking-[0.2em] mb-4">
              Connect With The Vision
            </div>
            <h2 className="font-display font-800 text-2xl md:text-3xl tracking-[-0.02em] text-white mb-8">
              Ready to build the future together?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="bg-white text-brand-black font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-surface-dim transition-all duration-300 text-center"
              >
                Get Your Free Audit
              </Link>
              <a
                href="https://calendly.com/64industries/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white font-display font-600 text-[15px] tracking-wide px-10 py-4 rounded-btn hover:bg-white/20 transition-all duration-300 text-center"
              >
                Book a 15-Min Call
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
