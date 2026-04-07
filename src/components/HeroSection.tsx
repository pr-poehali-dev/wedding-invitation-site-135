import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToDetails = () => {
    document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero-section"
      aria-label="Главный экран свадебного приглашения"
    >
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className={`hero-content ${visible ? "hero-content--visible" : ""}`}>
        <p className="hero-eyebrow">приглашение на свадьбу</p>

        <div className="hero-divider-line" aria-hidden="true" />

        <h1 className="hero-names">Матвей и Анастасия</h1>

        <p className="hero-subtitle">
          Приглашаем разделить с нами день,<br />
          наполненный любовью и природой
        </p>

        <div className="hero-date-badge">
          <span>8 августа 2025</span>
        </div>

        <div className="hero-botanical" aria-hidden="true">
          <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50 Q30 20 60 30 Q90 40 110 10" stroke="#b76e79" strokeWidth="0.8" fill="none" opacity="0.5"/>
            <ellipse cx="25" cy="35" rx="8" ry="4" fill="#d0e8d5" opacity="0.6" transform="rotate(-20 25 35)"/>
            <ellipse cx="40" cy="28" rx="7" ry="3.5" fill="#d0e8d5" opacity="0.5" transform="rotate(-35 40 28)"/>
            <ellipse cx="55" cy="33" rx="9" ry="4" fill="#d0e8d5" opacity="0.6" transform="rotate(-10 55 33)"/>
            <ellipse cx="72" cy="27" rx="8" ry="3.5" fill="#d0e8d5" opacity="0.5" transform="rotate(-25 72 27)"/>
            <ellipse cx="88" cy="22" rx="7" ry="3" fill="#d0e8d5" opacity="0.4" transform="rotate(-40 88 22)"/>
            <circle cx="60" cy="48" r="6" fill="none" stroke="#ffdae9" strokeWidth="0.8" opacity="0.7"/>
            <circle cx="60" cy="48" r="3" fill="#ffdae9" opacity="0.5"/>
            <circle cx="75" cy="42" r="5" fill="none" stroke="#ffdae9" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="75" cy="42" r="2.5" fill="#ffdae9" opacity="0.4"/>
          </svg>
        </div>
      </div>

      <button
        className="hero-scroll-btn"
        onClick={scrollToDetails}
        aria-label="Прокрутить вниз к деталям события"
      >
        <svg className="hero-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="#b76e79" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;