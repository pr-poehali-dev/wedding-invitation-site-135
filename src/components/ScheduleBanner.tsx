import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ScheduleBanner = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="schedule-banner-wrap" ref={ref}>
      <div className={`schedule-banner ${visible ? "schedule-banner--visible" : ""}`}>
        <div className="schedule-banner__left">
          <div className="schedule-banner__icon" aria-hidden="true">
            <Icon name="CalendarClock" size={22} />
          </div>
          <div>
            <p className="schedule-banner__eyebrow">программа вечера</p>
            <p className="schedule-banner__title">План свадебного дня</p>
            <p className="schedule-banner__sub">
              Велком · Церемония · Банкет · Танцы
            </p>
          </div>
        </div>
        <Link to="/schedule" className="schedule-banner__btn" aria-label="Открыть план свадебного дня">
          Смотреть план
          <Icon name="ArrowRight" size={15} />
        </Link>
      </div>
    </div>
  );
};

export default ScheduleBanner;
