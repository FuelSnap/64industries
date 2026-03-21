import Link from "next/link";
import AuditForm from "@/components/AuditForm";

const services = [
  {
    title: "CONTENT STRATEGY",
    desc: "We build custom content calendars tailored to your niche, audience behavior, and platform algorithms. Every post has a purpose.",
    items: [
      "Monthly content calendar with themes and hooks",
      "Platform-specific formatting (Reels, Stories, Carousels, TikToks)",
      "Trend monitoring and rapid-response content",
      "Content pillar development",
    ],
  },
  {
    title: "DAILY MANAGEMENT",
    desc: "We handle the grind so you don't have to. Scheduling, posting, caption writing, hashtag research — all done for you.",
    items: [
      "Daily posting across all platforms",
      "Caption writing and hashtag optimization",
      "Story creation and scheduling",
      "Cross-platform content repurposing",
    ],
  },
  {
    title: "COMMUNITY & ENGAGEMENT",
    desc: "Growth isn't just about posting — it's about building relationships. We manage your community so your audience stays engaged and loyal.",
    items: [
      "Comment responses and engagement",
      "DM management and lead qualification",
      "Community building and interaction",
      "Audience sentiment monitoring",
    ],
  },
  {
    title: "ANALYTICS & GROWTH",
    desc: "Data drives everything we do. Monthly reports show what's working, what's not, and where the growth opportunities are.",
    items: [
      "Monthly performance reports",
      "Follower growth tracking and benchmarks",
      "Engagement rate optimization",
      "Competitor analysis and positioning",
    ],
  },
];

const platforms = [
  { name: "Instagram", desc: "Reels, Stories, Carousels, Feed posts" },
  { name: "TikTok", desc: "Short-form video strategy and posting" },
  { name: "YouTube", desc: "Shorts, Community posts, thumbnail strategy" },
  { name: "X / Twitter", desc: "Threads, engagement, and growth" },
];

export default function SocialMedia() {
  return (
    <>
      {/* Hero (Dark) */}
      <header className="pt-32 pb-20 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-6">
            Social Media Management
          </div>
          <h1 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase leading-[0.85] max-w-5xl mb-8 text-white">
            WE MANAGE YOUR{" "}
            <span className="text-brand-red">SOCIAL MEDIA</span> SO YOU CAN
            FOCUS ON CREATING
          </h1>
          <p className="text-neutral-400 font-light text-lg max-w-2xl mb-10 leading-relaxed">
            Growing and maintaining a social media presence takes hours every
            day. Our team handles the strategy, the posting, and the engagement
            — so your accounts grow while you focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/audit"
              className="bg-brand-red text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-brand-red-hover transition-colors text-lg text-center"
            >
              GET STARTED
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/20 text-white font-headline font-bold tracking-tight px-10 py-4 uppercase hover:bg-white/5 transition-all text-lg text-center"
            >
              SEE HOW IT WORKS
            </Link>
          </div>
        </div>
      </header>

      {/* Why You Need This (Light) */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            The Reality
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-8 text-neutral-900">
            POSTING CONSISTENTLY IS A{" "}
            <span className="text-brand-red">FULL-TIME JOB</span>
          </h2>
          <p className="text-neutral-600 font-light text-lg max-w-3xl mb-12 leading-relaxed">
            Most creators know they need to post more, engage more, and stay on
            top of trends. But between creating actual content, managing
            partnerships, and living life — social media management falls
            behind. That&apos;s where we come in.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-8 border border-neutral-200 text-center">
              <div className="font-data text-4xl text-brand-red mb-3">73%</div>
              <p className="text-neutral-500 text-sm font-light">
                of creators say inconsistent posting is their biggest growth
                barrier
              </p>
            </div>
            <div className="bg-neutral-50 p-8 border border-neutral-200 text-center">
              <div className="font-data text-4xl text-brand-red mb-3">
                20hrs
              </div>
              <p className="text-neutral-500 text-sm font-light">
                per week average time spent on social media management by
                full-time creators
              </p>
            </div>
            <div className="bg-neutral-50 p-8 border border-neutral-200 text-center">
              <div className="font-data text-4xl text-brand-red mb-3">3x</div>
              <p className="text-neutral-500 text-sm font-light">
                faster audience growth with a dedicated management team vs doing
                it alone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Light alternate) */}
      <section className="py-28 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            What&apos;s Included
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-neutral-900">
            FULL-SERVICE MANAGEMENT
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 border border-neutral-200 shadow-sm"
              >
                <h3 className="font-headline font-black text-xl uppercase tracking-tight mb-3 text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-neutral-600 text-sm font-light"
                    >
                      <span className="text-brand-red mt-0.5 shrink-0 text-xs">
                        &gt;&gt;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms (Dark) */}
      <section className="py-28 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Platforms
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-16 text-white">
            WHERE WE <span className="text-brand-red">OPERATE</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white/5 p-8 border border-white/10"
              >
                <h3 className="font-headline font-black text-lg uppercase tracking-tight text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-neutral-500 text-sm font-light">
                  {platform.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (Light) */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-data text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
            Investment
          </div>
          <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tighter uppercase mb-6 text-neutral-900">
            SIMPLE PRICING
          </h2>
          <p className="text-neutral-500 font-light text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            No hidden fees. No long-term contracts. Monthly retainer based on
            your needs and platform count.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-neutral-50 p-8 border border-neutral-200 text-left">
              <div className="font-data text-xs text-neutral-400 uppercase tracking-widest mb-2">
                Growth
              </div>
              <div className="font-headline font-black text-3xl text-neutral-900 mb-1">
                $1,500<span className="text-lg text-neutral-400">/mo</span>
              </div>
              <p className="text-neutral-500 text-sm font-light mb-4">
                Perfect for creators just getting started with professional
                management.
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm font-light">
                <li>2 platforms</li>
                <li>Content calendar & posting</li>
                <li>Basic engagement management</li>
                <li>Monthly analytics report</li>
              </ul>
            </div>

            <div className="bg-brand-dark p-8 text-left relative">
              <div className="absolute top-0 right-0 bg-brand-red text-white font-data text-[10px] px-4 py-1 tracking-widest uppercase">
                Most Popular
              </div>
              <div className="font-data text-xs text-neutral-500 uppercase tracking-widest mb-2">
                Scale
              </div>
              <div className="font-headline font-black text-3xl text-white mb-1">
                $3,000<span className="text-lg text-neutral-500">/mo</span>
              </div>
              <p className="text-neutral-400 text-sm font-light mb-4">
                Full-service management for creators ready to grow fast.
              </p>
              <ul className="space-y-2 text-neutral-300 text-sm font-light">
                <li>All platforms</li>
                <li>Full content strategy & creation</li>
                <li>Community & DM management</li>
                <li>Weekly performance reports</li>
                <li>Trend monitoring & rapid response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <AuditForm />
    </>
  );
}
