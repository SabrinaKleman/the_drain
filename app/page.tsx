import Link from "next/link";

// Replace these with real image paths once you add artwork to /public/images/
const featuredWorks = [
  {
    id: 1,
    title: "Untitled No. 1",
    year: "2024",
    medium: "Oil on canvas",
    image: "/images/work-1.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Study in Ochre",
    year: "2024",
    medium: "Acrylic on linen",
    image: "/images/work-2.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Interior Light",
    year: "2023",
    medium: "Oil on canvas",
    image: "/images/work-3.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Still Life with Drapery",
    year: "2023",
    medium: "Oil on panel",
    image: "/images/work-4.jpg",
    size: "medium",
  },
  {
    id: 5,
    title: "Composition V",
    year: "2023",
    medium: "Mixed media",
    image: "/images/work-5.jpg",
    size: "medium",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hero {
          padding-top: 10rem;
          padding-bottom: 5rem;
          text-align: center;
          position: relative;
        }

        .hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(3.5rem, 10vw, 8rem);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.01em;
          color: var(--charcoal);
          margin-bottom: 2rem;
        }

        .hero-name em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-tagline {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 300;
          font-style: italic;
          color: var(--mid-gray);
          letter-spacing: 0.03em;
          margin-bottom: 3rem;
        }

        .hero-cta {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--charcoal);
          border-bottom: 1px solid var(--charcoal);
          padding-bottom: 3px;
          transition: color 0.2s, border-color 0.2s;
        }

        .hero-cta:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        .divider {
          width: 40px;
          height: 1px;
          background: var(--light-gray);
          margin: 5rem auto;
        }

        .section-label {
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 3rem;
        }

        /* Mosaic grid */
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 220px;
          gap: 1rem;
          padding: 0 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          background: var(--cream);
          cursor: pointer;
        }

        .grid-item:nth-child(1) { grid-column: 1 / 7; grid-row: 1 / 3; }
        .grid-item:nth-child(2) { grid-column: 7 / 10; grid-row: 1 / 2; }
        .grid-item:nth-child(3) { grid-column: 10 / 13; grid-row: 1 / 2; }
        .grid-item:nth-child(4) { grid-column: 7 / 10; grid-row: 2 / 3; }
        .grid-item:nth-child(5) { grid-column: 10 / 13; grid-row: 2 / 3; }

        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .grid-item:hover img {
          transform: scale(1.04);
        }

        .grid-item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(26, 26, 24, 0);
          transition: background 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
        }

        .grid-item:hover .grid-item-overlay {
          background: rgba(26, 26, 24, 0.55);
        }

        .grid-item-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-style: italic;
          color: white;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .grid-item-meta {
          font-family: var(--font-body);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
          margin-top: 0.25rem;
        }

        .grid-item:hover .grid-item-title,
        .grid-item:hover .grid-item-meta {
          opacity: 1;
          transform: translateY(0);
        }

        /* Placeholder when no image */
        .placeholder-img {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--cream) 0%, var(--light-gray) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-img span {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-style: italic;
          color: var(--accent-light);
          letter-spacing: 0.1em;
        }

        .view-all-wrap {
          text-align: center;
          margin-top: 3.5rem;
          padding-bottom: 2rem;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(6, 1fr);
            padding: 0 1.5rem;
          }
          .grid-item:nth-child(1) { grid-column: 1 / 7; grid-row: 1 / 2; }
          .grid-item:nth-child(2) { grid-column: 1 / 4; grid-row: 2 / 3; }
          .grid-item:nth-child(3) { grid-column: 4 / 7; grid-row: 2 / 3; }
          .grid-item:nth-child(4) { grid-column: 1 / 4; grid-row: 3 / 4; }
          .grid-item:nth-child(5) { grid-column: 4 / 7; grid-row: 3 / 4; }
        }

        @media (max-width: 600px) {
          .hero { padding-top: 8rem; }
          .grid { grid-template-columns: 1fr 1fr; }
          .grid-item:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 2; }
          .grid-item:nth-child(2) { grid-column: 1 / 2; grid-row: 2 / 3; }
          .grid-item:nth-child(3) { grid-column: 2 / 3; grid-row: 2 / 3; }
          .grid-item:nth-child(4) { grid-column: 1 / 2; grid-row: 3 / 4; }
          .grid-item:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 4; }
        }
      `}</style>

      <section className="hero">
        <p className="hero-eyebrow fade-up fade-up-delay-1">Original works</p>
        <h1 className="hero-name fade-up fade-up-delay-2">
          Chris<br /><em>Ramirez</em>
        </h1>
        <p className="hero-tagline fade-up fade-up-delay-3">Painting the spaces between memory and light</p>
        <Link href="/paintings" className="hero-cta fade-up fade-up-delay-4">
          View all works
        </Link>
      </section>

      <div className="divider" />

      <p className="section-label">Selected works</p>

      <div className="grid">
        {featuredWorks.map((work) => (
          <div key={work.id} className="grid-item">
            {/* Replace with <Image> from next/image once you have real photos */}
            <div className="placeholder-img">
              <span>{work.title}</span>
            </div>
            <div className="grid-item-overlay">
              <p className="grid-item-title">{work.title}</p>
              <p className="grid-item-meta">{work.medium} — {work.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrap">
        <Link href="/paintings" className="hero-cta">See all paintings →</Link>
      </div>
    </>
  );
}
