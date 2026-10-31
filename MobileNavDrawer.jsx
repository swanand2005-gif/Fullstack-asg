import React, { useState } from 'react';
import { ChevronDownIcon, ArrowRightIcon } from './Icons';

export const MobileNavDrawer = ({
  isOpen,
  onClose,
  menuItems,
  authData,
}) => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  if (!isOpen) return null;

  const toggleAccordion = (id) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="pp-mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="pp-mobile-accordion-list">
        {menuItems.map((item) => {
          const isAccordionOpen = openAccordionId === item.id;
          return (
            <div
              key={item.id}
              className={`pp-mobile-accordion-item ${
                isAccordionOpen ? 'open' : ''
              }`}
            >
              <button
                type="button"
                className="pp-mobile-accordion-header"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isAccordionOpen}
              >
                <span>{item.label}</span>
                <ChevronDownIcon className="pp-mobile-accordion-chevron" />
              </button>

              {isAccordionOpen && (
                <div className="pp-mobile-accordion-body">
                  <a
                    href={item.segmentHref}
                    className="pp-mobile-segment-title"
                    onClick={onClose}
                  >
                    <span>{item.segmentTitle}</span>
                    <ArrowRightIcon size={16} />
                  </a>

                  {item.segmentSubtext && (
                    <div className="pp-mobile-subtext">
                      {item.segmentSubtext}
                    </div>
                  )}

                  {item.sections.map((section) => (
                    <div key={section.id} className="pp-mobile-section-group">
                      <div className="pp-mobile-section-label">
                        {section.title}
                      </div>
                      {section.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className="pp-mobile-link"
                          onClick={onClose}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ))}

                  {item.actionPills && item.actionPills.length > 0 && (
                    <div className="pp-mobile-rails">
                      {item.actionPills.map((action, idx) => (
                        <a
                          key={idx}
                          href={action.href}
                          className={`pp-rail-item ${
                            action.type === 'pill'
                              ? 'pp-rail-pill'
                              : 'pp-rail-link'
                          }`}
                          onClick={onClose}
                        >
                          {action.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Footer CTAs */}
      <div className="pp-mobile-footer-actions">
        <a
          href={authData.signup.href}
          className="pp-btn pp-btn-primary pp-mobile-signup-btn"
          onClick={onClose}
        >
          {authData.signup.text}
        </a>
      </div>
    </div>
  );
};
