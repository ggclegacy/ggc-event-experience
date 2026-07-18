"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ControlMessage = { kind: "idle" | "success" | "error"; text: string };

export function supportsFullscreen(doc: Document = document) {
  return Boolean(doc.fullscreenEnabled && doc.documentElement.requestFullscreen);
}

export function supportsWakeLock(nav: Navigator = navigator) {
  return "wakeLock" in nav;
}

export function useDisplayControls() {
  const [fullscreenSupported, setFullscreenSupported] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [wakeSupported, setWakeSupported] = useState(false);
  const [keepAwake, setKeepAwake] = useState(false);
  const [message, setMessage] = useState<ControlMessage>({ kind: "idle", text: "" });
  const wakeRef = useRef<WakeLockSentinel | null>(null);
  const preferenceRef = useRef(false);

  const requestWakeLock = useCallback(async () => {
    if (!("wakeLock" in navigator)) return;
    try {
      wakeRef.current = await navigator.wakeLock.request("screen");
      setKeepAwake(true);
      setMessage({ kind: "success", text: "Screen will stay awake." });
      wakeRef.current.addEventListener("release", () => {
        wakeRef.current = null;
        setKeepAwake(false);
      }, { once: true });
    } catch {
      preferenceRef.current = false;
      setKeepAwake(false);
      setMessage({ kind: "error", text: "Screen wake lock was not available." });
    }
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setFullscreenSupported(supportsFullscreen());
      setWakeSupported(supportsWakeLock());
    });
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onVisibility = () => {
      if (document.visibilityState === "visible" && preferenceRef.current && !wakeRef.current) {
        void requestWakeLock();
      }
    };
    document.addEventListener("fullscreenchange", onFullscreen);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("visibilitychange", onVisibility);
      void wakeRef.current?.release();
    };
  }, [requestWakeLock]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setMessage({ kind: "success", text: document.fullscreenElement ? "Full screen active." : "Full screen updated." });
    } catch {
      setMessage({ kind: "error", text: "Full screen could not be changed." });
    }
  }, []);

  const toggleWakeLock = useCallback(async () => {
    if (preferenceRef.current) {
      preferenceRef.current = false;
      await wakeRef.current?.release();
      wakeRef.current = null;
      setKeepAwake(false);
      setMessage({ kind: "success", text: "Screen wake lock off." });
    } else {
      preferenceRef.current = true;
      await requestWakeLock();
    }
  }, [requestWakeLock]);

  return { fullscreenSupported, isFullscreen, toggleFullscreen, wakeSupported, keepAwake, toggleWakeLock, message };
}
