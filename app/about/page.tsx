export default function About() {
  return (
    <>
      <style>{`
        .about-wrap {
          padding: 9rem 2.5rem 6rem;
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
          background: var(--dark-surface);
          position: relative;
          overflow: hidden;
        }

        .portrait-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }

        .portrait-caption {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .about-text-col { padding-top: 0.5rem; }

        .about-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 1.5rem;
        }

        .about-name {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: 0.04em;
          line-height: 1;
          color: var(--off-white);
          margin-bottom: 3rem;
        }

        .about-name span {
          display: block;
          color: var(--red);
        }

        .about-bio p {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 300;
          line-height: 1.9;
          color: var(--light);
          margin-bottom: 1.5rem;
          letter-spacing: 0.03em;
        }

        .about-contact {
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--mid);
        }

        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.75rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-link {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--off-white);
          letter-spacing: 0.05em;
          transition: color 0.2s;
          border-bottom: 1px solid var(--mid);
          padding-bottom: 2px;
          display: inline-block;
        }

        .contact-link:hover { color: var(--red); border-color: var(--red); }

        @media (max-width: 900px) {
          .about-wrap { grid-template-columns: 1fr; gap: 3rem; padding: 8rem 1.5rem 4rem; }
          .about-image-col { position: static; }
          .about-portrait { aspect-ratio: 4/3; }
        }
      `}</style>

      <div className="about-wrap">
        <div className="about-image-col fade-up fade-up-delay-1">
          {/* Replace with <Image> once you have a photo */}
          <div className="about-portrait">
            <div className="portrait-placeholder">
              <span className="portrait-caption">Chris Giusto — Miami</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <p className="about-eyebrow fade-up fade-up-delay-1">About</p>
          <h1 className="about-name fade-up fade-up-delay-2">
            CHRIS<span>GIUSTO</span>
          </h1>

          <div className="about-bio fade-up fade-up-delay-3">
            <p>
              Chris Giusto is a Miami-based artist working under the name The Drain.
              His paintings combine dark humor with deadpan observation — everyday objects
              rendered with a directness that feels both familiar and deeply strange.
            </p>
            <p>
              {/* Add Chris's real bio here */}
              He lives and works in Miami, Florida.
            </p>
          </div>

          <div className="about-contact fade-up fade-up-delay-4">
            <p className="contact-label">Find the drain</p>
            <div className="contact-links">
              <a href="https://www.instagram.com/the_drain/" target="_blank" rel="noopener noreferrer" className="contact-link">
                ↗ @the_drain on Instagram
              </a>
              <a href="mailto:hello@thedrain.art" className="contact-link">
                hello@thedrain.art
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
