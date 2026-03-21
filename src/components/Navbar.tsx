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
    { href: "/creators", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-8 py-5">
        <Link
          href="/"
          className="font-display font-800 text-[18px] tracking-[-0.02em] text-brand-black"
        >
          64 Industries
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#44474A] hover:text-brand-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/audit"
          className="hidden lg:block bg-brand-black text-white font-display font-600 text-[13px] tracking-wide px-6 py-2.5 rounded-btn hover:bg-brand-charcoal transition-colors"
        >
          Audit Request
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-brand-black"
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
        <div className="lg:hidden bg-white px-8 pb-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#44474A] hover:text-brand-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-brand-black text-white font-display font-600 text-[13px] px-6 py-3 rounded-btn text-center"
          >
            Audit Request
          </Link>
        </div>
      )}
    </nav>
  );
}
