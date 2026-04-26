export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid var(--light-gray);
          padding: 2.5rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 6rem;
        }

        .footer-name {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-style: italic;
          color: var(--mid-gray);
          letter-spacing: 0.05em;
        }

        .footer-copy {
          font-family: var(--font-body);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--light-gray);
        }

        @media (max-width: 600px) {
          .footer {
            flex-direction: column;
            gap: 0.75rem;
            padding: 2rem 1.5rem;
            text-align: center;
          }
        }
      `}</style>
      <footer className="footer">
        <span className="footer-name">Chris Ramirez</span>
        <span className="footer-copy">© {new Date().getFullYear()} — All rights reserved</span>
      </footer>
    </>
  );
}
