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
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <Link
          href="/"
          className={`text-2xl font-black tracking-tighter uppercase font-headline transition-colors ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
        >
          64 INDUSTRIES
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body font-medium transition-colors text-sm tracking-wide ${
                scrolled
                  ? "text-neutral-500 hover:text-neutral-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/audit"
          className="hidden md:block bg-brand-red text-white font-headline font-bold tracking-tight px-6 py-2.5 uppercase text-sm hover:bg-brand-red-hover transition-colors"
        >
          GET YOUR AUDIT
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-neutral-900" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 pb-6 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-neutral-600 hover:text-neutral-900 transition-colors font-body font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/audit"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-brand-red text-white font-headline font-bold tracking-tight px-6 py-3 uppercase text-center text-sm"
          >
            GET YOUR AUDIT
          </Link>
        </div>
      )}
    </nav>
  );
}
