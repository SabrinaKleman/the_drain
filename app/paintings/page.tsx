// Add your actual paintings to this array. 
// Images go in /public/images/ and are referenced as "/images/filename.jpg"
const paintings = [
  { id: 1, title: "Untitled No. 1", year: "2024", medium: "Oil on canvas", dimensions: '24" × 30"', image: "/images/work-1.jpg" },
  { id: 2, title: "Study in Ochre", year: "2024", medium: "Acrylic on linen", dimensions: '18" × 24"', image: "/images/work-2.jpg" },
  { id: 3, title: "Interior Light", year: "2023", medium: "Oil on canvas", dimensions: '36" × 48"', image: "/images/work-3.jpg" },
  { id: 4, title: "Still Life with Drapery", year: "2023", medium: "Oil on panel", dimensions: '16" × 20"', image: "/images/work-4.jpg" },
  { id: 5, title: "Composition V", year: "2023", medium: "Mixed media", dimensions: '20" × 20"', image: "/images/work-5.jpg" },
  { id: 6, title: "Evening Study", year: "2022", medium: "Oil on canvas", dimensions: '24" × 36"', image: "/images/work-6.jpg" },
];

export default function Paintings() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 9rem 3rem 4rem;
          border-bottom: 1px solid var(--light-gray);
          margin-bottom: 4rem;
        }

        .page-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          color: var(--charcoal);
        }

        .page-title em {
          font-style: italic;
          color: var(--accent);
        }

        .painting-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 3rem 2rem;
          padding: 0 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .painting-card {
          cursor: pointer;
        }

        .painting-card-img {
          width: 100%;
          aspect-ratio: 4/5;
          background: var(--cream);
          overflow: hidden;
          margin-bottom: 1rem;
          position: relative;
        }

        .painting-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .painting-card:hover .painting-card-img img {
          transform: scale(1.03);
        }

        .placeholder-tall {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, var(--cream) 0%, #e8e0d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-tall span {
          font-family: var(--font-display);
          font-style: italic;
          color: var(--accent-light);
          font-size: 0.9rem;
        }

        .painting-card-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--charcoal);
          margin-bottom: 0.25rem;
        }

        .painting-card-meta {
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--mid-gray);
        }

        @media (max-width: 768px) {
          .page-hero { padding: 8rem 1.5rem 3rem; }
          .painting-grid { padding: 0 1.5rem; gap: 2rem 1rem; }
          .painting-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .painting-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-hero">
        <h1 className="page-title fade-up fade-up-delay-1">
          <em>Paintings</em>
        </h1>
      </div>

      <div className="painting-grid">
        {paintings.map((p, i) => (
          <div key={p.id} className="painting-card fade-up" style={{ animationDelay: `${0.05 * i}s`, animationFillMode: 'both', opacity: 0 }}>
            <div className="painting-card-img">
              {/* Once you have images: <Image src={p.image} alt={p.title} fill style={{objectFit:'cover'}} /> */}
              <div className="placeholder-tall"><span>{p.title}</span></div>
            </div>
            <p className="painting-card-title">{p.title}</p>
            <p className="painting-card-meta">{p.medium} &nbsp;·&nbsp; {p.dimensions} &nbsp;·&nbsp; {p.year}</p>
          </div>
        ))}
      </div>
    </>
  );
}
