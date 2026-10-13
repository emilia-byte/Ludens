# Ludens SA: sitio web

Landing de una página y Política de cookies para Ludens SA (Montevideo, Uruguay).
Next.js 16 (App Router), TypeScript, Tailwind CSS v4 y lucide-react.

## Cómo correrlo

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build      # build de producción
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Todos los textos y datos de contacto | `content/site.ts` |
| Política de cookies (borrador legal) | `content/cookie-policy.tsx` |
| Tokens de diseño (colores, fuentes, radios) | `app/globals.css` (`@theme`) |
| Componentes reutilizables | `components/ui/` |
| Secciones de la landing | `components/sections/` |
| Banner de cookies y scripts condicionados | `components/cookies/`, `lib/consent.ts` |
| Envío del formulario (por conectar) | `lib/contact.ts` |

## Cookies

La elección se guarda en `localStorage` (`ludens-cookie-consent`). Google Analytics solo se carga si
el usuario acepta y si `NEXT_PUBLIC_GA_ID` está definido. "Configurar cookies" en el footer vuelve a
mostrar el banner.

## Deploy

**Vercel:** importar el repositorio en vercel.com; no requiere configuración. Ojo: el plan Hobby
(gratis) no permite uso comercial, así que un sitio de empresa necesita el plan Pro.

**Alternativa gratuita (Cloudflare Pages u otro hosting estático):** en `next.config.ts` reemplazar
`cacheComponents` y `partialPrefetching` por `output: "export"` (probado: compila sin otros cambios).
Comando de build `npm run build`, carpeta de salida `out`.

Variables de entorno opcionales: ver `.env.example`.

## Pendientes (TODO)

- Logo final en SVG del diseñador (`components/ui/Logo.tsx`, `app/icon.svg`).
- Hex exactos de Eléctrico y Señal (`app/globals.css`).
- Captura real de MarketOnline (`public/`, `content/site.ts` → `marketOnline.image`).
- Cifras reales de métricas (hoy "XX" en `content/site.ts`).
- Confirmar email de contacto (`content/site.ts`).
- Revisión legal de la política de cookies (`content/cookie-policy.tsx`).
- Conectar el formulario de contacto (`lib/contact.ts`).
- Revisar las descripciones de servicios (redacción nueva).
