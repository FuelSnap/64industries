"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/creators", label: "For Creators" },
    { href: "/social-media", label: "Social Media" },
    { href: "/results", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/founder", label: "Founder" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-8 py-5">
        <Link
          href="/"
          className={`text-xl font-display font-700 tracking-tight transition-colors ${
            scrolled ? "text-zinc-900" : "text-white"
          }`}
        >
          64 Industries
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] font-body font-500 transition-colors ${
                scrolled
                  ? "text-zinc-500 hover:text-zinc-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/audit"
          className="hidden lg:block bg-brand-red text-white font-display font-600 text-[13px] tracking-wide px-5 py-2.5 rounded-btn hover:bg-brand-red-hover transition-colors"
        >
          Get Your Audit
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden transition-colors ${
            scrolled ? "text-zinc-900" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-surface-border px-8 pb-6 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-zinc-600 hover:text-zinc-900 transition-colors text-[15px] font-body"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-brand-red text-white font-display font-600 text-[14px] px-6 py-3 rounded-btn text-center"
          >
            Get Your Audit
          </Link>
        </div>
      )}
    </nav>
  );
}
