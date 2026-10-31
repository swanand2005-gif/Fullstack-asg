import React, { useState } from 'react';
import { paypalNavData } from '../../data/paypalNavData';
import './PayPalHero.css';

export const PayPalHero = () => {
  const { hero } = paypalNavData;
  const [activeSegment, setActiveSegment] = useState(hero.defaultSegment);

  const activeContent =
    hero.contentBySegment[activeSegment] || hero.contentBySegment.business;

  return (
    <section className="pp-hero" aria-labelledby="pp-hero-heading">
      <div className="pp-hero-container">
        {/* Segmented Toggle Pill (Personal / Business) */}
        <div
          className="pp-segment-switch"
          role="tablist"
          aria-label="Account Type Segment"
        >
          {hero.segments.map((segment) => {
            const isSelected = activeSegment === segment.id;
            return (
              <button
                key={segment.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`pp-segment-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveSegment(segment.id)}
              >
                {segment.label}
              </button>
            );
          })}
        </div>

        {/* Hero Heading & Copy */}
        <h1 id="pp-hero-heading" className="pp-hero-title">
          {activeContent.title}
        </h1>

        <h2 className="pp-hero-subtitle">{activeContent.subtitle}</h2>

        <p className="pp-hero-description">{activeContent.description}</p>

        {/* Hero Call-To-Action Buttons */}
        <div className="pp-hero-actions">
          <a
            href={activeContent.primaryCta.href}
            className="pp-hero-btn pp-hero-btn-primary"
          >
            {activeContent.primaryCta.text}
          </a>
          <a
            href={activeContent.secondaryCta.href}
            className="pp-hero-btn pp-hero-btn-secondary"
          >
            {activeContent.secondaryCta.text}
          </a>
        </div>
      </div>
    </section>
  );
};

