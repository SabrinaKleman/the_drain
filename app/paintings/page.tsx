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
  width: number;   // natural image width (for aspect ratio)
  height: number;  // natural image height (for aspect ratio)
};

const paintings: Painting[] = [
  // — Full pages —
  // Update width/height to match the real pixel dimensions of each image if you know them.
  // These are plausible guesses — Next.js will still render correctly, they just affect layout spacing.
  { id: 1,  title: "Planes and Trees",      year: "2024", medium: "Oil on canvas",     dimensions: '24" × 36"', image: "/images/planesandtrees.png",   type: "page",     slug: "planesandtrees",    width: 800,  height: 1000 },
  { id: 2,  title: "TV in the Land",        year: "2024", medium: "Acrylic on canvas", dimensions: '20" × 24"', image: "/images/tvinland.jpeg",        type: "page",     slug: "tvinland",          width: 800,  height: 960  },
  { id: 3,  title: "Still Life with Lemon", year: "2023", medium: "Oil on panel",      dimensions: '12" × 12"', image: "/images/lemon.jpg",            type: "page",     slug: "lemon",             width: 800,  height: 800  },
  { id: 4,  title: "Cell TV",               year: "2024", medium: "Acrylic on canvas", dimensions: '16" × 20"', image: "/images/celltv.jpg",           type: "page",     slug: "celltv",            width: 800,  height: 1000 },
  { id: 5,  title: "Airplane",              year: "2023", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/airplane.png",         type: "page",     slug: "airplane",          width: 800,  height: 1067 },
  { id: 6,  title: "Computer",              year: "2024", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/computer.jpeg",        type: "page",     slug: "computer",          width: 800,  height: 800  },
  { id: 7,  title: "Breakfast in Miami",    year: "2023", medium: "Oil on canvas",     dimensions: '24" × 30"', image: "/images/breakfastinmiami.png", type: "page",     slug: "breakfastinmiami",  width: 800,  height: 1000 },
  // — Lightbox —
  { id: 8,  title: "You Are Here",          year: "2024", medium: "Acrylic on canvas", dimensions: '12" × 12"', image: "/images/drain.png",            type: "lightbox",                            width: 800,  height: 800  },
  { id: 9,  title: "Roses I",               year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses.png",            type: "lightbox",                            width: 800,  height: 1000 },
  { id: 10, title: "Roses II",              year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses2.jpeg",          type: "lightbox",                            width: 800,  height: 1000 },
  { id: 11, title: "Scene",                 year: "2023", medium: "Mixed media",       dimensions: '20" × 20"', image: "/images/scene.jpeg",           type: "lightbox",                            width: 800,  height: 800  },
  { id: 12, title: "Square I",              year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square.jpeg",          type: "lightbox",                            width: 800,  height: 800  },
  { id: 13, title: "Square II",             year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square2.jpeg",         type: "lightbox",                            width: 800,  height: 800  },
  { id: 14, title: "Square III",            year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square3.jpg",          type: "lightbox",                            width: 800,  height: 800  },
  { id: 15, title: "Square IV",             year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square4.jpeg",         type: "lightbox",                            width: 800,  height: 800  },
  { id: 16, title: "Square V",              year: "2022", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square5.jpeg",         type: "lightbox",                            width: 800,  height: 800  },
  { id: 17, title: "Ghost in the Woods",    year: "2023", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/ghostinwoods.png",     type: "lightbox",                            width: 800,  height: 1067 },
  { id: 18, title: "Dark Trees",            year: "2023", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/darktrees.jpeg",       type: "lightbox",                            width: 800,  height: 1000 },
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

        /* Masonry via CSS columns */
        .masonry {
          columns: 3;
          column-gap: 20px;
          padding: 0 3.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
          cursor: crosshair;
          position: relative;
          display: block;
          color: inherit;
          text-decoration: none;
        }

        /* The image fills its natural aspect ratio — no cropping */
        .masonry-img {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--dark-surface);
        }

        .masonry-img img {
          width: 100%;
          height: auto !important;
          position: relative !important;
          display: block;
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: brightness(0.88) saturate(0.9);
        }

        .masonry-item:hover .masonry-img img {
          transform: scale(1.03);
          filter: brightness(0.65) saturate(1.1);
        }

        /* Hover overlay */
        .masonry-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .masonry-item:hover .masonry-overlay { opacity: 1; }

        .masonry-title {
          font-family: var(--font-serif);
          font-size: 0.95rem;
          font-style: italic;
          color: var(--off-white);
          margin-bottom: 0.2rem;
          line-height: 1.2;
        }

        .masonry-meta {
          font-family: var(--font-mono);
          font-size: 0.52rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--light);
        }

        .masonry-badge {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.48rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: var(--black);
          color: var(--muted);
          padding: 0.18rem 0.45rem;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 2;
          pointer-events: none;
        }

        .masonry-item:hover .masonry-badge { opacity: 1; }

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
          max-width: min(80vw, 700px);
          max-height: 75vh;
          width: 100%;
        }

        .lightbox-inner img {
          width: 100% !important;
          height: auto !important;
          position: relative !important;
          max-height: 75vh;
          object-fit: contain;
        }

        .lightbox-info {
          margin-top: 1.75rem;
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

        @media (max-width: 900px) {
          .masonry { columns: 2; }
          .page-hero { padding: 8rem 1.5rem 2.5rem; }
          .masonry { padding: 0 1.5rem; }
        }

        @media (max-width: 500px) {
          .masonry { columns: 1; }
        }
      `}</style>

      <div className="page-hero">
        <h1 className="page-title fade-up fade-up-delay-1">WORKS</h1>
        <span className="page-count fade-up fade-up-delay-2">{paintings.length} pieces</span>
      </div>

      <div className="masonry">
        {paintings.map((p, i) => {
          const inner = (
            <>
              <div className="masonry-img">
                {/* width/height props give Next.js the aspect ratio — actual display size is controlled by CSS */}
                <Image
                  src={p.image}
                  alt={p.title}
                  width={p.width}
                  height={p.height}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="masonry-overlay">
                  <p className="masonry-title">{p.title}</p>
                  <p className="masonry-meta">{p.medium} · {p.year}</p>
                </div>
              </div>
              <span className="masonry-badge">{p.type === "page" ? "View work →" : "Expand ↗"}</span>
            </>
          );

          return p.type === "page" ? (
            <Link
              key={p.id}
              href={`/paintings/${p.slug}`}
              className="masonry-item fade-up"
              style={{ animationDelay: `${0.03 * i}s`, animationFillMode: 'both', opacity: 0 }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={p.id}
              className="masonry-item fade-up"
              style={{ animationDelay: `${0.03 * i}s`, animationFillMode: 'both', opacity: 0 }}
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
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={lightbox.width}
              height={lightbox.height}
              style={{ width: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain' }}
            />
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
