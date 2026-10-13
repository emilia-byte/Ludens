import type { Locale } from "@/lib/i18n";
import { de } from "./de";
import { en } from "./en";
import { es, type Dictionary } from "./es";
import { fr } from "./fr";
import { he } from "./he";
import { it } from "./it";
import { nl } from "./nl";
import { pt } from "./pt";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { es, en, pt, it, de, nl, fr, he };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
