import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const events = [
  {
    time: "15:30",
    title: "Сбор гостей",
    description: "Встречайте близких в саду ресторана. Лёгкие закуски, живая музыка и атмосфера ожидания чуда.",
    icon: "Users",
    color: "#ffdae9",
    accent: "#b76e79",
  },
  {
    time: "16:00",
    title: "Церемония",
    description: "Торжественная выездная церемония в цветущем саду. Обмен клятвами и кольцами под открытым небом.",
    icon: "Heart",
    color: "#d0e8d5",
    accent: "#5a8a6a",
  },
  {
    time: "16:45",
    title: "Поздравления",
    description: "Время для объятий, слёз радости и тёплых слов от самых близких людей.",
    icon: "MessageCircle",
    color: "#fff8f2",
    accent: "#b76e79",
  },
  {
    time: "17:15",
    title: "Фотосессия",
    description: "Прогулка по саду с фотографом. Золотой час, эвкалипт и розы создадут идеальные кадры на память.",
    icon: "Camera",
    color: "#ffdae9",
    accent: "#b76e79",
  },
  {
    time: "18:00",
    title: "Торжественный ужин",
    description: "Открытие банкетного зала. Авторское меню от шеф-повара, сезонные продукты и природные ароматы.",
    icon: "UtensilsCrossed",
    color: "#d0e8d5",
    accent: "#5a8a6a",
  },
  {
    time: "19:30",
    title: "Тосты и речи",
    description: "Слово родителям и дорогим гостям. Шампанское, истории и самые тёплые пожелания молодожёнам.",
    icon: "Wine",
    color: "#fff8f2",
    accent: "#b76e79",
  },
  {
    time: "20:30",
    title: "Торт и десерты",
    description: "Разрезание свадебного торта. Десертный стол с авторскими угощениями и цветочными мотивами.",
    icon: "Cake",
    color: "#ffdae9",
    accent: "#b76e79",
  },
  {
    time: "21:00",
    title: "Танцы и вечеринка",
    description: "Первый танец молодожёнов, а затем — танцпол открыт для всех! Живая музыка и диджей до рассвета.",
    icon: "Music",
    color: "#d0e8d5",
    accent: "#5a8a6a",
  },
  {
    time: "23:00",
    title: "Финал вечера",
    description: "Красивое завершение — запуск летящих фонариков в ночное небо и прощальный фейерверк.",
    icon: "Sparkles",
    color: "#fff8f2",
    accent: "#b76e79",
  },
];

const TimelineItem = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`timeline-item ${isLeft ? "timeline-item--left" : "timeline-item--right"} ${visible ? "timeline-item--visible" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 0.08, 0.4)}s` }}
    >
      <div className="timeline-card" style={{ backgroundColor: event.color }}>
        <div className="timeline-card__icon" style={{ color: event.accent }}>
          <Icon name={event.icon as "Users"} size={20} />
        </div>
        <p className="timeline-card__title">{event.title}</p>
        <p className="timeline-card__desc">{event.description}</p>
      </div>

      <div className="timeline-dot" style={{ borderColor: event.accent, backgroundColor: event.color }}>
        <div className="timeline-dot__inner" style={{ backgroundColor: event.accent }} />
      </div>

      <div className="timeline-time">
        <span style={{ color: event.accent }}>{event.time}</span>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="schedule-page">
      <Link to="/" className="schedule-back" aria-label="Вернуться на главную">
        <Icon name="ArrowLeft" size={16} />
        <span>На главную</span>
      </Link>

      <header className={`schedule-header ${headerVisible ? "schedule-header--visible" : ""}`}>
        <p className="section-eyebrow">15 августа 2025</p>
        <h1 className="schedule-title">План дня</h1>
        <div className="section-title-line" aria-hidden="true" />
        <p className="schedule-subtitle">
          Каждый момент продуман с любовью — от первого взгляда<br />до последнего танца под звёздами
        </p>
      </header>

      <div className="timeline" role="list" aria-label="Расписание свадебного дня">
        <div className="timeline-line" aria-hidden="true" />
        {events.map((event, i) => (
          <TimelineItem key={event.time} event={event} index={i} />
        ))}
      </div>

      <div className="schedule-footer-note">
        <div className="schedule-footer-note__inner">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="#b76e79" strokeWidth="1"/>
            <path d="M10 9v5M10 6.5v.5" stroke="#b76e79" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p>Программа может незначительно меняться. Следите за обновлениями.</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
