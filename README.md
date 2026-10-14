# Ludens SA: sitio web

Landing de una página y Política de cookies para Ludens SA (Montevideo, Uruguay), en 8 idiomas:
español (principal), inglés, portugués, italiano, alemán, neerlandés, francés y hebreo (de derecha a izquierda).
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
| Textos de cada idioma (incluida la política de cookies) | `content/dictionaries/*.ts` |
| Datos que no se traducen (contacto, URLs, imágenes, cifras de métricas) | `content/site.ts` |
| Idiomas disponibles y detección del idioma | `lib/i18n.ts`, `proxy.ts` |
| Tokens de diseño (colores, fuentes, radios) | `app/globals.css` (`@theme`) |
| Componentes reutilizables | `components/ui/` |
| Secciones de la landing | `components/sections/` |
| Páginas (una por idioma) | `app/[lang]/` |
| Banner de cookies y scripts condicionados | `components/cookies/`, `lib/consent.ts` |
| Envío del formulario (por conectar) | `lib/contact.ts` |

## Idiomas

Cada idioma vive en `/es`, `/en`, `/pt`, `/it`, `/de`, `/nl`, `/fr` y `/he`. Quien entra a `/` es redirigido
al idioma de su navegador (o a español si no está disponible). Para editar un texto, cambialo en
`content/dictionaries/<idioma>.ts`; TypeScript avisa si a un idioma le falta alguna clave.

Para agregar un idioma: sumalo en `lib/i18n.ts` (`locales` y `localeNames`), creá su diccionario
copiando `es.ts` y registralo en `content/dictionaries/index.ts`.

## Cookies

La elección se guarda en `localStorage` (`ludens-cookie-consent`). Google Analytics solo se carga si
el usuario acepta y si `NEXT_PUBLIC_GA_ID` está definido. "Configurar cookies" en el footer vuelve a
mostrar el banner.

## Deploy

**Vercel:** importar el repositorio en vercel.com; no requiere configuración. Ojo: el plan Hobby
(gratis) no permite uso comercial, así que un sitio de empresa necesita el plan Pro.

**Alternativa gratuita (hosting estático):** requiere ajustes, porque la detección de idioma usa
`proxy.ts`, que no funciona en un export estático (habría que reemplazarla por una redirección fija a `/es`).

Variables de entorno opcionales: ver `.env.example`.

## Pendientes (TODO)

- Logo: redibujado en vector desde el PNG original (`components/ui/Logo.tsx`, `public/logo-ludens-isotipo.svg`). Reemplazar por el archivo vectorial original si existe.
- Confirmar paleta final (naranja, verde, carbón; celeste solo en MarketOnline) en `app/globals.css`.
- Revisión de las traducciones por hablantes nativos (en especial hebreo y la política de cookies).
- Confirmar email de contacto (`content/site.ts`).
- Revisión legal de la política de cookies en todos los idiomas (`content/dictionaries/*.ts` → `cookiePolicy`).
- Conectar el formulario de contacto (`lib/contact.ts`).
- Revisar las descripciones de servicios (redacción nueva).
