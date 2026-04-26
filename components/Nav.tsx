"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/paintings", label: "Paintings" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 3rem;
          background: rgba(250, 248, 244, 0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--light-gray);
        }

        .nav-logo {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--charcoal);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--mid-gray);
          transition: color 0.2s ease;
          position: relative;
          padding-bottom: 2px;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.25s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--charcoal);
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--charcoal);
          transition: all 0.3s ease;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          inset: 0;
          background: var(--warm-white);
          z-index: 99;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: var(--charcoal);
          transition: color 0.2s;
        }

        .mobile-menu a:hover {
          color: var(--accent);
        }

        .mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--charcoal);
        }

        @media (max-width: 768px) {
          .nav { padding: 1.25rem 1.5rem; }
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className="nav">
        <Link href="/" className="nav-logo">Chris Ramirez</Link>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
      </div>
    </>
  );
}
