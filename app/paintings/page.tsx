"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Painting = {
  id: number;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  type: "page" | "lightbox";
  slug?: string;
  width: number;
  height: number;
};

const paintings: Painting[] = [
  // — Full pages —
  { id: 1,  title: "Planes and Trees",      year: "2026", medium: "Oil on canvas",     dimensions: '24" × 36"', image: "/images/planesandtrees.png",   type: "page",     slug: "planesandtrees",   width: 800, height: 1000 },
  { id: 2,  title: "TV in the Land",        year: "2025", medium: "Acrylic on canvas", dimensions: '20" × 24"', image: "/images/tvinland.jpeg",        type: "page",     slug: "tvinland",         width: 800, height: 960  },
  { id: 3,  title: "Still Life with Lemon", year: "2026", medium: "Oil on panel",      dimensions: '12" × 12"', image: "/images/lemon.jpg",            type: "page",     slug: "lemon",            width: 800, height: 800  },
  { id: 4,  title: "Cell TV",               year: "2026", medium: "Acrylic on canvas", dimensions: '16" × 20"', image: "/images/celltv.jpg",           type: "page",     slug: "celltv",           width: 800, height: 1000 },
  { id: 5,  title: "Airplane",              year: "2026", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/airplane.png",         type: "page",     slug: "airplane",         width: 800, height: 1067 },
  { id: 6,  title: "Computer",              year: "2025", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/computer.jpeg",        type: "page",     slug: "computer",         width: 800, height: 800  },
  { id: 7,  title: "Breakfast in Miami",    year: "2026", medium: "Oil on canvas",     dimensions: '24" × 30"', image: "/images/breakfastinmiami.png", type: "page",     slug: "breakfastinmiami", width: 800, height: 1000 },
  // — Lightbox —
  { id: 8,  title: "Abstract Trees",        year: "2025", medium: "Acrylic on canvas", dimensions: '12" × 12"', image: "/images/trees.jpeg",            type: "lightbox",                           width: 800, height: 800  },
  { id: 9,  title: "Roses I",               year: "2026", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses.png",            type: "lightbox",                           width: 800, height: 1000 },
  { id: 10, title: "Roses II",              year: "2025", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/roses2.jpeg",          type: "lightbox",                           width: 800, height: 1000 },
  { id: 11, title: "Scene",                 year: "2025", medium: "Mixed media",       dimensions: '20" × 20"', image: "/images/scene.jpeg",           type: "lightbox",                           width: 800, height: 800  },
  { id: 12, title: "Square I",              year: "2025", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square.jpeg",          type: "lightbox",                           width: 800, height: 800  },
  { id: 13, title: "Square II",             year: "2026", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square2.jpeg",         type: "lightbox",                           width: 800, height: 800  },
  { id: 14, title: "Square III",            year: "2026", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square3.jpg",          type: "lightbox",                           width: 800, height: 800  },
  { id: 15, title: "Square IV",             year: "2026", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square4.jpeg",         type: "lightbox",                           width: 800, height: 800  },
  { id: 16, title: "Square V",              year: "2026", medium: "Acrylic on panel",  dimensions: '10" × 10"', image: "/images/square5.jpeg",         type: "lightbox",                           width: 800, height: 800  },
  { id: 17, title: "Ghost in the Woods",    year: "2025", medium: "Oil on canvas",     dimensions: '18" × 24"', image: "/images/ghostinwoods.png",     type: "lightbox",                           width: 800, height: 1067 },
  { id: 18, title: "Dark Trees",            year: "2026", medium: "Oil on canvas",     dimensions: '16" × 20"', image: "/images/darktrees.jpeg",       type: "lightbox",                           width: 800, height: 1000 },
];

export default function Paintings() {
  const [lightbox, setLightbox] = useState<Painting | null>(null);
const triggerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("light-mode", !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  if (triggerRef.current) observer.observe(triggerRef.current);
  return () => {
    observer.disconnect();
    document.body.classList.remove("light-mode");
  };
}, []);
  return (
    <>
      <style>{`
        .page-hero {
          padding: 9rem 3rem 4rem;
          border-bottom: 1px solid var(--mid);
          margin-bottom: 5rem;
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
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--muted);
        }

        /* One-column editorial grid */
       .works-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  padding: 0 3rem;
  max-width: 700px;
  margin: 0 auto;
  position: relative; /* add this */
}

        .work-item {
          cursor: crosshair;
          display: block;
          color: inherit;
          text-decoration: none;
        }

        /* Image — no cropping, full natural height */
        .work-img {
          width: 100%;
          background: var(--dark-surface);
          overflow: hidden;
          margin-bottom: 1.25rem;
        }

        .work-img img {
          width: 100%;
          height: auto;
          display: block;
          transition: opacity 0.4s ease;
        }

        .work-item:hover .work-img img {
          opacity: 0.75;
        }
/* Light mode transition */
body {
  transition: background-color 0.6s ease, color 0.6s ease;
}

body.light-mode {
  background-color: #f5f0e8;
  color: #1a1a18;
}

body.light-mode .page-title,
body.light-mode .work-caption-title {
  color: #1a1a18;
}

body.light-mode .work-caption-meta,
body.light-mode .page-count {
  color: #6b6b67;
}

body.light-mode .page-hero {
  border-bottom-color: #d4cfc7;
}

body.light-mode .work-img {
  background: #e8e0d4;
}

body.light-mode .nav {
  background: rgba(245, 240, 232, 0.92);
  border-bottom-color: #d4cfc7;
}

body.light-mode .nav-logo,
body.light-mode .nav-links a.active,
body.light-mode .nav-links a:hover {
  color: #1a1a18;
}
        /* Caption below — quiet and small */
        .work-caption {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-left: 0.1rem;
        }

        .work-caption-title {
          font-family: var(--font-serif);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--off-white);
          line-height: 1.3;
        }

        .work-caption-meta {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          line-height: 1.8;
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
          cursor: zoom-out;
          animation: lbFadeIn 0.2s ease;
        }

        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .lightbox-inner {
          max-width: min(85vw, 900px);
          max-height: 80vh;
          width: 100%;
          cursor: default;
        }

        .lightbox-inner img {
          width: 100% !important;
          height: auto !important;
          position: relative !important;
          max-height: 80vh;
          object-fit: contain;
          display: block;
        }

        .lightbox-info {
          margin-top: 1.75rem;
          text-align: center;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-style: italic;
          color: var(--off-white);
          margin-bottom: 0.3rem;
        }

        .lightbox-meta {
          font-family: var(--font-mono);
          font-size: 0.55rem;
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
          cursor: pointer;
          font-family: var(--font-mono);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .lightbox-close:hover { color: var(--off-white); }

        @media (max-width: 900px) {
          .page-hero { padding: 8rem 1.5rem 3rem; }
          .works-grid { padding: 0 1.5rem; gap: 4rem 2rem; }
          .works-grid .work-item:nth-child(5n + 3) { max-width: 80%; }
        }

        @media (max-width: 600px) {
          .works-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .works-grid .work-item:nth-child(5n + 3) { grid-column: 1; max-width: 100%; }
        }
      `}</style>

      <div className="page-hero">
        <h1 className="page-title fade-up fade-up-delay-1">WORKS</h1>
        <span className="page-count fade-up fade-up-delay-2">{paintings.length} pieces</span>
      </div>
      <div className="works-grid">
  <div ref={triggerRef} style={{ position: 'absolute', top: '140vh' }} />
  {paintings.map((p, i) => {
    const inner = (
            <>
              <div className="work-img">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={p.width}
                  height={p.height}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="work-caption">
                <p className="work-caption-title">{p.title}</p>
                <p className="work-caption-meta">
                  {p.medium}<br />
                  {p.dimensions} &nbsp;·&nbsp; {p.year}
                </p>
              </div>
            </>
          );

          return p.type === "page" ? (
            <Link
              key={p.id}
              href={`/paintings/${p.slug}`}
              className="work-item fade-up"
              style={{ animationDelay: `${0.04 * i}s`, animationFillMode: 'both', opacity: 0 }}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={p.id}
              className="work-item fade-up"
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
            <Image
              src={lightbox.image}
              alt={lightbox.title}
              width={lightbox.width}
              height={lightbox.height}
              style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
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
