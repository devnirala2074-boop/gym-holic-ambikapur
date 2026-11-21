import { Check, Info } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { MEMBERSHIP_PLANS, buildWhatsAppUrl } from '../data/gymData';
import { Reveal } from './Reveal';
import './Membership.css';

export default function Membership() {
  return (
    <section id="membership" className="section section--secondary membership">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="eyebrow">Membership Plans</span>
            <h2 className="section-title">
              Simple Plans for Every Stage of Your Journey
            </h2>
            <p className="section-subtitle">
              Choose the duration that suits your routine. Enquire directly on
              WhatsApp to confirm current rates, ongoing offers, and batch
              availability.
            </p>
          </div>
        </Reveal>

        <div className="membership__grid">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08}>
              <article
                className={`plan-card ${plan.featured ? 'plan-card--featured' : ''}`}
              >
                <div className="plan-card__header">
                  <span className="plan-card__badge">{plan.badge}</span>
                  <h3 className="plan-card__title">{plan.name}</h3>
                  <p className="plan-card__duration">{plan.duration}</p>
                </div>

                <div className="plan-card__pricing">
                  <span className="plan-card__price">{plan.price}</span>
                  <span className="plan-card__price-note">
                    Price confirmed on enquiry
                  </span>
                </div>

                <p className="plan-card__desc">{plan.description}</p>

                <ul className="plan-card__features">
                  {plan.features.map((feat) => (
                    <li key={feat} className="plan-card__feature">
                      <Check size={17} className="plan-card__check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppUrl(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp plan-card__btn"
                >
                  <WhatsAppIcon size={18} />
                  Join Now
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="membership__disclaimer">
            <Info size={18} className="membership__disclaimer-icon" />
            <p>
              <strong>Pricing Notice:</strong> Displayed ₹XXXX amounts are
              placeholders. Actual membership prices and program inclusions will
              be updated after confirmation from the Gym Holic owner.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
