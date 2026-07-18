"use client";

import { useState } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { BrandHeader } from "./BrandHeader";
import { DisplayControls } from "./DisplayControls";
import { ProductCatalog } from "./ProductCatalog";
import { ScanPanel } from "./ScanPanel";
import type { ExperienceMode } from "@/data/content";

export function EventExperience() {
  const [mode, setMode] = useState<ExperienceMode>("display");
  return (
    <main className={`experience experience--${mode}`}>
      <AmbientBackground />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <DisplayControls mode={mode} onModeChange={setMode} />
      <div id="main-content" className="experience__content">
        {mode === "display" ? (
          <div className="display-layout">
            <BrandHeader />
            <ScanPanel />
          </div>
        ) : (
          <div className="catalog-layout">
            <div className="catalog-layout__top">
              <BrandHeader compact />
              <ScanPanel compact />
            </div>
            <ProductCatalog />
          </div>
        )}
      </div>
    </main>
  );
}
