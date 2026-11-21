import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { BUSINESS_INFO, NAV_LINKS, buildWhatsAppUrl } from '../data/gymData';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const value = mobileOpen ? 'hidden' : '';
    document.documentElement.style.overflow = value;
    document.body.style.overflow = value;

    const onKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const handleDrawerNavClick = (e, href) => {
    e.preventDefault();
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    setMobileOpen(false);

    requestAnimationFrame(() => {
      const target = document.querySelector(href);
      if (target) {
        const navbarOffset = 78;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - navbarOffset;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth',
        });
        window.history.replaceState(null, '', href);
      }
    });
  };

  const joinUrl = buildWhatsAppUrl(
    'Hello Gym Holic! I would like to join and enquire about membership options.'
  );

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${
          mobileOpen ? 'navbar--menu-open' : ''
        }`}
      >
        <div className="container navbar__inner">
          <a
            href="#home"
            className="navbar__brand"
            aria-label="Gym Holic Home"
            onClick={closeMenu}
          >
            <span className="navbar__logo-badge">
              <img
                src="/images/gym-holic-logo.webp"
                alt="Gym Holic official logo"
                className="navbar__logo-img"
                width="36"
                height="36"
              />
            </span>
            <span className="navbar__brand-text">
              <span className="navbar__title">{BUSINESS_INFO.shortName}</span>
              <span className="navbar__subtitle">{BUSINESS_INFO.tagline}</span>
            </span>
          </a>

          <nav className="navbar__nav" aria-label="Primary Navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <a
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary navbar__cta"
            >
              Join Now
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Width Opaque Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`navbar__drawer ${mobileOpen ? 'navbar__drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="navbar__drawer-nav" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__drawer-link"
              onClick={(e) => handleDrawerNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__drawer-footer">
          <a
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp navbar__drawer-cta"
            onClick={closeMenu}
          >
            <WhatsAppIcon size={18} />
            Join Now on WhatsApp
          </a>
          <a
            href="#trial-form"
            className="btn btn--secondary navbar__drawer-cta"
            onClick={(e) => handleDrawerNavClick(e, '#trial-form')}
          >
            Book a Free Trial
          </a>
        </div>
      </div>
    </>
  );
}
