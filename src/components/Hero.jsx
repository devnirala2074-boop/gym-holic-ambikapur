import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/hero-studio.webp"
          alt="Warm sunlit interior of Gym Holic – The Fitness Club in Ambikapur"
          className="hero__bg-img"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__badge">
            <MapPin size={14} />
            <span>Manendragarh Road, Ambikapur</span>
            <span className="hero__badge-dot" aria-hidden="true">
              •
            </span>
            <span className="hero__badge-rating">
              <Star size={13} fill="currentColor" />
              {BUSINESS_INFO.googleRating}/5 ({BUSINESS_INFO.googleReviewCount} reviews)
            </span>
          </div>

          <h1 className="hero__title">
            Stronger Every Day.
            <br />
            <em>Better Every You.</em>
          </h1>

          <p className="hero__subtitle">
            Your fitness journey starts here. Discover a welcoming space to build
            strength, improve fitness and transform your lifestyle.
          </p>

          <div className="hero__actions">
            <a href="#membership" className="btn btn--primary">
              Explore Membership
              <ArrowRight size={17} />
            </a>
            <a href="#trial-form" className="btn btn--outline-light">
              <CalendarCheck size={17} />
              Book a Free Trial
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__strip-item">
            <span className="hero__strip-label">Programs</span>
            <span className="hero__strip-value">
              Strength • CrossFit • Zumba • Aerobics • PT
            </span>
          </div>
          <div className="hero__strip-divider" aria-hidden="true" />
          <div className="hero__strip-item">
            <span className="hero__strip-label">Atmosphere</span>
            <span className="hero__strip-value">
              Warm, Welcoming &amp; Coach-Guided
            </span>
          </div>
          <div className="hero__strip-divider" aria-hidden="true" />
          <div className="hero__strip-item">
            <span className="hero__strip-label">Direct Enquiry</span>
            <a href={BUSINESS_INFO.phoneTel} className="hero__strip-value hero__strip-link">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
