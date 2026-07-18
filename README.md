# Groomed Gent Co. Event Experience

A scan-first, responsive event display built with Next.js App Router and TypeScript.

## Local development

```bash
npm install
npm run dev
```

Use `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` for production validation. Deploy the repository root to Vercel with the standard Next.js preset; no environment variables are required.

## Updating products and pricing

Edit `src/data/products.ts`. The initial prices were verified against the public Groomed Gent Co. storefront on July 18, 2026. Recheck before each event. Only enter product claims and prices verified by Groomed Gent Co.; prices can use integer cents (`priceCents`) or an approved display label (`priceLabel`).

## Shopify requirement

The QR encodes `https://groomedgentco.com/discount/LEGACY15?redirect=%2F`. An authorized store administrator must create and activate `LEGACY15` in Shopify for 15% off the next online order, set the intended eligibility, usage, and date rules, and test it before the promotion is represented as operational.
