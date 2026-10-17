"use client";

import Link from "next/link";
import { useState } from "react";

/** Navigation links shared by desktop and mobile menus. */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar: site name + hamburger (mobile) / nav (desktop) */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Haas Personal Training
        </Link>

        {/* Hamburger button — visible on mobile only */}
        <button
          type="button"
          className="rounded p-2 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            /* X icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop nav — hidden on mobile */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-accent transition-colors">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="rounded-full bg-accent px-4 py-2 text-accent-foreground font-semibold hover:bg-lime-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile nav drawer — slides in below top bar */}
      {open && (
        <nav id="mobile-nav" aria-label="Mobile main">
          <ul className="flex flex-col border-t border-white/20 px-6 py-4 text-sm font-medium gap-4 md:hidden">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block hover:text-accent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="inline-block rounded-full bg-accent px-4 py-2 text-accent-foreground font-semibold hover:bg-lime-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Book
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
