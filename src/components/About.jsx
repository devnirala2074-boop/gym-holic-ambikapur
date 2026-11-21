import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ABOUT_HIGHLIGHTS, BUSINESS_INFO } from '../data/gymData';
import { Reveal } from './Reveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__image-frame">
            <img
              src="/images/about-community.webp"
              alt="Trainer guiding a member with kettlebells in a warm sunlit studio at Gym Holic Ambikapur"
              className="about__image"
              loading="lazy"
            />
          </div>
          <div className="about__floating-card">
            <span className="about__floating-number">
              {BUSINESS_INFO.googleRating}★
            </span>
            <span className="about__floating-text">
              Rated across {BUSINESS_INFO.googleReviewCount} Google reviews in
              Ambikapur*
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="about__content">
          <span className="eyebrow">About Gym Holic</span>
          <h2 className="section-title">
            A Welcoming Fitness Club Built for Consistency in Ambikapur
          </h2>
          <p className="about__lead">
            Located on Manendragarh Road, <strong>Gym Holic – The Fitness Club</strong>{' '}
            brings together thoughtful coaching, modern training equipment, and an
            encouraging community so every workout feels purposeful.
          </p>
          <p className="about__body">
            Whether you are stepping into a gym for the very first time or refining
            your strength and conditioning routine, our space is designed to support
            steady, sustainable progress without intimidation.
          </p>

          <ul className="about__highlights">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <li key={item} className="about__highlight-item">
                <CheckCircle2 size={19} className="about__highlight-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="about__cta-row">
            <a href="#services" className="btn btn--primary">
              Explore Our Programs
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Visit Our Club
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
