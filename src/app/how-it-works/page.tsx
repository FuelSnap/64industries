import Link from "next/link";

const phases = [
  {
    num: "01",
    days: "Days 1-3",
    title: "DISCOVERY",
    desc: "We dive into your content, audience demographics, and engagement patterns. Our team identifies exactly where the monetization gaps are and what your audience is hungry for.",
    details: [
      "Deep analysis of your content and audience behavior",
      "Engagement rate and growth trend review",
      "Competitor and niche landscape mapping",
      "Initial monetization opportunity assessment",
    ],
  },
  {
    num: "02",
    days: "Days 3-7",
    title: "THE AUDIT",
    desc: "We build your personalized Creator Monetization Audit — a full breakdown of your revenue potential with real numbers. We walk you through it on a call so you can see exactly what's possible.",
    details: [
      "Revenue potential calculations with your real numbers",
      "Product-market fit analysis for your niche",
      "Audience segmentation and buying intent signals",
      "Recommended product type and pricing strategy",
    ],
  },
  {
    num: "03",
    days: "Days 7-10",
    title: "AGREEMENT",
    desc: "If the numbers make sense for both of us, we lock in the partnership. We agree on the revenue split, define exactly what each side handles, and sign the agreement.",
    details: [
      "Revenue split negotiation (always in your favor to start)",
      "Clear scope — what we handle vs what you handle",
      "Partnership agreement with defined terms",
      "Onboarding and kickoff",
    ],
  },
  {
    num: "04",
    days: "Days 10-21",
    title: "THE BUILD",
    desc: "Our team goes to work. We build your product, set up the tech, write all the sales copy, and create the launch strategy. You approve everything before it goes live.",
    details: [
      "Product packaging (course outline, community structure, or coaching framework)",
      "Full tech setup — storefront, checkout, payment processing",
      "Sales page copy, landing page, and email sequences",
      "Complete launch strategy and story scripts",
    ],
  },
  {
    num: "05",
    days: "Days 21-35",
    title: "LAUNCH",
    desc: "The 14-day launch sequence goes live. You post the content we've scripted, engage with your audience, and watch the sales come in. We manage everything else behind the scenes.",
    details: [
      "5-day warm-up phase (build anticipation)",
      "5-day pre-launch (reveal and generate excitement)",
      "4-day open cart (drive urgency and close sales)",
      "Real-time optimization and performance tracking",
    ],
  },
  {
    num: "06",
    days: "Day 35+",
    title: "ONGOING",
    desc: "After launch, your product continues selling on autopilot. We monitor performance, plan the next product, and keep growing your revenue month over month.",
    details: [
      "Evergreen sales optimization",
      "Monthly performance reports and analytics",
      "Next product planning and roadmap",
      "Optional: social media management and brand deal brokering",
    ],
  },
];

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-[#E11900] text-xs uppercase tracking-[0.3em] mb-6">
            Our Process
          </div>
          <h1 className="font-headline font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.85] max-w-4xl mb-8">
            THE COMPLETE PROCESS — FROM FIRST DM TO FIRST DOLLAR
          </h1>
          <p className="text-neutral-500 font-light text-lg max-w-2xl mb-10">
            No guesswork. No wasted time. Our team follows a proven process to
            take you from &quot;I should monetize my audience&quot; to actual
            revenue in your bank account.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-[#E11900] text-white font-headline font-black tracking-tighter px-10 py-4 uppercase hover:bg-white hover:text-black transition-all text-lg"
          >
            START WITH A FREE AUDIT
          </Link>
        </div>
      </header>

      {/* Timeline */}
      <section className="py-20 px-6 bg-surface-dim">
        <div className="max-w-5xl mx-auto">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className={`relative grid md:grid-cols-[200px_1fr] gap-8 pb-20 ${
                i !== phases.length - 1
                  ? "border-l-2 border-[#E11900]/20 ml-6 md:ml-0 md:border-l-0"
                  : "ml-6 md:ml-0"
              }`}
            >
              {/* Left side - number and days */}
              <div className="md:text-right">
                <div className="font-data text-5xl text-[#E11900] opacity-40 mb-2">
                  {phase.num}
                </div>
                <div className="font-data text-xs text-neutral-600 uppercase tracking-widest">
                  {phase.days}
                </div>
              </div>

              {/* Right side - content */}
              <div className="bg-surface-container-high p-8 border border-white/5">
                <h3 className="font-headline font-black text-3xl uppercase tracking-tight mb-4">
                  {phase.title}
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
                  {phase.desc}
                </p>
                <ul className="space-y-3">
                  {phase.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-neutral-500 text-sm font-light"
                    >
                      <span className="text-[#E11900] mt-0.5 shrink-0">
                        &gt;&gt;
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-[#E11900]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter uppercase mb-6 text-white">
            READY TO GET STARTED?
          </h2>
          <p className="text-white/80 font-light mb-10 max-w-lg mx-auto">
            Skip the guesswork. Let our team audit your creator business and
            show you the missing revenue.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-white text-black font-headline font-black tracking-tighter px-12 py-5 uppercase hover:bg-black hover:text-white transition-all text-xl"
          >
            START WITH A FREE AUDIT
          </Link>
        </div>
      </section>
    </>
  );
}
