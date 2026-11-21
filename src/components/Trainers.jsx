import { UserRound, Info } from 'lucide-react';
import { TRAINER_PLACEHOLDERS, buildWhatsAppUrl } from '../data/gymData';
import { Reveal } from './Reveal';
import './Trainers.css';

export default function Trainers() {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Coaching Team</span>
            <h2 className="section-title">Guided by Dedicated Fitness Coaches</h2>
            <p className="section-subtitle">
              Our coaching team supports members with proper technique, structured
              progression, and encouragement across every workout discipline.
            </p>
          </div>
        </Reveal>

        <div className="trainers__grid">
          {TRAINER_PLACEHOLDERS.map((trainer, index) => (
            <Reveal key={trainer.id} delay={index * 0.08}>
              <article className="trainer-card">
                <div className="trainer-card__avatar-wrap">
                  <div className="trainer-card__avatar" aria-hidden="true">
                    <UserRound size={44} strokeWidth={1.4} />
                  </div>
                  <span className="trainer-card__badge">{trainer.statusLabel}</span>
                </div>

                <div className="trainer-card__content">
                  <h3 className="trainer-card__role">{trainer.role}</h3>
                  <p className="trainer-card__focus">{trainer.focus}</p>
                  <p className="trainer-card__note">{trainer.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="trainers__notice">
            <Info size={18} className="trainers__notice-icon" />
            <p>
              <strong>Placeholder Profiles:</strong> Official trainer names,
              portraits, and certifications will be published once confirmed by
              Gym Holic management.{' '}
              <a
                href={buildWhatsAppUrl(
                  'Hello Gym Holic! I would like to know more about your trainers and personal training slots.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="trainers__notice-link"
              >
                Ask about coaching on WhatsApp →
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
