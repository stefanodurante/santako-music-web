# 📘 Santako Music — Manual Operativo

Documento maestro del proyecto.
Define visión, arquitectura, flujo de trabajo y criterio estratégico.

---

# 1. Identidad del Proyecto

Santako Music no es una web de eventos.

Es una **infraestructura cultural digital** basada en:

- Archivo Vivo (memoria editorial)
- Activación del presente
- Proyección futura (colaboraciones, booking, comunidad)

Principio clave:

> Ningún usuario llega a un callejón sin salida.

Todo contenido conecta con otros contenidos.

---

# 2. Arquitectura Técnica

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript (estricto)
- WordPress REST API (headless)
- Netlify (deploy automático)

## Principios técnicos

- Priorizar render estático (SSG).
- Usar islands solo cuando haya interacción real.
- Separar datos, lógica y UI.
- No mezclar fetch con componentes visuales.
- Respetar el modelo ContentNode.
- Evitar dependencias innecesarias.

---

# 3. Sistema de Diseño

## Tipografía

- Heading: Fraunces
- Body: Inter

## Colores

Colores semánticos:
- PERSONA → magenta
- EVENTO → naranja
- LIVE → lima
- PODCAST → oscuro

## Reglas visuales

- Mobile first obligatorio.
- Escala de espaciado consistente.
- Jerarquía tipográfica clara.
- Minimalismo con intención.
- Nada decorativo sin función.

---

# 4. Modelo de Contenido

Tipos principales:

- PERSONA
- EVENTO
- ACTIVIDAD
- PODCAST

Todos comparten estructura común basada en `ContentNode`.

Propiedades clave:

- showOnHome
- featured
- related[]

El contenido debe estar interconectado.

---

# 5. Flujo Git Oficial

Ramas:

- main → producción
- develop → integración estable
- feature/*
- content/*
- fix/*
- refactor/*

Flujo:

feature → develop → main → Netlify

Nunca trabajar directamente en main.

Commits:

type: descripción corta

Tipos válidos:

feat
content
fix
refactor
style
docs
chore

---

# 6. Deploy

Producción:

git push origin main

Preview:

npm run build
netlify deploy --dir=dist

---

# 7. Skills Operativas (Cursor)

El proyecto utiliza 4 roles mentales:

## 1. Arquitecto Astro
Revisión estructural y técnica.

## 2. Diseñador Sistema Cultural
Revisión de jerarquía visual y coherencia.

## 3. Editor Archivo Vivo
Revisión editorial y claridad narrativa.

## 4. Guardián de Coherencia
Validación estratégica y conceptual.

---

# 8. Criterio Estratégico

Antes de añadir cualquier funcionalidad, preguntarse:

- ¿Refuerza el Archivo Vivo?
- ¿Activa escena?
- ¿Conecta contenidos?
- ¿Mantiene simplicidad?

Si no cumple al menos uno, se reconsidera.

---

# 9. Próximas Evoluciones

- [x] Filtros y búsqueda en Personas
- Migración completa a WordPress CPT
- Sistema de caché API
- Optimización de imágenes
- Dominio personalizado
- CI para build obligatorio antes de merge