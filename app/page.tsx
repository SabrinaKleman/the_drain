import Image from "next/image";
import Link from "next/link";

const featuredWorks = [
  { id: 1, title: "You Are Here", year: "2024", medium: "Acrylic on canvas", image: "/images/celltv.jpg", size: "large" },
  { id: 2, title: "Untitled II", year: "2024", medium: "Oil on canvas", image: "/images/lemon.jpg", size: "small" },
  { id: 3, title: "Untitled III", year: "2024", medium: "Acrylic", image: "/images/scene.jpeg", size: "small" },
  { id: 4, title: "Untitled IV", year: "2023", medium: "Oil on panel", image: "/images/square.jpeg", size: "medium" },
  { id: 5, title: "Untitled V", year: "2023", medium: "Mixed media", image: "/images/square2.jpeg", size: "medium" },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hero {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 2.5rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: clamp(10rem, 28vw, 22rem);
          letter-spacing: -0.02em;
          color: transparent;
          -webkit-text-stroke: 1px var(--dark-surface);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 14vw, 11rem);
          line-height: 0.88;
          letter-spacing: 0.02em;
          color: var(--off-white);
        }

        .hero-title span {
          color: var(--red);
          display: block;
        }

        .hero-meta {
          text-align: right;
          padding-bottom: 0.5rem;
        }

        .hero-artist {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 1rem;
        }

        .hero-cta {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--off-white);
          border: 1px solid var(--mid);
          padding: 0.6rem 1.2rem;
          transition: border-color 0.2s, background 0.2s;
        }

        .hero-cta:hover {
          border-color: var(--red);
          background: var(--red);
        }

        .hero-scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--muted), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* Grid */
        .works-section {
          padding: 0 2.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--mid);
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .section-count {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: var(--mid);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 240px;
          gap: 3px;
        }

        .grid-item {
          position: relative;
          overflow: hidden;
          background: var(--dark-surface);
          cursor: crosshair;
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
          transition: transform 0.7s ease, filter 0.4s ease;
          filter: brightness(0.85) saturate(0.9);
        }

        .grid-item:hover img {
          transform: scale(1.05);
          filter: brightness(0.7) saturate(1.1);
        }

        .grid-item-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.25rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .grid-item:hover .grid-item-overlay { opacity: 1; }

        .grid-item-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          font-style: italic;
          color: var(--off-white);
          margin-bottom: 0.2rem;
        }

        .grid-item-meta {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--light);
        }

        .view-all-wrap {
          text-align: right;
          margin-top: 1.5rem;
          padding-bottom: 1rem;
        }

        @media (max-width: 900px) {
          .grid { grid-template-columns: repeat(6, 1fr); grid-auto-rows: 200px; }
          .grid-item:nth-child(1) { grid-column: 1 / 7; grid-row: 1 / 2; }
          .grid-item:nth-child(2) { grid-column: 1 / 4; grid-row: 2 / 3; }
          .grid-item:nth-child(3) { grid-column: 4 / 7; grid-row: 2 / 3; }
          .grid-item:nth-child(4) { grid-column: 1 / 4; grid-row: 3 / 4; }
          .grid-item:nth-child(5) { grid-column: 4 / 7; grid-row: 3 / 4; }
          .hero-bg-text { display: none; }
        }

        @media (max-width: 600px) {
          .hero { padding: 0 1.5rem 3rem; }
          .hero-content { flex-direction: column; align-items: flex-start; }
          .hero-meta { text-align: left; }
          .works-section { padding: 0 1.5rem; }
          .grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 160px; }
          .grid-item:nth-child(1) { grid-column: 1 / 3; }
          .grid-item:nth-child(2) { grid-column: 1 / 2; }
          .grid-item:nth-child(3) { grid-column: 2 / 3; }
          .grid-item:nth-child(4) { grid-column: 1 / 2; }
          .grid-item:nth-child(5) { grid-column: 2 / 3; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-bg-text" aria-hidden="true">DRAIN</div>

        <div className="hero-content">
          <h1 className="hero-title fade-up fade-up-delay-1">
            THE<span>DRAIN</span>
          </h1>
          <div className="hero-meta fade-up fade-up-delay-3">
            <p className="hero-artist">Works by Chris Giusto</p>
            <Link href="/paintings" className="hero-cta">View works →</Link>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line" />
        </div>
      </section>

      <div style={{ padding: '5rem 0 3rem' }}>
        <div className="works-section">
          <div className="section-header">
            <span className="section-label">Selected works</span>
            <span className="section-count">01 — 05</span>
          </div>

          <div className="grid">
            {featuredWorks.map((work) => (
              <div key={work.id} className="grid-item">
                <Image src={work.image} alt={work.title} fill style={{ objectFit: 'cover' }} />
                <div className="grid-item-overlay">
                  <p className="grid-item-title">{work.title}</p>
                  <p className="grid-item-meta">{work.medium} — {work.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-wrap">
            <Link href="/paintings" className="hero-cta">All works →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
