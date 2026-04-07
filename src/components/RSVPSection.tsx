import { useEffect, useRef, useState } from "react";

type AttendStatus = "" | "yes" | "no";
type SubmitState = "idle" | "success-yes" | "success-no";

const RSVPSection = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [attend, setAttend] = useState<AttendStatus>("");
  const [guests, setGuests] = useState("1");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<{ name?: string; attend?: string }>({});
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Пожалуйста, введите ваше имя";
    if (!attend) newErrors.attend = "Пожалуйста, выберите ответ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitState(attend === "yes" ? "success-yes" : "success-no");
  };

  const firstName = name.trim().split(" ")[0];

  return (
    <section id="rsvp" className="section rsvp-section" ref={ref} aria-label="Подтверждение участия">
      <div className={`section-inner ${visible ? "section--visible" : ""}`}>
        <p className="section-eyebrow">ответ</p>
        <h2 className="section-title">Будете с нами?</h2>
        <div className="section-title-line" aria-hidden="true" />

        <p className="rsvp-intro">
          Пожалуйста, подтвердите своё присутствие до <strong>1 августа 2025</strong>.
          Это поможет нам подготовить всё для вашего комфорта.
        </p>

        {submitState === "idle" ? (
          <form className="rsvp-form" onSubmit={handleSubmit} noValidate aria-label="Форма подтверждения">
            <div className="rsvp-field">
              <label htmlFor="rsvp-name" className="rsvp-label">
                Имя и фамилия <span aria-hidden="true">*</span>
              </label>
              <input
                id="rsvp-name"
                type="text"
                className={`rsvp-input ${errors.name ? "rsvp-input--error" : ""}`}
                placeholder="Например: Мария Иванова"
                value={name}
                onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                required
                aria-required="true"
                aria-describedby={errors.name ? "name-error" : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <p id="name-error" className="rsvp-error" role="alert">{errors.name}</p>
              )}
            </div>

            <div className="rsvp-field">
              <label htmlFor="rsvp-attend" className="rsvp-label">
                Придёте ли вы? <span aria-hidden="true">*</span>
              </label>
              <select
                id="rsvp-attend"
                className={`rsvp-select ${errors.attend ? "rsvp-input--error" : ""}`}
                value={attend}
                onChange={(e) => { setAttend(e.target.value as AttendStatus); setErrors(prev => ({ ...prev, attend: undefined })); }}
                required
                aria-required="true"
                aria-describedby={errors.attend ? "attend-error" : undefined}
              >
                <option value="" disabled>Выберите ответ...</option>
                <option value="yes">Да, с радостью!</option>
                <option value="no">К сожалению, не смогу прийти</option>
              </select>
              {errors.attend && (
                <p id="attend-error" className="rsvp-error" role="alert">{errors.attend}</p>
              )}
            </div>

            <div
              className={`rsvp-field rsvp-field--guests ${attend === "yes" ? "rsvp-field--visible" : ""}`}
              aria-hidden={attend !== "yes"}
            >
              <label htmlFor="rsvp-guests" className="rsvp-label">
                Сколько вас будет?
              </label>
              <input
                id="rsvp-guests"
                type="number"
                className="rsvp-input"
                min="1"
                max="10"
                placeholder="Количество гостей"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                tabIndex={attend === "yes" ? 0 : -1}
              />
            </div>

            <button type="submit" className="rsvp-btn" aria-label="Отправить ответ">
              Отправить ответ
            </button>
          </form>
        ) : submitState === "success-yes" ? (
          <div className="rsvp-message rsvp-message--yes" role="status" aria-live="polite">
            <div className="rsvp-message__icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="#d0e8d5" strokeWidth="1.5"/>
                <path d="M14 24l7 7 13-13" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Спасибо, {firstName}!</h3>
            <p>Мы очень рады, что вы будете с нами в этот особенный день. До встречи 15 августа!</p>
          </div>
        ) : (
          <div className="rsvp-message rsvp-message--no" role="status" aria-live="polite">
            <div className="rsvp-message__icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="#ffdae9" strokeWidth="1.5"/>
                <path d="M24 14v12M24 30v2" stroke="#b76e79" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Благодарим, {firstName}</h3>
            <p>Жаль, что вы не сможете присоединиться. Будем хранить тёплые воспоминания о вас в этот день.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
