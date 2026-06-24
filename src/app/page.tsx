"use client";

import React, { useEffect, useState, useRef } from "react";
import { LangProvider, useLang } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const MAPS_URL = "https://maps.app.goo.gl/reRivwy48qXDQqrQ6";

const GALLERY_IMAGES = Array.from({ length: 19 }, (_, i) => `/gallery/pozos-azules${i + 1}.jpg`);

function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
          Pozos Azules
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#visiting">{t.nav.visiting}</a>
          <a href="#transportation">{(t as any).transportation?.title || "Transportation"}</a>
          <a href="#history">{(t as any).history?.title || "History"}</a>
          <a href="#tips">{t.nav.tips}</a>
          <a href="#reviews">{(t as any).reviews?.title || "Reviews"}</a>
          <a href="#faq">{(t as any).faq?.title || "FAQ"}</a>
          <a href="#location">{t.nav.location}</a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-texture" />
      <div className="hero-water" />
      <div className="hero-content">
        <p className="hero-tagline">{t.hero.tagline}</p>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <a href="#visiting" className="hero-cta">
          {t.hero.cta}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
      <div className="hero-meta">
        <div className="hero-rating">4.3</div>
        <div className="hero-stars">★★★★☆</div>
        <div className="hero-reviews">7,279 {t.rating.reviews} · {t.rating.source}</div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <ScrollReveal>
        <p className="section-label">01</p>
        <h2 className="section-title">{t.about.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <p className="about-text">{t.about.p1}</p>
        <p className="about-text">{t.about.p2}</p>
      </ScrollReveal>
      <ScrollReveal>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1rem", marginTop: "2rem" }}>
          {t.about.highlights.title}
        </h3>
        <div className="highlights-grid">
          {t.about.highlights.items.map((item, i) => (
            <div className="highlight-item" key={i}>
              <div className="highlight-icon" />
              <span className="highlight-text">{item}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="management-info" style={{ marginTop: "2rem", padding: "1.5rem", background: "#fff", borderRadius: "2px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "0.5rem" }}>
            {(t as any).about?.management?.title || "景点管理"}
          </h4>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "var(--color-earth-soft)" }}>
            {(t as any).about?.management?.content || "景点目前由当地政府与社区共同管理，门票收入用于维护周边环境和改善游客设施。"}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Visiting() {
  const { t } = useLang();
  const cards = [
    { title: t.visiting.hours.title, content: t.visiting.hours.content, note: t.visiting.hours.note },
    { title: t.visiting.price.title, content: t.visiting.price.content, note: t.visiting.price.note },
    { title: t.visiting.duration.title, content: t.visiting.duration.content, note: t.visiting.duration.note },
  ];
  
  const experiences = [
    { icon: "☀️", title: "日间色彩游", content: "晴朗的白天是欣赏极致蓝绿色的最佳时机。游客可以在广阔的园区内选择徒步漫游，或租用马匹骑行。" },
    { icon: "🌌", title: "夜间观星行", content: "远离城市光污染，夜幕降临后的 Pozos Azules 展现出另一种壮丽。浩瀚的星空与宁静的水面交相辉映。" },
    { icon: "🤝", title: "社交与活动", content: "宽阔的生态场地使其成为举办户外活动的理想场所，也是全球旅行者相遇、交流故事的完美驿站。" },
  ];
  
  return (
    <section id="visiting" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #eee8dd 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">02</p>
          <h2 className="section-title">{t.visiting.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="info-grid">
            {cards.map((c, i) => (
              <div className="info-card" key={i}>
                <div className="info-card-title">{c.title}</div>
                <div className="info-card-content">{c.content}</div>
                <div className="info-card-note">{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 600, color: "var(--color-deep)", marginBottom: "1.5rem", marginTop: "2rem" }}>
            游览体验
          </h3>
          <div className="transport-grid" style={{ marginBottom: "2rem" }}>
            {experiences.map((exp, i) => (
              <div className="transport-card" key={i}>
                <div className="transport-icon">{exp.icon}</div>
                <h3 className="transport-title">{exp.title}</h3>
                <p className="transport-content">{exp.content}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bring-section">
            <div className="bring-title">{t.visiting.bring.title}</div>
            <ul className="bring-list">
              {t.visiting.bring.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Location() {
  const { t } = useLang();
  return (
    <section id="location" className="section">
      <ScrollReveal>
        <p className="section-label">10</p>
        <h2 className="section-title">{t.location.title}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="location-section">
          <div className="location-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31764.52463725435!2d-73.57118192252686!3d5.630956146002327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41d78679965ecb%3A0xa86ff28c9192192d!2sPozos%20Azules!5e0!3m2!1szh-CN!2sus!4v1782296510297!5m2!1szh-CN!2sus"
              width="800"
              height="600"
              style={{border:0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pozos Azules Location Map"
            />
          </div>
          <div className="location-info">
            <p className="location-address">{t.location.address}</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-link">
              {t.location.openMaps}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="contact-block">
          <div className="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-azure)" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <div>
            <a href="tel:+573125493486" className="contact-phone">{t.contact.phone}</a>
            <p className="contact-note">{t.contact.phoneNote}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Transportation() {
  const { t } = useLang();
  const transportOptions = [
    { icon: "✈️", title: t.transportation?.fromAirport?.title || "从机场出发", content: t.transportation?.fromAirport?.content || "从最近的国际机场到达后，如何前往景点" },
    { icon: "🚗", title: t.transportation?.selfDrive?.title || "自驾前往", content: t.transportation?.selfDrive?.content || "自驾路线和停车信息" },
    { icon: "🚌", title: t.transportation?.publicTransport?.title || "公共交通", content: t.transportation?.publicTransport?.content || "公共交通方式和班次" },
    { icon: "🚶", title: t.transportation?.otherWays?.title || "其他方式", content: t.transportation?.otherWays?.content || "徒步、骑行等其他方式" },
  ];
  
  return (
    <section id="transportation" className="section">
      <ScrollReveal>
        <p className="section-label">04</p>
        <h2 className="section-title">{(t as any).transportation?.title || "交通方式"}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="transport-grid">
          {transportOptions.map((option, i) => (
            <div className="transport-card" key={i}>
              <div className="transport-icon">{option.icon}</div>
              <h3 className="transport-title">{option.title}</h3>
              <p className="transport-content">{option.content}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function History() {
  const { t } = useLang();
  return (
    <section id="history" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">05</p>
          <h2 className="section-title">{(t as any).history?.title || "历史与科普"}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="history-content">
            <p className="history-text">{(t as any).history?.p1 || "关于 Pozos Azules 的历史和地质科普信息"}</p>
            <p className="history-text">{(t as any).history?.p2 || "更多详细信息"}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Tips() {
  const { t } = useLang();
  return (
    <section id="tips" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">06</p>
          <h2 className="section-title">{t.tips.title}</h2>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="tips-list">
            {t.tips.items.map((tip, i) => (
              <li className="tip-item" key={i}>
                <span className="tip-number">{String(i + 1).padStart(2, "0")}</span>
                <span className="tip-text">{tip}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Gallery() {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null));
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section">
      <ScrollReveal>
        <p className="section-label">07</p>
        <h2 className="section-title">{(t as any).gallery?.title || "Photo Gallery"}</h2>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div className="gallery-item" key={i} onClick={() => setLightboxIndex(i)}>
              <img src={src} alt={`Pozos Azules ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="https://maps.app.goo.gl/Ec2ZbMGsuQjnDyLu7" target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {(t as any).gallery?.viewMore || "在 Google Maps 查看更多相片"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>‹</button>
          <img src={GALLERY_IMAGES[lightboxIndex]} alt={`Pozos Azules ${lightboxIndex + 1}`} className="lightbox-img" />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length); }}>›</button>
        </div>
      )}
    </section>
  );}

// 模拟谷歌评论数据
const GOOGLE_REVIEWS = [
  { name: "María González", avatar: "MG", rating: 5, date: "2024-01-15", text: "¡Increíble lugar! Los colores de las aguas son simplemente mágicos. Una experiencia única que no te puedes perder si visitas Villa de Leyva." },
  { name: "John Smith", avatar: "JS", rating: 5, date: "2024-02-20", text: "Amazing natural pools! The turquoise color is unreal. Great place for photography. Just remember to bring water and sunscreen." },
  { name: "李小明", avatar: "李", rating: 4, date: "2024-03-10", text: "非常漂亮的自然景观！水的颜色真的很惊艳，不过要注意防晒和带足够的水。值得一来。" },
  { name: "Sophie Martin", avatar: "SM", rating: 5, date: "2024-01-28", text: "Un endroit magique! La couleur de l'eau est incroyable. Je recommande vivement de visiter tôt le matin pour éviter la foule." },
  { name: "Carlos Ruiz", avatar: "CR", rating: 5, date: "2024-02-05", text: "Excelente lugar para visitar en familia. Los niños quedaron fascinados con los colores del agua. Lleguen temprano para evitar aglomeraciones." },
  { name: "Anna Kowalska", avatar: "AK", rating: 4, date: "2024-03-22", text: "Przepiękne miejsce! Kolory wody są niesamowite. Warto odwiedzić, ale trzeba pamiętać o zabraniu wody i kremu z filtrem." },
];

function Reviews() {
  const { t } = useLang();

  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <p className="section-label">08</p>
        <h2 className="section-title">{(t as any).reviews?.title || "Visitor Reviews"}</h2>
        <p className="section-subtitle">{(t as any).reviews?.subtitle || "Real reviews from Google Maps"}</p>
        <div className="section-divider" />
      </ScrollReveal>
      <ScrollReveal>
        <div className="reviews-grid">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{review.avatar}</div>
                <div className="review-info">
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-source">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4285F4"/>
                </svg>
                Google
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="https://maps.app.goo.gl/Ec2ZbMGsuQjnDyLu7" target="_blank" rel="noopener noreferrer" className="google-maps-btn">
            {(t as any).reviews?.viewMore || "在 Google Maps 查看更多评价"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FAQ() {
  const { t } = useLang();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedAll, setExpandedAll] = useState(true); // 默认全部展开

  const faqItems = (t as any).faq?.items || [];

  return (
    <section id="faq" style={{ background: "linear-gradient(180deg, var(--color-cream) 0%, #e8e2d6 100%)" }}>
      <div className="section">
        <ScrollReveal>
          <p className="section-label">09</p>
          <h2 className="section-title">{(t as any).faq?.title || "Frequently Asked Questions"}</h2>
          <p className="section-subtitle">{(t as any).faq?.subtitle || "Everything you need to know"}</p>
          <div className="section-divider" />
        </ScrollReveal>
        <ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item: any, i: number) => (
              <div className={`faq-item expanded`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <span>{item.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-icon ${expandedIndex === i ? "rotated" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-answer">
                  {item.answer.split("\n\n").map((paragraph: string, j: number) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        <a href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          隐私政策
        </a>
        <a href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem", marginRight: "1.5rem" }}>
          服务条款
        </a>
        <a href="/cookies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.8rem" }}>
          Cookie 设置
        </a>
      </div>
      <p className="footer-text" style={{ marginTop: "1rem" }}>{t.footer.text}</p>
      <p className="footer-made">{t.footer.made}</p>
    </footer>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <About />
      <Visiting />
      <Transportation />
      <History />
      <Tips />
      <Gallery />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
    </LangProvider>
  );
}
