# Rally Point TCG

Veteran-owned card storefront built with Next.js, React, and Tailwind CSS.

## Current status

The public site is an inventory-coming-soon storefront. There are no verified
catalog records, checkout, customer accounts, database, or marketplace integrations.
The original generated products and browser-only cart were removed because they
represented sample cards as real stock. Existing product URLs now return 404.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

GitHub production deployments are connected to Vercel. Validate changes before
pushing to main. No secrets belong in Git or public catalog data.

## Inventory and sales: next implementation

Use a private database for card variants, physical lots/SKUs, locations,
acquisition and grading costs, channel listing IDs, orders, fees, shipping,
refunds, and an append-only inventory movement history. The storefront receives
only a public projection: photos, identity, condition, selling price, availability.
Never expose costs, customer records, or integration credentials to the browser.

Scans and TCGplayer exports need a reviewed import with duplicate detection and
batch IDs. A TCGplayer CSV is not an automatic marketplace connection. Confirm
available TCGplayer partner access before selecting a synchronization service.

Each sale must be deduplicated by channel + order + line item. Reserve stock,
update connected channels, reconcile missed events, and record sync failures.
Returns must be inspected before restocking. Test simultaneous sales and replayed
notifications. Allocate stock per channel until shared-stock sync is verified.

The website must not accept payment until server-side availability, checkout,
shipping/tax configuration, fulfillment, and owner-approved policies are ready.

Existing legal documents are retained with a preview-status notice; their future
purchase, shipping, and return terms need owner review before opening checkout.
