import {
  Dumbbell,
  Flame,
  Music,
  HeartPulse,
  UserCheck,
} from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { SERVICES, buildWhatsAppUrl } from '../data/gymData';
import { Reveal } from './Reveal';
import './Services.css';

const ICON_MAP = {
  Dumbbell,
  Flame,
  Music,
  HeartPulse,
  UserCheck,
};

export default function Services() {
  return (
    <section id="services" className="section section--white services">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Our Programs</span>
            <h2 className="section-title">
              Thoughtfully Curated Training for Every Goal
            </h2>
            <p className="section-subtitle">
              From foundational strength and high-energy CrossFit to joyful
              Zumba, Aerobics, and dedicated Personal Training—find the rhythm
              that keeps you coming back.
            </p>
          </div>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Dumbbell;
            return (
              <Reveal key={service.id} delay={index * 0.06}>
                <article className="service-card">
                  <div className="service-card__media">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="service-card__image"
                      loading="lazy"
                    />
                    <span className="service-card__icon" aria-hidden="true">
                      <IconComponent size={20} />
                    </span>
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__desc">{service.description}</p>
                    <a
                      href={buildWhatsAppUrl(service.whatsappPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--whatsapp service-card__link"
                    >
                      <WhatsAppIcon size={17} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
