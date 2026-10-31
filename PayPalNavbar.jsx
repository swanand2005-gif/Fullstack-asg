import React, { useState, useEffect, useRef } from 'react';
import { paypalNavData } from '../../data/paypalNavData';
import { DesktopMegaMenu } from './DesktopMegaMenu';
import { MobileNavDrawer } from './MobileNavDrawer';
import { PayPalMark, ChevronDownIcon, MenuIcon, CloseIcon } from './Icons';
import './PayPalNavbar.css';

export const PayPalNavbar = () => {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef(null);

  const activeMenuItem = paypalNavData.menuItems.find(
    (item) => item.id === activeMenuId
  );

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenuId(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close desktop mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleToggleMenu = (id) => {
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  const handleMouseEnter = (id) => {
    // If a menu is already open, hovering another item switches smoothly
    if (activeMenuId !== null) {
      setActiveMenuId(id);
    }
  };

  const closeAll = () => {
    setActiveMenuId(null);
    setIsMobileOpen(false);
  };

  return (
    <div className="pp-navbar-wrapper" ref={navRef}>
      <header className="pp-header" role="banner">
        <div className="pp-header-container">
          {/* Logo */}
          <a
            href={paypalNavData.logo.href}
            className="pp-logo-link"
            aria-label="PayPal Home"
            onClick={closeAll}
          >
            <PayPalMark />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="pp-nav-desktop"
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="pp-nav-list">
              {paypalNavData.menuItems.map((item) => {
                const isActive = activeMenuId === item.id;
                return (
                  <li key={item.id} className="pp-nav-item">
                    <button
                      type="button"
                      className={`pp-nav-trigger ${isActive ? 'active' : ''}`}
                      onClick={() => handleToggleMenu(item.id)}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      aria-expanded={isActive}
                      aria-controls={`submenu-${item.id}`}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="pp-nav-chevron" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Buttons & Mobile Toggle */}
          <div className="pp-actions">
            <a
              href={paypalNavData.auth.login.href}
              className="pp-btn pp-btn-secondary"
            >
              {paypalNavData.auth.login.text}
            </a>
            <a
              href={paypalNavData.auth.signup.href}
              className="pp-btn pp-btn-primary"
            >
              {paypalNavData.auth.signup.text}
            </a>

            {/* Mobile Hamburger / Close Toggle */}
            <button
              type="button"
              className="pp-mobile-toggle"
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((prev) => !prev)}
            >
              {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Panel */}
        {activeMenuItem && (
          <DesktopMegaMenu
            item={activeMenuItem}
            onClose={() => setActiveMenuId(null)}
          />
        )}
      </header>

      {/* Backdrop overlay for Desktop Mega Menu */}
      {activeMenuItem && (
        <div
          className="pp-backdrop"
          onClick={() => setActiveMenuId(null)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Out Drawer */}
      <MobileNavDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        menuItems={paypalNavData.menuItems}
        authData={paypalNavData.auth}
      />
    </div>
  );
};
