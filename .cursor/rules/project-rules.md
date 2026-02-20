---
description: Santako Music Project Rules - architecture, design and philosophy
alwaysApply: true
---

# Santako Music — Project Rules

## Filosofía

Santako Music Web es una infraestructura cultural digital.

No es solo una web de eventos.

Debe reflejar:

- Archivo Vivo (memoria editorial)
- Activación del presente
- Claridad conceptual y visual

Toda nueva funcionalidad debe aportar al menos uno de estos valores.

---

## Arquitectura (Astro)

- Priorizar render estático siempre que sea posible.
- Usar islands solo cuando haya interacción real.
- No hidratar componentes innecesarios.
- Separar datos, lógica y presentación.
- No mezclar fetch de datos con componentes visuales.
- Componentes pequeños y reutilizables.

---

## Diseño

- Mobile first obligatorio.
- Escala de espaciado consistente.
- Jerarquía tipográfica clara.
- No estilos inline.
- No animaciones innecesarias.

---

## Performance

- Cargar solo lo necesario.
- Evitar dependencias pesadas sin justificar.
- Optimizar imágenes y recursos estáticos.