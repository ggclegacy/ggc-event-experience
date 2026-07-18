export type ProductAvailability = "available" | "limited" | "unavailable";

export interface Product {
  id: string;
  name: string;
  description: string;
  priceCents?: number;
  priceLabel?: string;
  availability: ProductAvailability;
  badge?: string;
  displayOrder: number;
}

/** Update product names, descriptions, availability, and verified prices here. */
export const products: Product[] = [
  {
    id: "reneuva-hair-serum",
    name: "RENEUVA — Peptide Hair Growth Serum",
    description: "Hair care from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 4999,
    availability: "available",
    badge: "Online collection",
    displayOrder: 1,
  },
  {
    id: "barbers-blend-oil",
    name: "Barber’s Blend Grooming Oil",
    description: "Grooming oil from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 3800,
    availability: "available",
    badge: "Online collection",
    displayOrder: 2,
  },
  {
    id: "luminis-moisturizer",
    name: "LUMINIS — Peptide Moisturizer",
    description: "Skin care from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 3499,
    availability: "available",
    badge: "Online collection",
    displayOrder: 3,
  },
  {
    id: "renova-night-cream",
    name: "RENOVA — Tallow Night Recovery Cream",
    description: "Night skin care from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 3299,
    availability: "available",
    badge: "Online collection",
    displayOrder: 4,
  },
  {
    id: "obsidian-ritual-cleanser",
    name: "OBSIDIAN RITUAL — Charcoal · Tea Tree · Aloe Cleanser",
    description: "Facial cleanser from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 2499,
    availability: "available",
    badge: "Online collection",
    displayOrder: 5,
  },
  {
    id: "obsidian-noir-body-bar",
    name: "OBSIDIAN NOIR — Charcoal Body Bar",
    description: "Body care from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 1799,
    availability: "available",
    badge: "Online collection",
    displayOrder: 6,
  },
  {
    id: "santal-noir-body-bar",
    name: "SANTAL NOIR — Sandalwood Body Bar",
    description: "Body care from the Groomed Gent Co. Legacy Reserve collection.",
    priceCents: 1799,
    availability: "available",
    badge: "Online collection",
    displayOrder: 7,
  },
];

export function formatProductPrice(product: Product): string {
  if (product.priceCents !== undefined) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
      product.priceCents / 100,
    );
  }
  return product.priceLabel ?? "Ask us for today’s pricing";
}
