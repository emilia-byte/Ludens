"use client";

import { useSyncExternalStore } from "react";
import { readConsent, subscribeToConsent, type ConsentStatus } from "./consent";

/**
 * Devuelve la elección de cookies del usuario.
 * - `undefined`: todavía no se leyó (render en servidor o antes de hidratar).
 * - `null`: el usuario no eligió.
 */
export function useConsent(): ConsentStatus | null | undefined {
  return useSyncExternalStore(subscribeToConsent, readConsent, () => undefined);
}
