"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

// El año se lee en el navegador, así el footer nunca queda desactualizado y el
// prerender no depende de la fecha (funciona en Vercel y en un export estático).
export function CurrentYear() {
  return <>{useSyncExternalStore(subscribe, getYear, getServerYear)}</>;
}
