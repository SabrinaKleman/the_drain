"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Painting = {
  id: number;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  type: "page" | "lightbox";
  slug?: string;
};

const paintings: Painting[] = [
  // — Full pages —
  { id: 1,  title: "Planes and Trees",      year: "2024", medium: "Oil on canvas",     dimensions: '24" × 36"', image: "/images/planesandtrees.png",   type: "page",     slug: "planesandtrees" },
  { id: 2,  title: "TV in the Land",        year: "2024", medium: "Acrylic on canvas", dimensions: '20" × 24"', image: "/images/tvinland.jpeg",        type: "page",     slug: "tvinland" },
  { id: 3,  title: "Still Life with Lemon", year: "2023", medium: "Oil on panel",      dimensions: '12" × 12"', image: "/images/lemon.jpg",            type: "page",     slug: "lemon" },
  { id: 4,  title: "Cell TV",               year: "2024", medium: "Acrylic on canvas", dimensions: '16" × 20"', image: "/images/celltv.jpg",           type: "page",     slug: "celltv" },
  { id: 5,  title: "Airplane",              year: "2023", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/airplane.png",         type: "page",     slug: "airplane" },
  { id: 6,  title: "Computer",              year: "2024", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/computer.jpeg",        type: "page",     slug: "computer" },
  { id: 7,  title: "Breakfast in Miami",    year: "2023", medium: "Oil on canvas",     dimensions: '24" × 30"', image: "/images/breakfastinmiami.png", type: "page",     slug: "breakfastinmiami" },
  // — Lightbox —
  { id: 8,  title: "You Are Here",          year: "2024", medium: "Acrylic on canvas", dimensions: '12" × 12"', image: "/images/drain.png",            type: "lightbox" },
  { id: 9,  title: "Roses I",               year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses.png",            type: "lightbox" },
  { id: 10, title: "Roses II",              year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses2.jpeg",          type: "lightbox" },
  { id: 11, title: "Scene",                 year: "2023", medium: "Mixed media",       dimensions: '20" × 20"', image: "/images/scene.jpeg",           type: "lightbox" },
  { id: 12, title: "Square I",              year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square.jpeg",          type: "lightbox" },
  { id: 13, title: "Square II",             year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square2.jpeg",         type: "lightbox" },
  { id: 14, title: "Square III",            year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square3.jpg",          type: "lightbox" },
  { id: 15, title: "Square IV",             year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square4.jpeg",         type: "lightbox" },
  { id: 16, title: "Square V",              year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square5.jpeg",         type: "lightbox" },
  { id: 17, title: "Ghost in the Woods",    year: "2023", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/ghostinwoods.png",     type: "lightbox" },
  { id: 18, title: "Dark Trees",            year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/darktrees.jpeg",       type: "lightbox" },
];

export default function Paintings() {
  const [lightbox, setLightbox] = useState<Painting | null>(null);

  return (
    <>
      <style>{`
        .page-hero {
          padding: 9rem 2.5rem 3.5rem;
          border-bottom: 1px solid var(--mid);
          margin-bottom: 4rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 8vw, 7rem);
          letter-spacing: 0.04em;
          color: var(--off-white);
          line-height: 1;
        }

        .page-count {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: var(--muted);
        }

        .painting-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 3px;
          padding: 0 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .painting-card {
          cursor: crosshair;
          position: relative;
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .painting-card-img {
          width: 100%;
          aspect-ratio: 4/5;
          background: var(--dark-surface);
          overflow: hidden;
          position: relative;
        }

        .painting-card-img img {
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: brightness(0.85) saturate(0.9);
        }

        .painting-card:hover .painting-card-img img {
          transform: scale(1.04);
          filter: brightness(0.7) saturate(1.1);
        }

        .card-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: var(--black);
          color: var(--muted);
          padding: 0.2rem 0.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
        }

        .painting-card:hover .card-badge { opacity: 1; }

        .painting-card-info {
          padding: 0.9rem 0 1.5rem;
          border-bottom: 1px solid var(--dark-surface);
        }

        .painting-card-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-style: italic;
          color: var(--off-white);
          margin-bottom: 0.3rem;
        }

        .painting-card-meta {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.97);
          z-index: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: crosshair;
          animation: lbFadeIn 0.2s ease;
        }

        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .lightbox-inner {
          position: relative;
          width: min(80vw, 700px);
          height: min(72vh, 700px);
        }

        .lightbox-info {
          margin-top: 2rem;
          text-align: center;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          color: var(--off-white);
          margin-bottom: 0.4rem;
        }

        .lightbox-meta {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 2rem;
          background: none;
          border: none;
          color: var(--muted);
          font-size: 0.7rem;
          cursor: crosshair;
          font-family: var(--font-mono);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .lightbox-close:hover { color: var(--off-white); }

        @media (max-width: 768px) {
          .page-hero { padding: 8rem 1.5rem 2.5rem; }
          .painting-grid { padding: 0 1.5rem; grid-template-columns: repeat(2, 1fr); }
          .lightbox-inner { width: 90vw; height: 60vw; }
        }

        @media (max-width: 480px) {
          .painting-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-hero">
        <h1 className="page-title fade-up fade-up-delay-1">WORKS</h1>
        <span className="page-count fade-up fade-up-delay-2">{paintings.length} pieces</span>
      </div>

      <div className="painting-grid">
        {paintings.map((p, i) => {
          const inner = (
            <>
              <div className="painting-card-img">
                <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
                <span className="card-badge">{p.type === "page" ? "View work →" : "Expand ↗"}</span>
              </div>
              <div className="painting-card-info">
                <p className="painting-card-title">{p.title}</p>
                <p className="painting-card-meta">{p.medium} &nbsp;·&nbsp; {p.dimensions} &nbsp;·&nbsp; {p.year}</p>
              </div>
            </>
          );

          return p.type === "page" ? (
            <Link
              key={p.id}
              href={`/paintings/${p.slug}`}
              className="painting-card fade-up"
              style={{ animationDelay: `${0.04 * i}s`, animationFillMode: 'both', opacity: 0 }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={p.id}
              className="painting-card fade-up"
              style={{ animationDelay: `${0.04 * i}s`, animationFillMode: 'both', opacity: 0 }}
              onClick={() => setLightbox(p)}
            >
              {inner}
            </div>
          );
        })}
      </div>

      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕ close</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image src={lightbox.image} alt={lightbox.title} fill style={{ objectFit: 'contain' }} />
          </div>
          <div className="lightbox-info">
            <p className="lightbox-title">{lightbox.title}</p>
            <p className="lightbox-meta">{lightbox.medium} &nbsp;·&nbsp; {lightbox.dimensions} &nbsp;·&nbsp; {lightbox.year}</p>
          </div>
        </div>
      )}
    </>
  );
}
