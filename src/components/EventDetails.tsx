import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const cards = [
  {
    icon: "Calendar",
    label: "Дата",
    value: "15 августа 2025",
    sub: "суббота",
    color: "#ffdae9",
  },
  {
    icon: "Clock",
    label: "Время",
    value: "16:00",
    sub: "начало церемонии",
    color: "#d0e8d5",
  },
  {
    icon: "MapPin",
    label: "Место",
    value: "Ресторан «Эвкалипт»",
    sub: "ул. Парковая, 15",
    color: "#fff8f2",
  },
];

const EventDetails = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="details" className="section details-section" ref={ref} aria-label="Детали события">
      <div className={`section-inner ${visible ? "section--visible" : ""}`}>
        <p className="section-eyebrow">когда и где</p>
        <h2 className="section-title">День свадьбы</h2>
        <div className="section-title-line" aria-hidden="true" />

        <div className="details-cards">
          {cards.map((card, i) => (
            <div
              className="detail-card"
              key={card.label}
              style={{
                backgroundColor: card.color,
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="detail-card__icon">
                <Icon name={card.icon as "Calendar" | "Clock" | "MapPin"} size={22} />
              </div>
              <p className="detail-card__label">{card.label}</p>
              <p className="detail-card__value">{card.value}</p>
              <p className="detail-card__sub">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="map-wrapper">
          <div className="map-label">
            <Icon name="Navigation" size={14} />
            <span>Как добраться</span>
          </div>
          <div className="map-container">
            <iframe
              title="Карта — Ресторан Эвкалипт"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.6!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Карта с расположением ресторана"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
