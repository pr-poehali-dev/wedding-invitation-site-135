import { useEffect, useRef, useState } from "react";

const palette = [
  { hex: "#ffdae9", name: "Blush Pink", label: "Основной акцент" },
  { hex: "#d0e8d5", name: "Eucalyptus", label: "Природный оттенок" },
  { hex: "#fff8f2", name: "Cream", label: "Базовый нейтральный", border: true },
  { hex: "#b76e79", name: "Rose Gold", label: "Акцентный металлик" },
];

const DressCode = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dresscode" className="section dresscode-section" ref={ref} aria-label="Дресс-код и вдохновение">
      <div className={`section-inner ${visible ? "section--visible" : ""}`}>
        <p className="section-eyebrow">дресс-код</p>
        <h2 className="section-title">Вдохновение дня</h2>
        <div className="section-title-line" aria-hidden="true" />

        <p className="dresscode-intro">
          Мы создаём атмосферу природной элегантности — мягкие пастельные тона,
          лёгкие ткани и живые цветы. Позвольте себе стать частью этой картины.
        </p>

        <div className="palette-row" role="list" aria-label="Цветовая палитра дня">
          {palette.map((color, i) => (
            <div
              className="palette-item"
              key={color.hex}
              role="listitem"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="palette-circle"
                style={{
                  backgroundColor: color.hex,
                  boxShadow: color.border ? "inset 0 0 0 1px #e0d9d3" : "none",
                }}
                aria-hidden="true"
              />
              <p className="palette-hex">{color.hex}</p>
              <p className="palette-label">{color.label}</p>
            </div>
          ))}
        </div>

        <div className="dresscode-text-cards">
          <div className="dresscode-text-card" style={{ backgroundColor: "#ffdae9" }}>
            <p className="dresscode-text-card__eyebrow">для дам</p>
            <h3 className="dresscode-text-card__title">Пастельные тона</h3>
            <ul className="dresscode-text-card__list">
              <li>Нежно-розовый и пудровый</li>
              <li>Лавандовый и сиреневый</li>
              <li>Кремовый и персиковый</li>
              <li>Пудровый голубой и мятный</li>
              <li>Шалфей и фисташковый</li>
            </ul>
            <p className="dresscode-text-card__hint">
              Лёгкие ткани: шифон, шёлк, органза.<br />Туфли на каблуке или изящные балетки.
            </p>
          </div>

          <div className="dresscode-text-card" style={{ backgroundColor: "#d0e8d5" }}>
            <p className="dresscode-text-card__eyebrow">для джентльменов</p>
            <h3 className="dresscode-text-card__title">Светлые тона</h3>
            <ul className="dresscode-text-card__list">
              <li>Бежевый и молочный костюм</li>
              <li>Светло-серый и песочный</li>
              <li>Рубашки пастельных оттенков</li>
              <li>Галстук или платок в тонах эвкалипта</li>
              <li>Лаконичные аксессуары</li>
            </ul>
            <p className="dresscode-text-card__hint">
              Льняные или шерстяные костюмы.<br />Лёгкая обувь светлых оттенков.
            </p>
          </div>
        </div>

        <div className="dresscode-note" aria-live="polite">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#b76e79" strokeWidth="1"/>
            <path d="M8 7v4M8 5.5v.5" stroke="#b76e79" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <span>Просим избегать белого и чёрного цвета в одежде</span>
        </div>
      </div>
    </section>
  );
};

export default DressCode;