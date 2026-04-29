"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type PaintingDetailProps = {
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  statement: string;
};

export default function PaintingDetail({ title, year, medium, dimensions, image, statement }: PaintingDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const subject = encodeURIComponent(`Inquiry: ${title} (${year})`);
  const body = encodeURIComponent(`Hi Chris,\n\nI'm interested in learning more about "${title}" (${medium}, ${dimensions}, ${year}).\n\nPlease let me know if it's available.\n\nThank you`);

  return (
    <>
      <style>{`
body { background-color: #f5f0e8; color: #1a1a18; }
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
          color: #6b6b64;
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
          background: #e8e0d4;
          cursor: zoom-in;
        }

        .detail-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.8s ease, filter 0.4s ease;
          filter: brightness(0.9);
        }

        .detail-img-wrap:hover img {
          transform: scale(1.02);
          filter: brightness(0.75);
        }

        .detail-img-hint {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: #f5f0e8;
          color: #6b6b64;
          padding: 0.2rem 0.5rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .detail-img-wrap:hover .detail-img-hint { opacity: 1; }

        .detail-text-col { padding-top: 0.5rem; }

        .detail-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: 0.04em;
          color: #1a1a18;
          line-height: 1;
          margin-bottom: 2rem;
        }

        .detail-meta-block {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #d4cfc7;
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
          color: #3a3a36;
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
          color: #3a3a36;
          margin-bottom: 3.5rem;
        }

        .inquire-btn {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f5f0e8;
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
          border-top: 1px solid #d4cfc7;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .detail-nav-link {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b6b64;
          transition: color 0.2s;
        }

        .detail-nav-link:hover { color: #1a1a18; }

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
          max-height: 82vh;
          width: 100%;
          cursor: default;
        }

        .lightbox-inner img {
          width: 100% !important;
          height: auto !important;
          position: relative !important;
          max-height: 82vh;
          object-fit: contain;
          display: block;
        }

        .lightbox-info {
          margin-top: 1.5rem;
          text-align: center;
        }

        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          color: #1a1a18;
          margin-bottom: 0.3rem;
        }

        .lightbox-meta {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b6b64;
        }

        .lightbox-close {
          position: fixed;
          top: 1.5rem;
          right: 2rem;
          background: none;
          border: none;
          color: #6b6b64;
          font-size: 0.7rem;
          cursor: pointer;
          font-family: var(--font-mono);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .lightbox-close:hover { color: #1a1a18; }


        @media (max-width: 900px) {
          .detail-wrap { padding: 8rem 1.5rem 4rem; }
          .detail-grid { grid-template-columns: 1fr; gap: 3rem; }
          .detail-image-col { position: static; }
        }
      `}</style>

      <div className="detail-wrap">
        <Link href="/paintings" className="detail-back fade-up fade-up-delay-1">← All works</Link>

        <div className="detail-grid">
          <div className="detail-image-col fade-up fade-up-delay-1">
            <div className="detail-img-wrap" onClick={() => setLightboxOpen(true)}>
              <Image
                src={image}
                alt={title}
                width={1200}
                height={1600}
                style={{ width: '100%', height: 'auto' }}
              />
              <span className="detail-img-hint">Expand ↗</span>
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

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>✕ close</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image
              src={image}
              alt={title}
              width={1200}
              height={1600}
              style={{ width: '100%', height: 'auto', maxHeight: '82vh', objectFit: 'contain' }}
            />
          </div>
          <div className="lightbox-info">
            <p className="lightbox-title">{title}</p>
            <p className="lightbox-meta">{medium} &nbsp;·&nbsp; {dimensions} &nbsp;·&nbsp; {year}</p>
          </div>
        </div>
      )}
    </>
  );
}
