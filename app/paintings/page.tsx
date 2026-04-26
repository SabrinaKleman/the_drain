import Image from "next/image";

const paintings = [
  { id: 1, title: "You Are Here", year: "2024", medium: "Acrylic on canvas", dimensions: '12" × 12"', image: "/images/celltv.jpg" },
  { id: 2, title: "Untitled II", year: "2024", medium: "Oil on canvas", dimensions: '18" × 24"', image: "/images/lemon.jpg" },
  { id: 3, title: "Untitled III", year: "2024", medium: "Acrylic", dimensions: '16" × 20"', image: "/images/scene.jpeg" },
  { id: 4, title: "Untitled IV", year: "2023", medium: "Oil on panel", dimensions: '10" × 10"', image: "/images/square.jpeg" },
  { id: 5, title: "Untitled V", year: "2023", medium: "Mixed media", dimensions: '10" × 10"', image: "/images/square2.jpeg" },
];

export default function Paintings() {
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
        }

        .painting-card-img {
          width: 100%;
          aspect-ratio: 4/5;
          background: var(--dark-surface);
          overflow: hidden;
          position: relative;
        }

        .painting-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: brightness(0.85) saturate(0.9);
        }

        .painting-card:hover .painting-card-img img {
          transform: scale(1.04);
          filter: brightness(0.7) saturate(1.1);
        }

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

        @media (max-width: 768px) {
          .page-hero { padding: 8rem 1.5rem 2.5rem; }
          .painting-grid { padding: 0 1.5rem; grid-template-columns: repeat(2, 1fr); }
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
        {paintings.map((p, i) => (
          <div
            key={p.id}
            className="painting-card fade-up"
            style={{ animationDelay: `${0.06 * i}s`, animationFillMode: 'both', opacity: 0 }}
          >
            <div className="painting-card-img">
              <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="painting-card-info">
              <p className="painting-card-title">{p.title}</p>
              <p className="painting-card-meta">{p.medium} &nbsp;·&nbsp; {p.dimensions} &nbsp;·&nbsp; {p.year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
