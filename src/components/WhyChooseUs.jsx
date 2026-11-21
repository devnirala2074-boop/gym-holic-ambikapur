import { Award, ShieldCheck, Sun, Layers, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/gymData';
import { Reveal } from './Reveal';
import './WhyChooseUs.css';

const ICON_MAP = {
  Award,
  ShieldCheck,
  Sun,
  Layers,
  Users,
};

export default function WhyChooseUs() {
  return (
    <section className="section section--secondary why-us">
      <div className="container">
        <Reveal>
          <div className="section-header section-header--center">
            <span className="eyebrow">Why Choose Gym Holic</span>
            <h2 className="section-title">
              Built Around Your Progress, Comfort &amp; Energy
            </h2>
            <p className="section-subtitle">
              We focus on the details that turn a workout into a lasting habit—clean
              spaces, attentive coaching, and a genuinely supportive atmosphere.
            </p>
          </div>
        </Reveal>

        <div className="why-us__grid">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName] || Award;
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="why-card">
                  <div className="why-card__top">
                    <span className="why-card__icon" aria-hidden="true">
                      <IconComponent size={22} />
                    </span>
                    <span className="why-card__index">0{idx + 1}</span>
                  </div>
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
