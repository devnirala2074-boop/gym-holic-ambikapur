import { useState } from 'react';
import { X, Expand } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/gymData';
import { Reveal } from './Reveal';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section section--white gallery">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="eyebrow">Club Gallery</span>
            <h2 className="section-title">Inside Gym Holic – The Fitness Club</h2>
            <p className="section-subtitle">
              Explore our sunlit training floor, dedicated equipment zones,
              group fitness spaces, and welcoming workout environment.
            </p>
          </div>
        </Reveal>

        <div className="gallery__filters" role="tablist" aria-label="Gallery categories">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`gallery__filter-btn ${
                activeCategory === category ? 'gallery__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`gallery__item ${
                item.span === 'wide' && activeCategory === 'All'
                  ? 'gallery__item--wide'
                  : ''
              }`}
              onClick={() => setLightboxItem(item)}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <div className="gallery__meta">
                  <span className="gallery__cat">{item.category}</span>
                  <span className="gallery__title">{item.title}</span>
                </div>
                <span className="gallery__expand" aria-hidden="true">
                  <Expand size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="gallery__lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery__lightbox-close"
              onClick={() => setLightboxItem(null)}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>
            <img
              src={lightboxItem.image}
              alt={lightboxItem.alt}
              className="gallery__lightbox-img"
            />
            <div className="gallery__lightbox-caption">
              <span className="gallery__cat">{lightboxItem.category}</span>
              <h4>{lightboxItem.title}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
