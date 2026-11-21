import { Star, ExternalLink, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';
import { Reveal } from './Reveal';
import './Testimonials.css';

const REVIEW_SLOTS = [
  {
    id: 'rev-1',
    label: 'Verified Google Review Slot 01',
    note: 'Reserved for a verified member review excerpt synced from Gym Holic’s Google Business Profile prior to publishing.',
  },
  {
    id: 'rev-2',
    label: 'Verified Google Review Slot 02',
    note: 'Reserved for a verified member review excerpt synced from Gym Holic’s Google Business Profile prior to publishing.',
  },
  {
    id: 'rev-3',
    label: 'Verified Google Review Slot 03',
    note: 'Reserved for a verified member review excerpt synced from Gym Holic’s Google Business Profile prior to publishing.',
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <Reveal>
          <div className="testimonials__top">
            <div className="section-header">
              <span className="eyebrow">Community Feedback</span>
              <h2 className="section-title">Trusted by Members in Ambikapur</h2>
              <p className="section-subtitle">
                Real experiences from our local fitness community. Rating and
                review count shown below are subject to final verification
                before publishing.
              </p>
            </div>

            <div className="rating-summary">
              <div className="rating-summary__score">
                <span className="rating-summary__number">
                  {BUSINESS_INFO.googleRating}
                </span>
                <span className="rating-summary__out-of">/ 5</span>
              </div>
              <div className="rating-summary__stars" aria-label="4.6 out of 5 stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={18}
                    fill={n <= 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="rating-summary__count">
                Based on {BUSINESS_INFO.googleReviewCount} Google Reviews*
              </p>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rating-summary__link"
              >
                View on Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="testimonials__grid">
          {REVIEW_SLOTS.map((slot, index) => (
            <Reveal key={slot.id} delay={index * 0.08}>
              <article className="review-card">
                <Quote size={24} className="review-card__quote" aria-hidden="true" />
                <span className="review-card__badge">{slot.label}</span>
                <p className="review-card__text">{slot.note}</p>
                <div className="review-card__footer">
                  <span>Google Review Excerpt</span>
                  <span>Pending Verification</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
