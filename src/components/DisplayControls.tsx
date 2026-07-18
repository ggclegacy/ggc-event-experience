"use client";

import type { ExperienceMode } from "@/data/content";
import { useDisplayControls } from "@/hooks/useDisplayControls";

export function DisplayControls({ mode, onModeChange }: { mode: ExperienceMode; onModeChange: (mode: ExperienceMode) => void }) {
  const controls = useDisplayControls();
  return (
    <aside className="controls" aria-label="Display controls">
      <div className="mode-switch" role="group" aria-label="Experience mode">
        {(["display", "catalog"] as const).map((value) => (
          <button key={value} type="button" className={mode === value ? "is-selected" : ""} aria-pressed={mode === value} onClick={() => onModeChange(value)}>
            {value[0].toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>
      <div className="browser-controls">
        {controls.fullscreenSupported && (
          <button type="button" onClick={controls.toggleFullscreen} aria-pressed={controls.isFullscreen}>
            {controls.isFullscreen ? "Exit full screen" : "Full screen"}
          </button>
        )}
        {controls.wakeSupported && (
          <button type="button" onClick={controls.toggleWakeLock} aria-pressed={controls.keepAwake}>
            {controls.keepAwake ? "Screen awake" : "Keep awake"}
          </button>
        )}
      </div>
      <p className={`control-status control-status--${controls.message.kind}`} aria-live="polite">{controls.message.text}</p>
    </aside>
  );
}
