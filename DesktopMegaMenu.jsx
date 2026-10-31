import React from 'react';
import { ArrowRightIcon } from './Icons';

export const DesktopMegaMenu = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="pp-megamenu-panel"
      role="region"
      aria-label={`${item.label} submenu`}
      id={`submenu-${item.id}`}
    >
      <div className="pp-megamenu-inner">
        {/* Segment Title & Subtext */}
        <div className="pp-segment-header">
          <a
            href={item.segmentHref}
            className="pp-segment-title-link"
            onClick={onClose}
          >
            <span>{item.segmentTitle}</span>
            <ArrowRightIcon size={20} />
          </a>
          {item.segmentSubtext && (
            <div className="pp-segment-subtext">{item.segmentSubtext}</div>
          )}
        </div>

        {/* Content Layout */}
        <div className="pp-megamenu-content">
          <div className="pp-megamenu-columns">
            {item.sections.map((section) => (
              <div key={section.id} className="pp-megamenu-col">
                <h3 className="pp-megamenu-col-title">{section.title}</h3>
                <ul className="pp-megamenu-links-list">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="pp-megamenu-link"
                        onClick={onClose}
                      >
                        <span>{link.text}</span>
                        <ArrowRightIcon size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Action Rail (Pill Buttons / Links) */}
          {item.actionPills && item.actionPills.length > 0 && (
            <div className="pp-megamenu-rail">
              {item.actionPills.map((action, idx) => (
                <a
                  key={idx}
                  href={action.href}
                  className={`pp-rail-item ${
                    action.type === 'pill' ? 'pp-rail-pill' : 'pp-rail-link'
                  }`}
                  onClick={onClose}
                >
                  {action.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
