import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Phase = "welcome" | "ceremony" | "main";

const events: { time: string; title: string; description: string; icon: string; color: string; accent: string; phase: Phase }[] = [
  // ── ВЕЛКОМ ──────────────────────────────────────────
  {
    time: "15:00",
    title: "Велком-зона открыта",
    description: "Гости собираются в уютной велком-зоне. Приветственные напитки, лёгкие канапе и живая фоновая музыка.",
    icon: "Smile",
    color: "#ffdae9",
    accent: "#b76e79",
    phase: "welcome",
  },
  {
    time: "15:30",
    title: "Знакомство и общение",
    description: "Время познакомиться поближе. Фотозона с цветочными композициями, ароматный чай и атмосфера ожидания.",
    icon: "Users",
    color: "#fff8f2",
    accent: "#b76e79",
    phase: "welcome",
  },
  // ── ЦЕРЕМОНИЯ ───────────────────────────────────────
  {
    time: "16:00",
    title: "Начало церемонии",
    description: "Торжественный выход жениха и невесты. Живая музыка, цветочная арка и замирающее от счастья сердце.",
    icon: "Heart",
    color: "#d0e8d5",
    accent: "#5a8a6a",
    phase: "ceremony",
  },
  {
    time: "16:15",
    title: "Обмен клятвами",
    description: "Самые важные слова в жизни — обещания любить, беречь и быть рядом. Обмен кольцами под открытым небом.",
    icon: "Gem",
    color: "#ffdae9",
    accent: "#b76e79",
    phase: "ceremony",
  },
  {
    time: "16:40",
    title: "Первый поцелуй и фото",
    description: "Официальное начало семейной жизни. Аплодисменты, лепестки роз, первые снимки в качестве супругов.",
    icon: "Camera",
    color: "#d0e8d5",
    accent: "#5a8a6a",
    phase: "ceremony",
  },
  {
    time: "17:00",
    title: "Поздравления гостей",
    description: "Время обнять молодожёнов, сказать тёплые слова и подарить подарки. Шампанское и живые цветы.",
    icon: "MessageCircle",
    color: "#fff8f2",
    accent: "#b76e79",
    phase: "ceremony",
  },
  // ── ОСНОВНАЯ ЧАСТЬ ──────────────────────────────────
  {
    time: "18:00",
    title: "Торжественный ужин",
    description: "Открытие банкетного зала. Авторское меню от шеф-повара, сезонные продукты и природные ароматы.",
    icon: "UtensilsCrossed",
    color: "#ffdae9",
    accent: "#b76e79",
    phase: "main",
  },
  {
    time: "19:00",
    title: "Тосты и речи",
    description: "Слово родителям и дорогим гостям. Истории, смех, слёзы и самые тёплые пожелания молодожёнам.",
    icon: "Wine",
    color: "#d0e8d5",
    accent: "#5a8a6a",
    phase: "main",
  },
  {
    time: "20:00",
    title: "Первый танец",
    description: "Первый танец молодожёнов — тот самый момент, ради которого стоит смотреть не отрываясь.",
    icon: "Music",
    color: "#fff8f2",
    accent: "#b76e79",
    phase: "main",
  },
  {
    time: "20:30",
    title: "Торт и десерты",
    description: "Разрезание свадебного торта. Десертный стол с авторскими угощениями и цветочными мотивами.",
    icon: "Cake",
    color: "#ffdae9",
    accent: "#b76e79",
    phase: "main",
  },
  {
    time: "21:00",
    title: "Танцпол открыт",
    description: "Живая музыка сменяется диджеем — и все гости выходят на танцпол. Весело, ярко и до рассвета.",
    icon: "Zap",
    color: "#d0e8d5",
    accent: "#5a8a6a",
    phase: "main",
  },
  {
    time: "23:00",
    title: "Финал вечера",
    description: "Запуск светящихся фонариков в ночное небо и прощальный фейерверк. Незабываемое завершение дня.",
    icon: "Sparkles",
    color: "#fff8f2",
    accent: "#b76e79",
    phase: "main",
  },
];

const phaseLabels: Record<Phase, string> = {
  welcome: "Велком",
  ceremony: "Церемония",
  main: "Основная часть",
};

const phaseIcons: Record<Phase, string> = {
  welcome: "Coffee",
  ceremony: "Flower2",
  main: "Star",
};

const phases: Phase[] = ["welcome", "ceremony", "main"];

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

const PhaseHeader = ({ phase }: { phase: Phase }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`phase-header ${visible ? "phase-header--visible" : ""}`}>
      <div className="phase-header__icon">
        <Icon name={phaseIcons[phase] as "Coffee"} size={16} />
      </div>
      <span>{phaseLabels[phase]}</span>
      <div className="phase-header__line" aria-hidden="true" />
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
          Каждый момент продуман с любовью — от велкома<br />до последнего танца под звёздами
        </p>
      </header>

      <div className="timeline-phases">
        {phases.map((phase) => {
          const phaseEvents = events.filter((e) => e.phase === phase);
          const globalIndex = events.findIndex((e) => e.phase === phase);
          return (
            <div key={phase} className="phase-block">
              <PhaseHeader phase={phase} />
              <div className="timeline" role="list" aria-label={`${phaseLabels[phase]} — расписание`}>
                <div className="timeline-line" aria-hidden="true" />
                {phaseEvents.map((event, i) => (
                  <TimelineItem key={event.time} event={event} index={globalIndex + i} />
                ))}
              </div>
            </div>
          );
        })}
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