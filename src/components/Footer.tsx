import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-xl font-display font-700 text-white mb-4 tracking-tight">
              64 Industries
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Creator monetization agency. We partner with creators to turn
              audiences into revenue.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-5">
              Navigation
            </div>
            <div className="space-y-3">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/creators", label: "For Creators" },
                { href: "/social-media", label: "Social Media" },
                { href: "/about", label: "About" },
                { href: "/founder", label: "Founder" },
                { href: "/blog", label: "Blog" },
                { href: "/case-studies", label: "Case Studies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-5">
              Services
            </div>
            <div className="space-y-3">
              <Link href="/creators" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Product Launches
              </Link>
              <Link href="/social-media" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Social Media Management
              </Link>
              <Link href="/creators" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Brand Deal Brokering
              </Link>
              <Link href="/audit" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Free Audit
              </Link>
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest mb-5">
              Get Started
            </div>
            <div className="space-y-3">
              <Link href="/audit" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Free Creator Audit
              </Link>
              <Link href="/how-it-works" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Our Process
              </Link>
              <Link href="/privacy" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-zinc-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[11px] text-zinc-600 tracking-wide">
            &copy; 2026 64 Industries. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="https://instagram.com/64industries" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://x.com/64industries" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors" aria-label="X">
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
