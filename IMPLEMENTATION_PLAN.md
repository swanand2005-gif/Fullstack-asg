# Implementation Plan: PayPal India Navigation Bar

## Phases & Deliverables

### Phase 1: Environment & Layout Foundation
- [x] Analyze requirements and obtain approval.
- [ ] Create architecture and plan documentation.
- [ ] Update `src/index.css` to allow full-bleed 100% width layout while preserving inner page styling.
- **Verification**: App builds cleanly and fills full viewport width without horizontal scrollbars.

### Phase 2: Navigation Data Model
- [ ] Implement `src/data/paypalNavData.js` with exact categories, segment titles, subtext, links, and pill cards extracted from PayPal India (`https://www.paypal.com/in/home`).
- **Verification**: Data structure exports cleanly and is importable without errors.

### Phase 3: Desktop Header & Mega Menu
- [ ] Implement `PayPalNavbar.jsx` with official SVG logo, desktop menu items, and auth buttons ("Log In" and "Sign Up").
- [ ] Implement `DesktopMegaMenu.jsx` supporting multi-column layouts, promotional pills, and hover/click triggers.
- [ ] Implement `PayPalNavbar.css` with exact typography, padding, pill button styles, and shadows.
- **Verification**: Dropdowns open smoothly on desktop, show correct links and styling, and dismiss on Escape or click outside.

### Phase 4: Mobile Drawer & Drill-Down Accordions
- [ ] Implement `MobileNavDrawer.jsx` with mobile hamburger/close button.
- [ ] Add accordion toggle states for each menu category.
- [ ] Include mobile-friendly CTAs.
- **Verification**: On screens < 1024px, hamburger opens drawer, accordions expand/collapse smoothly.

### Phase 5: Verification, Linting, & Testing
- [ ] Execute `npm run lint` (`oxlint`).
- [ ] Execute `npm run build` (`vite build`).
- [ ] Test interactions across desktop and mobile viewports.
- **Verification**: Zero lint errors, successful production build, smooth user experience.
