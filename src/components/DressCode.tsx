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

        <div className="dresscode-cards">
          <div className="dresscode-card dresscode-card--ladies">
            <div className="dresscode-card__img-wrap">
              <img
                src="https://cdn.poehali.dev/projects/a691544a-64b0-4667-9ba2-63786d409ac1/files/9d3234fd-9290-414b-a8fa-19e99c91b6ed.jpg"
                alt="Образ для дам — пастельное платье"
                loading="lazy"
              />
              <div className="dresscode-card__badge">для дам</div>
            </div>
            <div className="dresscode-card__text">
              <h3>Для дам</h3>
              <p>
                Платья в пастельных тонах — нежно‑розовый, пудровый голубой, кремовый, лавандовый.
                Лёгкие ткани: шифон, шёлк, органза. Открытые туфли на каблуке или изящные балетки.
              </p>
            </div>
          </div>

          <div className="dresscode-card dresscode-card--gents">
            <div className="dresscode-card__img-wrap">
              <img
                src="https://cdn.poehali.dev/projects/a691544a-64b0-4667-9ba2-63786d409ac1/files/25ae511d-faac-4f9a-b1a5-cb3d58d16db9.jpg"
                alt="Образ для джентльменов — светлый костюм"
                loading="lazy"
              />
              <div className="dresscode-card__badge">для джентльменов</div>
            </div>
            <div className="dresscode-card__text">
              <h3>Для джентльменов</h3>
              <p>
                Светлые костюмы — бежевый, молочный, светло-серый. Рубашки пастельных оттенков,
                галстуки или платки в тонах эвкалипта. Лаконичные аксессуары.
              </p>
            </div>
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
