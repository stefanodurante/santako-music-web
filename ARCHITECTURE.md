# 📘 Santako Music · Web & Plataforma Cultural

**Estado actual: MVP completo con integración WordPress + Deploy Netlify**

> Resumen rápido: [README.md](README.md) · Manual operativo: [PROJECT_MANUALmd](PROJECT_MANUALmd)

---

## 1. Visión General · Archivo Vivo

Santako Music es una **infraestructura cultural digital**, no una simple web de eventos.

El proyecto se construye sobre el concepto de **Archivo Vivo**, donde:

- **El pasado** se dignifica mediante un archivo editorial (Personas, Podcast, crónicas).
- **El presente** se activa a través de una Agenda cultural dinámica y contextual.
- **El futuro** se impulsa mediante CTAs claros: booking, propuestas y contacto.

La navegación está diseñada bajo un principio fundamental:

> **Ningún usuario llega a un callejón sin salida.**
> Cada contenido conduce a otros contenidos relacionados, reforzando la exploración cultural.

---

## 2. Arquitectura de Rutas

| Ruta                  | Función                                     |
| --------------------- | ------------------------------------------- |
| `/`                   | Home editorial                              |
| `/agenda`             | Agenda mensual (Febrero 2026 por defecto)   |
| `/agenda/mes/[mes]`   | Agenda por mes (enero, febrero, marzo...)   |
| `/agenda/[fecha]`     | Vista Día (editorial)                       |
| `/evento/[slug]`      | Detalle de evento                           |
| `/personas`           | Archivo de Personas (filtros + búsqueda)    |
| `/persona/[slug]`     | Ficha individual (artista, banda, DJ, etc.) |
| `/actividades`        | Charlas, talleres, presentaciones           |
| `/actividad/[slug]`   | Detalle de actividad                        |
| `/podcast`            | Archivo Podcasts (2 grupos)                 |
| `/podcast/[slug]`     | Sesión con video embebido                   |
| `/contacto`           | Página de contacto                          |
| `/noticias`           | Noticias desde WordPress                    |
| `/noticias/[slug]`    | Detalle de noticia                          |
| `/legal/aviso-legal`  | Aviso legal (desde WordPress)               |
| `/legal/privacidad`   | Política de privacidad (desde WordPress)    |
| `/legal/cookies`      | Política de cookies (desde WordPress)       |

---

## 3. Estructura del Proyecto

```text
/
├── public/
│   ├── images/
│   │   ├── eventos/
│   │   └── personas/
│   └── logo/
├── src/
│   ├── components/
│   │   ├── agenda/         # AgendaHome, AgendaFilters
│   │   ├── grid/           # ActivityGrid
│   │   ├── home/           # HeroEditorial, PodcastBlock, PersonaDestacada, ContactBlock
│   │   ├── layout/         # Header, Footer
│   │   ├── nav/            # MainNav (desktop + mobile)
│   │   ├── personas/       # PersonasGrid
│   │   └── ui/             # Button, Card, Tag, CTAButton, LogoEditorial, LogoImage
│   ├── data/
│   │   └── mock/           # content.ts (datos temporales)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── wordpress.ts    # Cliente REST API WordPress
│   ├── pages/
│   ├── styles/
│   │   └── global.css      # Design system + variables
│   └── types/
│       └── content.ts      # TypeScript types
├── netlify.toml            # Configuración Netlify
└── package.json
```

---

## 4. Design System

### 4.1 Paleta de Colores

```css
/* Base */
--color-base: #F6F6F4;      /* Fondo principal */
--color-text: #0E0E10;      /* Texto */
--color-dark: #1C1C1E;      /* Fondos oscuros */

/* Accents (semánticos) */
--color-accent-person: #C61C6F;   /* Magenta */
--color-accent-event: #F05A28;    /* Naranja */
--color-accent-live: #9BFF00;     /* Verde lima */
--color-accent-podcast: #1C1C1E;  /* Oscuro */

/* Fondos de sección */
--color-bg-podcast: #1A1033;      /* Púrpura oscuro */
--color-bg-agenda: #FFE4DB;       /* Melocotón cálido */
```

### 4.2 Tipografía

- **Heading**: Fraunces (serif)
- **Body**: Inter (sans-serif)

### 4.3 Secciones Semánticas

Todas las secciones tienen `id` y `class` semánticas:

| Sección           | ID                  | Clase              |
| ----------------- | ------------------- | ------------------ |
| Hero              | `#hero`             | `.section-hero`    |
| Agenda Home       | `#agenda-home`      | `.section-agenda`  |
| Artista Destacado | `#artista-destacado`| `.section-featured`|
| Podcast           | `#podcast`          | `.section-podcast` |
| Archivo Vivo      | `#archivo`          | `.section-archive` |
| Contacto          | `#contacto`         | `.section-contact` |

---

## 5. Header & Navegación

### 5.1 Header

- **Home (top)**: Transparente, sin logo, texto blanco
- **Home (scroll)**: Sólido con logo, borde oscuro
- **Interiores**: Siempre sólido con logo

### 5.2 Navegación Desktop

```
Agenda | Personas | Actividades | Podcast
```

### 5.3 Navegación Mobile

- **Hamburguesa** (3 líneas)
- **Panel deslizante** desde la derecha (98% ancho)
- **Contenido**:
  - Logo arriba
  - Links de navegación
  - Contacto + enlaces legales abajo
- **Cierra con**: botón X, overlay, ESC, click en link

---

## 6. Footer

### 6.1 Estructura (3 columnas)

1. **Logo + descripción**
2. **Navegación**: Agenda, Personas, Actividades, Podcasts, Contacto
3. **Legal** (alineado derecha): Aviso legal, Privacidad, Cookies

### 6.2 Subfooter

- Copyright con año dinámico
- Redes sociales: Instagram, YouTube

---

## 7. Página de Podcasts

La página `/podcast` muestra dos grupos de podcasts:

### 7.1 Podcast Santako (oficial)
- Grid con miniaturas (3 columnas)
- Canal: `@santakomusic`

### 7.2 Clandestino Club Social
- Lista con descripción
- Canal: `@Clavoardiendovideo`
- Presentado por Marko Fontana

---

## 8. Página de Contacto

### 8.1 Secciones

1. **Colaboraciones**: Programación cultural
2. **Hazte Socio**: Info para nuevos socios

### 8.2 Redes Sociales
- Instagram
- YouTube

### 8.3 Ubicación
- Santa Coloma de Gramenet, Barcelona

---

## 9. Integración WordPress

### 9.1 Cliente API (`src/lib/wordpress.ts`)

```typescript
import { getPosts, getPageBySlug } from "../lib/wordpress";

// Obtener posts
const posts = await getPosts({ perPage: 12 });

// Obtener página por slug
const page = await getPageBySlug("aviso-legal");
```

### 9.2 Funciones disponibles

| Función           | Descripción                        |
| ----------------- | ---------------------------------- |
| `getPosts()`      | Lista de posts/noticias            |
| `getPostBySlug()` | Post individual por slug           |
| `getPages()`      | Lista de páginas                   |
| `getPageBySlug()` | Página individual por slug         |
| `getMedia()`      | Obtener imagen por ID              |
| `getLegalPages()` | Helper para las 3 páginas legales  |

### 9.3 Utilidades

- `stripHtml()` - Elimina tags HTML
- `decodeHtmlEntities()` - Decodifica entidades HTML

### 9.4 Notas

- **No requiere autenticación** (lectura pública)
- Contenido cacheado en build time (SSG)
- Para contenido dinámico: usar `output: 'server'` en Astro config

---

## 10. Modelo de Contenido

### 10.1 Tipos principales (ContentNode)

| Tipo | Descripción | Página |
|------|-------------|--------|
| **PERSONA** | Artistas, bandas, DJs | `/personas` |
| **EVENTO** | Conciertos, DJ sessions | `/agenda` |
| **ACTIVIDAD** | Charlas, talleres, presentaciones | `/actividades` |
| **PODCAST** | Sesiones mensuales | `/podcast` |

### 10.2 Estructura común

```typescript
{
  type: "PERSONA" | "EVENTO" | "PODCAST" | "ACTIVIDAD",
  data: {
    // ... campos específicos del tipo
    showOnHome?: boolean,  // Mostrar en Archivo Vivo (home)
    featured?: boolean,    // Destacar (tamaño grande en grids)
  }
}
```

### 10.3 PERSONA

```typescript
{
  title: string;
  slug: string;
  label: string;        // "DJ", "BANDA", "MC", "CANTAUTOR"
  roles?: string[];
  bio?: string;
  genres?: string[];
  images?: string[];
  youtube?: string;
  related?: string[];
  showOnHome?: boolean;
  featured?: boolean;
}
```

### 10.4 EVENTO

```typescript
{
  title: string;
  slug: string;
  date?: string;
  label?: string;       // "CONCIERTO", "DJ Set", etc.
  isLive?: boolean;
  isHero?: boolean;     // Mostrar en Hero de home
  heroPriority?: number;
  heroImage?: string;
  images?: string[];
  related?: string[];
  showOnHome?: boolean;
  featured?: boolean;
}
```

### 10.5 ACTIVIDAD

```typescript
{
  title: string;
  slug: string;
  date?: string;
  label: "CHARLA" | "TALLER" | "PRESENTACIÓN";
  description?: string;
  venue?: string;
  externalUrl?: string;
  images?: string[];
  related?: string[];
  showOnHome?: boolean;
  featured?: boolean;
}
```

### 10.6 PODCAST

```typescript
{
  title: string;
  slug: string;
  date?: string;
  description?: string;
  youtube?: {
    channel?: string;   // URL del canal
    videoUrl?: string;  // URL del vídeo
  };
  images?: string[];
  related?: string[];
  showOnHome?: boolean;
  featured?: boolean;
}
```

---

## 11. Deploy & Comandos

### 11.1 Comandos disponibles

| Comando              | Acción                                    |
| :------------------- | :---------------------------------------- |
| `npm install`        | Instala dependencias                      |
| `npm run dev`        | Servidor local en `localhost:4321`        |
| `npm run build`      | Build de producción en `./dist/`          |
| `npm run preview`    | Preview del build                         |
| `npm run deploy`        | Push a main (solo desde main)             |
| `npm run deploy:preview`| Build + Deploy preview (URL temporal)     |
| `npm run deploy:prod`   | Build + Deploy producción                 |
| `npm run test`          | Ejecuta tests (Vitest)                    |
| `npm run test:watch`    | Tests en modo watch                       |

### 11.2 Deploy con Netlify

**Producción (automático):**
```bash
git push origin main
# Netlify detecta el push y despliega automáticamente
```

**Preview (URL temporal):**
```bash
npm run build && netlify deploy --dir=dist
```

**Producción (manual con CLI):**
```bash
npm run build && netlify deploy --dir=dist --prod
```

### 11.3 Configuración Netlify (`netlify.toml`)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### 11.4 URL de producción

```
https://santakomusicwb.netlify.app
```

---

## 12. Tech Stack

- **Astro 5** - Framework
- **Tailwind CSS 4** - Estilos
- **TypeScript** - Tipado estricto
- **Vitest** - Testing
- **WordPress REST API** - CMS headless
- **Netlify** - Hosting & Deploy

---

## 13. Comandos Cursor

Di estas frases en chat (con o sin `/` según tu configuración):

| Comando | Acción |
|--------|--------|
| `new feature <nombre>` | Crea rama `feature/` desde develop |
| `new content <nombre>` | Crea rama `content/` desde develop |
| `new fix <nombre>` | Crea rama `fix/` desde develop |
| `merge feature` | Mergea la rama actual (feature/content/fix) a develop |
| `prepare production` | Mergea develop a main |
| `preview` | Build + Netlify deploy preview (URL temporal) |
| `deploy prod` | Push a main (Netlify auto-deploy, requiere estar en main) |

### Formato de commit

`type: short description` — tipos: feat, content, fix, refactor, style, docs, chore

### Skills Cursor (4 roles)

Ver [PROJECT_MANUALmd](PROJECT_MANUALmd) §7: Arquitecto Astro, Diseñador Sistema Cultural, Editor Archivo Vivo, Guardián de Coherencia.

---

## 14. Próximos Pasos

- [ ] Migrar todo el contenido mock a WordPress
- [ ] Implementar Custom Post Types en WordPress (Personas, Eventos, Actividades, Podcast)
- [ ] Añadir filtros y búsqueda en Personas
- [ ] Sistema de caché para API de WordPress
- [ ] Optimización de imágenes (Astro Image)
- [ ] Dominio personalizado en Netlify
