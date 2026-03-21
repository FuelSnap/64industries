import Link from "next/link";
import AuditForm from "@/components/AuditForm";

const services = [
  {
    title: "Content Strategy & Planning",
    desc: "We build custom content calendars tailored to your niche, audience behavior, and platform algorithms.",
    items: ["Monthly content calendar with themes and hooks", "Platform-specific formatting", "Trend monitoring and rapid-response content", "Content pillar development"],
  },
  {
    title: "Daily Management & Execution",
    desc: "We handle the grind — scheduling, posting, caption writing, hashtag research — all done for you.",
    items: ["Daily posting across all platforms", "Caption writing and hashtag optimization", "Story creation and scheduling", "Cross-platform content repurposing"],
  },
  {
    title: "Community & Engagement",
    desc: "Growth isn't just about posting — it's about building relationships. We manage your community.",
    items: ["Comment responses and engagement", "DM management and lead qualification", "Community building and interaction", "Audience sentiment monitoring"],
  },
  {
    title: "Analytics & Growth",
    desc: "Data drives everything we do. Monthly reports show what's working and where the growth opportunities are.",
    items: ["Monthly performance reports", "Follower growth tracking and benchmarks", "Engagement rate optimization", "Competitor analysis and positioning"],
  },
];

export default function SocialMedia() {
  return (
    <>
      {/* Hero (Dark Navy) */}
      <header className="pt-32 pb-24 px-8 bg-brand-navy">
        <div className="max-w-[1400px] mx-auto">
          <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-6">
            Social Media Management
          </div>
          <h1 className="font-display font-800 text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] tracking-tight text-white max-w-3xl mb-6">
            Social Media Management
          </h1>
          <p className="text-zinc-400 text-[17px] max-w-2xl mb-10 leading-relaxed">
            Growing and maintaining a social media presence takes hours every
            day. Our team handles the strategy, the posting, and the engagement
            — so your accounts grow while you focus on what matters.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-brand-red text-white font-display font-600 text-[15px] tracking-wide px-8 py-4 rounded-btn hover:bg-brand-red-hover transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 px-8 bg-[#0D1323]">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display font-800 text-4xl md:text-5xl text-white mb-2">73%</div>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                Consistency in Posting
              </p>
            </div>
            <div>
              <div className="font-display font-800 text-4xl md:text-5xl text-white mb-2">20hrs<span className="text-lg text-zinc-500">/week</span></div>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                Time Saved
              </p>
            </div>
            <div>
              <div className="font-display font-800 text-4xl md:text-5xl text-white mb-2">3x</div>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                Audience Growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 px-8 bg-brand-navy">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              What&apos;s Included
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white">
              Full-Service Management
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/5 rounded-card border border-white/8 p-8"
              >
                <h3 className="font-display font-700 text-lg text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-[14px] leading-relaxed mb-5">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-zinc-500 text-[13px]">
                      <span className="text-brand-red mt-0.5 shrink-0 text-xs">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-8 bg-[#0D1323]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Instagram", desc: "Reels, Stories, Carousels, Feed" },
              { name: "TikTok", desc: "Short-form video strategy" },
              { name: "YouTube", desc: "Shorts, Community, Thumbnails" },
              { name: "X / Twitter", desc: "Threads, engagement, growth" },
            ].map((p) => (
              <div key={p.name} className="bg-white/5 rounded-card border border-white/8 p-6 text-center">
                <h3 className="font-display font-700 text-[15px] text-white mb-1">{p.name}</h3>
                <p className="text-zinc-500 text-[12px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 lg:py-32 px-8 bg-brand-navy">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <div className="font-mono text-[11px] text-brand-red uppercase tracking-[0.2em] mb-3">
              Pricing
            </div>
            <h2 className="font-display font-800 text-3xl md:text-4xl tracking-tight text-white">
              Simple Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-card border border-white/8 p-8">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Growth</div>
              <div className="font-display font-800 text-3xl text-white mb-1">
                $1,500<span className="text-lg text-zinc-500">/mo</span>
              </div>
              <p className="text-zinc-400 text-[14px] mb-5">Perfect for creators getting started with professional management.</p>
              <ul className="space-y-2 text-zinc-400 text-[13px]">
                <li>2 platforms</li>
                <li>Content calendar & posting</li>
                <li>Basic engagement management</li>
                <li>Monthly analytics report</li>
              </ul>
            </div>

            <div className="bg-brand-red rounded-card p-8 relative">
              <div className="absolute top-4 right-4 bg-white text-brand-red font-mono text-[10px] px-3 py-1 rounded-btn tracking-widest uppercase font-bold">
                Most Popular
              </div>
              <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest mb-2">Scale</div>
              <div className="font-display font-800 text-3xl text-white mb-1">
                $3,000<span className="text-lg text-white/60">/mo</span>
              </div>
              <p className="text-white/80 text-[14px] mb-5">Full-service management for creators ready to grow fast.</p>
              <ul className="space-y-2 text-white/80 text-[13px]">
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

      <AuditForm />
    </>
  );
}
