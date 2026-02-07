# 📘 Santako Music · Web & Plataforma Cultural

**Estado actual: MVP completo con integración WordPress**

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

| Ruta                | Función                                     |
| ------------------- | ------------------------------------------- |
| `/`                 | Home editorial                              |
| `/personas`         | Archivo de Personas (filtros + búsqueda)    |
| `/persona/[slug]`   | Ficha individual (artista, banda, DJ, etc.) |
| `/agenda`           | Agenda mensual                              |
| `/agenda/[fecha]`   | Vista Día (editorial)                       |
| `/evento/[slug]`    | Detalle de evento                           |
| `/podcast`          | Archivo Podcast                             |
| `/podcast/[slug]`   | Sesión mensual                              |
| `/noticias`         | Noticias desde WordPress                    |
| `/noticias/[slug]`  | Detalle de noticia                          |
| `/legal/aviso-legal`| Aviso legal (desde WordPress)               |
| `/legal/privacidad` | Política de privacidad (desde WordPress)    |
| `/legal/cookies`    | Política de cookies (desde WordPress)       |

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
│   │   ├── agenda/         # AgendaHome, AgendaList, CalendarMonth
│   │   ├── grid/           # ActivityGrid
│   │   ├── home/           # HeroEditorial, PodcastBlock, PersonaDestacada
│   │   ├── layout/         # Header, Footer
│   │   ├── nav/            # MainNav (desktop + mobile)
│   │   ├── personas/       # PersonasGrid
│   │   └── ui/             # Button, Card, Tag, Logo, CTAButton
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
Agenda | Personas | Podcast
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
2. **Navegación**: Agenda, Personas, Podcast, Contacto
3. **Legal**: Aviso legal, Privacidad, Cookies

### 6.2 Subfooter

- Copyright con año dinámico
- Redes sociales: Instagram, YouTube

---

## 7. Integración WordPress

### 7.1 Cliente API (`src/lib/wordpress.ts`)

```typescript
import { getPosts, getPageBySlug } from "../lib/wordpress";

// Obtener posts
const posts = await getPosts({ perPage: 12 });

// Obtener página por slug
const page = await getPageBySlug("aviso-legal");
```

### 7.2 Funciones disponibles

| Función           | Descripción                        |
| ----------------- | ---------------------------------- |
| `getPosts()`      | Lista de posts/noticias            |
| `getPostBySlug()` | Post individual por slug           |
| `getPages()`      | Lista de páginas                   |
| `getPageBySlug()` | Página individual por slug         |
| `getMedia()`      | Obtener imagen por ID              |
| `getLegalPages()` | Helper para las 3 páginas legales  |

### 7.3 Utilidades

- `stripHtml()` - Elimina tags HTML
- `decodeHtmlEntities()` - Decodifica entidades HTML

### 7.4 Notas

- **No requiere autenticación** (lectura pública)
- Contenido cacheado en build time (SSG)
- Para contenido dinámico: usar `output: 'server'` en Astro config

---

## 8. Modelo de Contenido

### 8.1 Tipos principales (ContentNode)

- **PERSONA**: Artistas, bandas, DJs
- **EVENTO**: Conciertos, sesiones
- **PODCAST**: Sesiones mensuales

### 8.2 Estructura común

```typescript
{
  type: "PERSONA" | "EVENTO" | "PODCAST",
  data: { ... },      // Contenido real
  style: { ... }      // Solo frontend (size, etc.)
}
```

### 8.3 PERSONA

```typescript
{
  title: string;
  slug: string;
  label: string;        // "DJ", "BANDA", "DUO"
  roles?: string[];     // ["dj", "artista"]
  bio?: string;
  genres?: string[];
  images?: string[];
  youtube?: string;
  related?: string[];
}
```

### 8.4 EVENTO

```typescript
{
  title: string;
  slug: string;
  date?: string;
  label: string;
  isLive?: boolean;
  isHero?: boolean;
  heroPriority?: number;
  heroImage?: string;
  images?: string[];
  related: string[];
}
```

---

## 9. Comandos

| Comando           | Acción                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Instala dependencias                |
| `npm run dev`     | Servidor local en `localhost:4321`  |
| `npm run build`   | Build de producción en `./dist/`    |
| `npm run preview` | Preview del build                   |

---

## 10. Tech Stack

- **Astro 5** - Framework
- **Tailwind CSS 4** - Estilos
- **TypeScript** - Tipado estricto
- **WordPress REST API** - CMS headless

---

## 11. Próximos Pasos

- [ ] Migrar todo el contenido mock a WordPress
- [ ] Implementar Custom Post Types en WordPress (Personas, Eventos, Podcast)
- [ ] Añadir filtros y búsqueda en Personas
- [ ] Sistema de caché para API de WordPress
- [ ] Optimización de imágenes (Astro Image)
