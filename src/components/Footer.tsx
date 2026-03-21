import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black py-20 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="font-display font-800 text-[20px] text-white tracking-[-0.02em] mb-4">
              64 Industries
            </div>
            <p className="text-[#9CA3AF] text-[14px] leading-relaxed">
              Institutional-grade creator strategy. We architect the infrastructure
              that transforms influence into scalable revenue.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.15em] mb-6">
              Strategy
            </div>
            <div className="space-y-3">
              {[
                { href: "/how-it-works", label: "Methodology" },
                { href: "/creators", label: "Partnership Model" },
                { href: "/social-media", label: "Social Intelligence" },
                { href: "/case-studies", label: "Case Studies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#9CA3AF] hover:text-white transition-colors text-[13px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.15em] mb-6">
              Company
            </div>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/founder", label: "Founder" },
                { href: "/blog", label: "Insights" },
                { href: "/audit", label: "Request Audit" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#9CA3AF] hover:text-white transition-colors text-[13px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-[0.15em] mb-6">
              Legal
            </div>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-[#9CA3AF] hover:text-white transition-colors text-[13px]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-[#9CA3AF] hover:text-white transition-colors text-[13px]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="font-mono text-[10px] text-[#6B7280] tracking-[0.1em]">
            &copy; 2026 64 Industries. All rights reserved.
          </div>
          <div className="font-mono text-[10px] text-[#6B7280] uppercase tracking-[0.15em]">
            Institutional Grade Creator Strategy
          </div>
        </div>
      </div>
    </footer>
  );
}
