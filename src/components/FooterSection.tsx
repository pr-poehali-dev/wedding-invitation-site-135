const FooterSection = () => {
  return (
    <footer className="site-footer" aria-label="Подвал сайта">
      <div className="footer-botanical" aria-hidden="true">
        <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q50 10 100 20 Q150 30 200 10" stroke="#d0e8d5" strokeWidth="0.8" fill="none"/>
          <ellipse cx="30" cy="22" rx="10" ry="4.5" fill="#d0e8d5" opacity="0.5" transform="rotate(-15 30 22)"/>
          <ellipse cx="55" cy="16" rx="9" ry="4" fill="#d0e8d5" opacity="0.4" transform="rotate(-25 55 16)"/>
          <ellipse cx="80" cy="21" rx="11" ry="4.5" fill="#d0e8d5" opacity="0.5" transform="rotate(-10 80 21)"/>
          <ellipse cx="120" cy="23" rx="10" ry="4" fill="#d0e8d5" opacity="0.4" transform="rotate(-20 120 23)"/>
          <ellipse cx="150" cy="17" rx="9" ry="3.5" fill="#d0e8d5" opacity="0.3" transform="rotate(-30 150 17)"/>
          <ellipse cx="175" cy="14" rx="8" ry="3.5" fill="#d0e8d5" opacity="0.4" transform="rotate(-40 175 14)"/>
        </svg>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-inner">
        <p className="footer-love">С любовью, Анна и Максим</p>

        <div className="footer-socials" role="list" aria-label="Социальные сети">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
            role="listitem"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Telegram"
            role="listitem"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 5L2 12.5l7 1M21 5l-5.5 15L9.5 13.5M21 5L9.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Telegram</span>
          </a>
        </div>

        <p className="footer-copy">15 · 08 · 2025</p>
      </div>
    </footer>
  );
};

export default FooterSection;
