import { Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import {
  BUSINESS_INFO,
  NAV_LINKS,
  SERVICES,
  buildWhatsAppUrl,
} from '../data/gymData';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a href="#home" className="footer__brand">
              <span className="footer__logo-badge">
                <img
                  src="/images/gym-holic-logo.webp"
                  alt="Gym Holic official logo"
                  className="footer__logo-img"
                  width="36"
                  height="36"
                />
              </span>
              <div>
                <div className="footer__brand-name">{BUSINESS_INFO.shortName}</div>
                <div className="footer__brand-sub">{BUSINESS_INFO.tagline}</div>
              </div>
            </a>
            <p className="footer__about">
              A welcoming, coach-guided fitness club on Manendragarh Road,
              Ambikapur—built to help you grow stronger every day.
            </p>
            <div className="footer__socials">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn footer__social-btn--instagram"
                aria-label="Follow Gym Holic on Instagram"
              >
                <InstagramIcon size={18} />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Programs</h3>
            <ul className="footer__list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="footer__link">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__contact-list">
              <li>
                <MapPin size={16} />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </li>
              <li>
                <Phone size={16} />
                <a href={BUSINESS_INFO.phoneTel} className="footer__link">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <WhatsAppIcon size={16} className="footer__wa-icon" />
                <a
                  href={buildWhatsAppUrl(
                    'Hello Gym Holic! I have an enquiry.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <p className="footer__bottom-note">
            Manendragarh Road, Ambikapur, Chhattisgarh – 497001
          </p>
        </div>
      </div>
    </footer>
  );
}
