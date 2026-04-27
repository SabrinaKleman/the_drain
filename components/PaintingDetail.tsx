import Image from "next/image";
import Link from "next/link";

type PaintingDetailProps = {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  statement: string;
};

export default function PaintingDetail({ title, year, medium, dimensions, image, statement }: PaintingDetailProps) {
  const subject = encodeURIComponent(`Inquiry: ${title} (${year})`);
  const body = encodeURIComponent(`Hi Chris,\n\nI'm interested in learning more about "${title}" (${medium}, ${dimensions}, ${year}).\n\nPlease let me know if it's available.\n\nThank you`);

  return (
    <>
      <style>{`
        .detail-wrap {
          padding: 8rem 2.5rem 6rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .detail-back {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4rem;
          transition: color 0.2s;
        }

        .detail-back:hover { color: var(--off-white); }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .detail-image-col {
          position: sticky;
          top: 6rem;
        }

        .detail-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          background: var(--dark-surface);
          overflow: hidden;
        }

        .detail-img-wrap img {
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .detail-img-wrap:hover img {
          transform: scale(1.03);
        }

        .detail-text-col {
          padding-top: 0.5rem;
        }

        .detail-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: 0.04em;
          color: var(--off-white);
          line-height: 1;
          margin-bottom: 2rem;
        }

        .detail-meta-block {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--mid);
        }

        .detail-meta-row {
          display: flex;
          gap: 1.5rem;
          align-items: baseline;
        }

        .detail-meta-label {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          width: 80px;
          flex-shrink: 0;
        }

        .detail-meta-value {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          color: var(--light);
        }

        .detail-statement-label {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 1.25rem;
        }

        .detail-statement {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.85;
          color: var(--light);
          margin-bottom: 3.5rem;
        }

        .inquire-btn {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--off-white);
          padding: 0.9rem 2rem;
          transition: background 0.2s, color 0.2s;
          cursor: crosshair;
        }

        .inquire-btn:hover {
          background: var(--red);
          color: var(--off-white);
        }

        .detail-nav {
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--mid);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-nav-link {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.2s;
        }

        .detail-nav-link:hover { color: var(--off-white); }

        @media (max-width: 900px) {
          .detail-wrap { padding: 8rem 1.5rem 4rem; }
          .detail-grid { grid-template-columns: 1fr; gap: 3rem; }
          .detail-image-col { position: static; }
          .detail-img-wrap { aspect-ratio: 3/2; }
        }
      `}</style>

      <div className="detail-wrap">
        <Link href="/paintings" className="detail-back fade-up fade-up-delay-1">← All works</Link>

        <div className="detail-grid">
          <div className="detail-image-col fade-up fade-up-delay-1">
            <div className="detail-img-wrap">
              <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div className="detail-text-col">
            <h1 className="detail-title fade-up fade-up-delay-2">{title.toUpperCase()}</h1>

            <div className="detail-meta-block fade-up fade-up-delay-2">
              <div className="detail-meta-row">
                <span className="detail-meta-label">Year</span>
                <span className="detail-meta-value">{year}</span>
              </div>
              <div className="detail-meta-row">
                <span className="detail-meta-label">Medium</span>
                <span className="detail-meta-value">{medium}</span>
              </div>
              <div className="detail-meta-row">
                <span className="detail-meta-label">Size</span>
                <span className="detail-meta-value">{dimensions}</span>
              </div>
            </div>

            <div className="fade-up fade-up-delay-3">
              <p className="detail-statement-label">Statement</p>
              <p className="detail-statement">{statement}</p>
            </div>

            <div className="fade-up fade-up-delay-4">
              <a
                href={`mailto:cgiusto1@gmail.com?subject=${subject}&body=${body}`}
                className="inquire-btn"
              >
                Inquire about this work →
              </a>
            </div>

            <div className="detail-nav fade-up fade-up-delay-4">
              <Link href="/paintings" className="detail-nav-link">← Back to works</Link>
              <Link href="/about" className="detail-nav-link">About the artist →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
