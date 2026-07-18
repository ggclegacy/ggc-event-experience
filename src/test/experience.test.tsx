import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScanPanel } from "@/components/ScanPanel";
import { ProductCatalog } from "@/components/ProductCatalog";
import { eventContent } from "@/data/content";
import type { Product } from "@/data/products";
import { supportsFullscreen, supportsWakeLock } from "@/hooks/useDisplayControls";

describe("event safeguards", () => {
  it("keeps the exact centralized campaign values", () => {
    expect(eventContent.discountUrl).toBe("https://groomedgentco.com/discount/LEGACY20?redirect=%2F");
    expect(eventContent.coupon).toBe("LEGACY20");
  });

  it("renders scan-critical copy and passes the exact QR destination", () => {
    render(<ScanPanel />);
    expect(screen.getByRole("heading", { name: "SCAN TO SHOP" })).toBeVisible();
    expect(screen.getByText("20% off your next online order")).toBeVisible();
    expect(screen.getByText("LEGACY20")).toBeVisible();
    expect(screen.getByRole("link", { name: "groomedgentco.com" })).toBeVisible();
    expect(screen.getByTestId("qr-frame")).toHaveAttribute("data-qr-value", eventContent.discountUrl);
  });

  it("renders zero, one, and several product states", () => {
    const item: Product = { id: "one", name: "Verified item", description: "Description", availability: "available", displayOrder: 1 };
    const { rerender } = render(<ProductCatalog products={[]} />);
    expect(screen.getByText(/today’s Groomed Gent Co. selection/i)).toBeVisible();
    rerender(<ProductCatalog products={[item]} />);
    expect(screen.getByText("Verified item")).toBeVisible();
    rerender(<ProductCatalog products={[item, { ...item, id: "two", name: "Second item", displayOrder: 2 }]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("feature-detects optional display APIs", () => {
    expect(supportsFullscreen({ fullscreenEnabled: false } as Document)).toBe(false);
    expect(supportsWakeLock({} as Navigator)).toBe(false);
    expect(supportsWakeLock({ wakeLock: {} } as Navigator)).toBe(true);
  });
});
