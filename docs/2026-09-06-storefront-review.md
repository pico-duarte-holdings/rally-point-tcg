# Storefront review — September 6, 2026

## Findings and fixes

- Removed 29 generated products and invented stock/prices from the public catalog.
- Replaced the nonfunctional checkout and arbitrary 10% tax/$9.99 shipping with
  an explicit prelaunch state. Old browser carts no longer drive any UI.
- Removed unconfirmed donation, 24-hour shipping, and tournament claims.
- Kept the owner's logo, black/gold/red styling, domain, email, and Instagram.
- Rebuilt navigation with keyboard-accessible categories and a labeled mobile menu.
- Replaced conditional-hook product/category pages with server-rendered routes and
  proper missing-page handling. Added skip navigation and reduced-motion support.
- Removed obsolete demo-only cart/filter components; these must be implemented
  against actual catalog and stock data when the commerce backend is selected.
- Repaired the lint command, added TypeScript validation, and updated dependencies.
  Next remains on major version 15. Its PostCSS dependency is overridden within
  major version 8 to address reported advisories; revisit when upstream updates.
- Added preview notices to existing legal pages and improved their mobile sizing.
  Existing legal terms are retained, not approved as launch policies.

## Boundaries

No inventory or sales database, eBay/TCGplayer synchronization, or payment provider
was connected. No real cards were imported or listed. See README.md for the next
integration requirements. Product costs and customer details must remain private.

## Validation

Production build, ESLint, TypeScript, and npm dependency audit passed. Browser
verification checks every public route at 320, 390, 768, and 1280px, WCAG A/AA
rules with axe, mobile and keyboard navigation, obsolete demo-cart data, missing
products, and browser exceptions. Results are recorded in the task workspace.
