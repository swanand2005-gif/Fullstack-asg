# Architecture & Technical Decisions

## Overview
A static-data-driven single-page React 19 application bundled with Vite 8.

## Component Hierarchy
- `src/main.jsx` — Application entry point mounting `<App />`.
- `src/App.jsx` — Single-page layout shell rendering `<PayPalNavbar />` and `<PayPalHero />`.
- `src/data/paypalNavData.js` — Single source of truth for static navigation items, mega-menu links, auth buttons, and hero content (`segments`, `defaultSegment`, `contentBySegment`).
- `src/components/Navbar/`
  - `PayPalNavbar.jsx` & `PayPalNavbar.css` — Top sticky navigation bar with PayPal icon mark, dropdown triggers, `Log In` / `Sign Up` pill buttons, mega-menu integration, and mobile drawer.
  - `DesktopMegaMenu.jsx` — Dropdown mega-menu panel.
  - `MobileNavDrawer.jsx` — Responsive slide-out drawer for `< 1024px` viewports.
  - `Icons.jsx` — Accessible inline SVG icons (`PayPalMark`, `ChevronDownIcon`, `ArrowRightIcon`, `MenuIcon`, `CloseIcon`).
- `src/components/Hero/`
  - `PayPalHero.jsx` & `PayPalHero.css` — Hero section featuring the `Personal` / `Business` segmented pill switch, `PayPal Open` display typography, subtitle, description, and `Sign Up` / `Contact Sales` CTA buttons.
