export default function About() {
  return (
    <>
      <style>{`
        .about-wrap {
          padding: 9rem 3rem 6rem;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .about-image-col {
          position: sticky;
          top: 6rem;
        }

        .about-portrait {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(160deg, var(--cream) 0%, #e0d6c8 100%);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }

        .portrait-caption {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--accent-light);
          letter-spacing: 0.05em;
        }

        .about-text-col {
          padding-top: 1rem;
        }

        .about-eyebrow {
          font-family: var(--font-body);
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .about-name {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          line-height: 1;
          margin-bottom: 2.5rem;
        }

        .about-name em {
          font-style: italic;
          color: var(--accent);
          display: block;
        }

        .about-bio p {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--charcoal);
          margin-bottom: 1.5rem;
        }

        .about-contact {
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--light-gray);
        }

        .contact-label {
          font-family: var(--font-body);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mid-gray);
          margin-bottom: 0.75rem;
        }

        .contact-email {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--charcoal);
          border-bottom: 1px solid var(--light-gray);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }

        .contact-email:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        @media (max-width: 900px) {
          .about-wrap { grid-template-columns: 1fr; gap: 3rem; padding: 8rem 1.5rem 4rem; }
          .about-image-col { position: static; }
          .about-portrait { aspect-ratio: 4/3; }
        }
      `}</style>

      <div className="about-wrap">
        <div className="about-image-col fade-up fade-up-delay-1">
          {/* Replace with <Image> once you have a portrait photo */}
          <div className="about-portrait">
            <span className="portrait-caption">Chris Ramirez, Miami</span>
          </div>
        </div>

        <div className="about-text-col">
          <p className="about-eyebrow fade-up fade-up-delay-1">About the artist</p>
          <h1 className="about-name fade-up fade-up-delay-2">
            Chris<br /><em>Ramirez</em>
          </h1>

          <div className="about-bio fade-up fade-up-delay-3">
            <p>
              Chris Ramirez is a Miami-based painter whose work explores the intersection of 
              memory, light, and domestic space. Working primarily in oil on canvas and linen, 
              she builds up richly textured surfaces through layered glazes and direct mark-making.
            </p>
            <p>
              Her paintings have been shown in solo and group exhibitions throughout South Florida. 
              She draws from personal experience, transforming everyday interiors and landscapes 
              into quiet meditations on presence and time.
            </p>
            <p>
              {/* Add your fiancée's actual bio here */}
              She lives and works in Miami, Florida.
            </p>
          </div>

          <div className="about-contact fade-up fade-up-delay-4">
            <p className="contact-label">Get in touch</p>
            <a href="mailto:hello@chrisramirez.com" className="contact-email">
              hello@chrisramirez.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
