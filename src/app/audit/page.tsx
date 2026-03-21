"use client";

import AuditForm from "@/components/AuditForm";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

export default function AuditPage() {
  return (
    <>
      {/* Hero intro */}
      <section className="pt-32 pb-12 px-8 bg-brand-black">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <div className="font-mono text-[10px] text-[#6B7280] uppercase tracking-[0.2em] mb-4">
              Free Creator Audit
            </div>
            <h1 className="font-display font-800 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-white mb-4">
              Find out exactly how much revenue you&apos;re missing
            </h1>
            <p className="text-[#6B7280] text-[16px] max-w-xl mx-auto leading-relaxed">
              Submit your details below and our team will build a personalized monetization
              audit with real revenue projections for your audience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <AuditForm />

      {/* What Happens Next */}
      <section className="py-20 px-8 bg-surface-light">
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="font-mono text-[10px] text-[#44474A] uppercase tracking-[0.2em] mb-3">
                The Process
              </div>
              <h2 className="font-display font-800 text-2xl md:text-3xl tracking-[-0.02em] text-brand-black">
                What Happens After You Submit
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {[
              {
                num: "01",
                title: "We Analyze",
                desc: "Our team reviews your content, audience demographics, engagement rates, and niche positioning.",
                time: "Day 1",
              },
              {
                num: "02",
                title: "We Build Your Report",
                desc: "We calculate your revenue potential with real numbers — not guesses. Product type, pricing, and projected sales.",
                time: "Day 1-2",
              },
              {
                num: "03",
                title: "We Reach Out",
                desc: "You'll get a DM or email with your full audit. If the numbers make sense, we'll discuss next steps.",
                time: "Within 48hrs",
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="bg-white p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-2xl text-[#E8EAED] font-bold">{step.num}</span>
                    <div>
                      <h3 className="font-display font-700 text-[15px] text-brand-black">{step.title}</h3>
                      <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">{step.time}</span>
                    </div>
                  </div>
                  <p className="text-[#44474A] text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center space-y-6">
              <div className="inline-flex items-center gap-6 font-mono text-[10px] text-[#9CA3AF] uppercase tracking-widest">
                <span>100% Free</span>
                <span className="w-1 h-1 bg-[#E8EAED] rounded-full" />
                <span>No Credit Card</span>
                <span className="w-1 h-1 bg-[#E8EAED] rounded-full" />
                <span>No Obligations</span>
              </div>

              <div className="pt-6">
                <p className="text-[#44474A] text-[14px] mb-4">
                  Prefer to talk first? Skip the form and book a quick intro call.
                </p>
                <a
                  href="https://calendly.com/64industries/intro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-black text-white font-display font-600 text-[14px] tracking-wide px-8 py-3.5 rounded-btn hover:bg-brand-charcoal transition-all duration-300"
                >
                  Book a 15-Min Call Instead
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
