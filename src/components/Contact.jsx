import { useState } from 'react';
import {
  MapPin,
  Phone,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './BrandIcons';
import { BUSINESS_INFO, SERVICES, buildWhatsAppUrl } from '../data/gymData';
import { Reveal } from './Reveal';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  program: 'Gym & Strength Training',
  preferredTime: 'Morning',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submittedUrl, setSubmittedUrl] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const composedMessage = [
      `Hello Gym Holic! I would like to book a Free Trial / enquire about joining.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Program Interest: ${form.program}`,
      `Preferred Time: ${form.preferredTime}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const waUrl = buildWhatsAppUrl(composedMessage);
    setSubmittedUrl(waUrl);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section section--secondary contact">
      <div className="container contact__grid">
        <Reveal className="contact__info">
          <span className="eyebrow">Visit &amp; Connect</span>
          <h2 className="section-title">{BUSINESS_INFO.name}</h2>
          <p className="contact__intro">
            Drop by our studio on Manendragarh Road, Ambikapur, or reach out
            directly via phone, WhatsApp, or Instagram. We are happy to help you
            pick the right program.
          </p>

          <div className="contact__details">
            <div className="contact__detail-item">
              <span className="contact__detail-icon" aria-hidden="true">
                <MapPin size={17} />
              </span>
              <div className="contact__detail-body">
                <h3 className="contact__detail-label">Location</h3>
                <p className="contact__detail-value">
                  {BUSINESS_INFO.addressLine1}
                  <br />
                  {BUSINESS_INFO.addressLine2}
                </p>
              </div>
            </div>

            <div className="contact__detail-item">
              <span className="contact__detail-icon" aria-hidden="true">
                <Phone size={17} />
              </span>
              <div className="contact__detail-body">
                <h3 className="contact__detail-label">Phone</h3>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="contact__detail-value contact__link"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="contact__detail-item">
              <span
                className="contact__detail-icon contact__detail-icon--instagram"
                aria-hidden="true"
              >
                <InstagramIcon size={17} />
              </span>
              <div className="contact__detail-body">
                <h3 className="contact__detail-label">Instagram</h3>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__detail-value contact__link"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="contact__action-buttons">
            <a href={BUSINESS_INFO.phoneTel} className="btn btn--primary">
              <Phone size={17} />
              Call Now
            </a>
            <a
              href={buildWhatsAppUrl(
                'Hello Gym Holic! I would like to enquire about membership and timings.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <Navigation size={17} />
              Google Maps Directions
            </a>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--instagram"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="contact__form-wrap">
          <div id="trial-form" className="trial-card">
            <span className="trial-card__eyebrow">Free Trial &amp; Enquiry</span>
            <h3 className="trial-card__title">Book Your Free Trial Session</h3>
            <p className="trial-card__subtitle">
              Fill in your details below and your enquiry will open directly in
              WhatsApp with everything prefilled.
            </p>

            <form onSubmit={handleSubmit} noValidate className="trial-form">
              <div className="trial-form__field">
                <label htmlFor="trial-name">Full Name *</label>
                <input
                  id="trial-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <span className="trial-form__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="trial-form__field">
                <label htmlFor="trial-phone">Phone Number *</label>
                <input
                  id="trial-phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <span className="trial-form__error" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="trial-form__row">
                <div className="trial-form__field">
                  <label htmlFor="trial-program">Program Interest</label>
                  <select
                    id="trial-program"
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Membership">General Membership</option>
                  </select>
                </div>

                <div className="trial-form__field">
                  <label htmlFor="trial-time">Preferred Time</label>
                  <select
                    id="trial-time"
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              <div className="trial-form__field">
                <label htmlFor="trial-message">Goals or Questions (Optional)</label>
                <textarea
                  id="trial-message"
                  name="message"
                  rows="3"
                  placeholder="Share your fitness goals or any questions..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--whatsapp trial-form__submit">
                <WhatsAppIcon size={18} />
                Send Enquiry via WhatsApp
              </button>

              {submittedUrl && (
                <div className="trial-form__success" role="status">
                  <CheckCircle2 size={18} />
                  <span>
                    WhatsApp enquiry prepared! If it didn&apos;t open automatically,{' '}
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      click here to send on WhatsApp
                    </a>
                    .
                  </span>
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
