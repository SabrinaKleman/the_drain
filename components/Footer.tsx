export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid var(--mid);
          padding: 2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8rem;
        }

        .footer-name {
          font-family: var(--font-display);
          font-size: 1rem;
          letter-spacing: 0.1em;
          color: var(--muted);
        }

        .footer-name span { color: var(--red); }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-ig {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.2s;
        }

        .footer-ig:hover { color: var(--off-white); }

        .footer-copy {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: var(--mid);
        }

        @media (max-width: 600px) {
          .footer { flex-direction: column; gap: 1rem; padding: 2rem 1.5rem; text-align: center; }
          .footer-right { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
      <footer className="footer">
        <span className="footer-name">THE <span>DRAIN</span></span>
        <div className="footer-right">
          <a href="https://www.instagram.com/the_drain/" target="_blank" rel="noopener noreferrer" className="footer-ig">
            ↗ Instagram
          </a>
          <span className="footer-copy">© {new Date().getFullYear()} Chris Giusto</span>
        </div>
      </footer>
    </>
  );
}
