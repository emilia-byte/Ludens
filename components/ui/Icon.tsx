import {
  Globe,
  Layers,
  Megaphone,
  Palette,
  Share2,
  Smartphone,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/site";

const icons = {
  megaphone: Megaphone,
  palette: Palette,
  share: Share2,
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" {...props} />;
}
