import type { ContentNode } from "../../types/content";

export const content: ContentNode[] = [
  // ======================
  // PERSONAS
  // ======================

  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Toni Dj",
      label: "DJ",
      slug: "toni-dj",

      genres: ["Electrónica", "Pop"],

      members: ["Toni Díaz"],

      bio: "Sesión ecléctica de hits atemporales y actuales para disfrutar y bailar.",

      instagram: "@tonidjbcn",

      images: [
        "/images/personas/toni-dj-1.jpg",
        "/images/personas/toni-dj-2.jpg",
        "/images/personas/toni-dj-3.jpg",
      ],

      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "large", color: "accent-person" },
    data: {
      title: "Motosierras",
      label: "BANDA",
      slug: "motosierras",
      genres: ["Rock", "Punk"],
      members: [
        "Jose Maria Santos",
        "Xavi Morell",
        "Johnny Fuentes",
        "J. Morton",
      ],
      bio: "Rock and roll acelerado, directo y lleno de emoción.",
      instagram: "@motosierrasband",
      youtube: "https://youtube.com/@motosierrasband",
      images: [
        "/images/personas/motosierras-1.jpg",
        "/images/personas/motosierras-2.jpg",
        "/images/personas/motosierras-3.jpg",
      ],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Frantxu Kalamaro",
      label: "ARTISTA",
      slug: "frantxu-kalamaro",
      genres: ["Pop", "Rock"],
      members: ["Frantxu Kalamaro"],
      bio: "Showman pop-rock, imitaciones y animación musical.",
      instagram: "@frantxukalamaro",
      youtube: "https://youtu.be/fF-SFgbS5VM",
      images: ["/images/personas/frantxu-kalamaro-1.jpg"],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "large", color: "accent-person" },
    data: {
      title: "Sr. Q",
      label: "BANDA",
      slug: "sr-q",
      genres: ["Rock", "Pop"],
      members: ["Paco Almendros", "Xavi Cano", "Carlos Solans", "Jordi Prat"],
      bio: "Banda de versiones y temas propios con espíritu rock clásico.",
      instagram: "@srq_grup",
      images: ["/images/personas/sr-q-1.jpg"],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "DKORALES",
      label: "BANDA",
      slug: "dkorales",
      genres: ["Rock", "Folk"],
      members: ["Jordi Román", "Guillermo Palma", "José Bass", "Joan Pons"],
      bio: "Rock andaluz con influencias folk y un directo muy potente.",
      instagram: "@dkorales23",
      images: [
        "/images/personas/dkorales-1.jpg",
        "/images/personas/dkorales-2.jpg",
        "/images/personas/dkorales-3.jpg",
      ],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "small", color: "accent-person" },
    data: {
      title: "Paco & Xavi",
      label: "DUO",
      slug: "paco-xavi",
      genres: ["Blues", "Folk"],
      members: ["Paco Almendros", "Xavi Cano"],
      bio: "Versiones en formato semiacústico de clásicos pop y rock.",
      instagram: "@xavicanobello",
      images: [
        "/images/personas/paco-xavi-1.jpg",
        "/images/personas/paco-xavi-2.jpg",
        "/images/personas/paco-xavi-3.jpg",
      ],
      related: ["acoustic-nights"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "large", color: "accent-person" },
    data: {
      title: "Daniel Higiénico",
      label: "CANTAUTOR",
      slug: "daniel-higienico",
      genres: ["Rock", "Cantautor"],
      members: ["Daniel Soler"],
      bio: "Cantautor con humor, teatro y espíritu rock.",
      instagram: "@daniel.higienico",
      youtube: "https://youtu.be/I7UTZF51TYA",
      images: [
        "/images/personas/daniel-higienico-1.jpg",
        "/images/personas/daniel-higienico-2.jpg",
        "/images/personas/daniel-higienico-3.jpg",
      ],
      related: ["acoustic-nights"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Apto Para Consumo",
      label: "BANDA",
      slug: "apto-para-consumo",
      genres: ["Pop", "Rock"],
      members: [
        "Raul Lopez",
        "Agus",
        "Emilio",
        "Virginia",
        "Jordi",
        "Andrés",
        "Eva",
      ],
      bio: "Versiones pop-rock españolas de los 80 y 90. Fiesta asegurada.",
      instagram: "@aptoparaconsumobcn",
      images: [
        "/images/personas/apto-para-consumo-1.jpg",
        "/images/personas/apto-para-consumo-2.jpg",
        "/images/personas/apto-para-consumo-3.jpg",
      ],
      related: ["santako-live-sessions"],
    },
  },
  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Dj Albert B",
      label: "DJ",
      slug: "dj-albert-b",
      genres: ["Electrónica", "Funk", "Pop"],
      members: ["Albert Bastida"],
      bio: "DJ con fuerte conexión con el público y gran versatilidad musical.",
      instagram: "@abp_365",
      images: [
        "/images/personas/dj-albert-b-1.jpg",
        "/images/personas/dj-albert-b-2.jpg",
        "/images/personas/dj-albert-b-3.jpg",
      ],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "large", color: "accent-person" },
    data: {
      title: "Eltoni, Elpako & Elaitor",
      label: "BANDA",
      slug: "eltoni-elpako-elaitor",
      genres: ["Punk"],
      members: ["Antonio Molina", "Paco Molina", "Aitor Sotillos"],
      bio: "Trío de punk psicodélico con actitud festiva y mensaje de amistad.",
      instagram: "@eltonielpakoelaitor",
      images: [
        "/images/personas/eltoni-elpako-elaitor-1.jpg",
        "/images/personas/eltoni-elpako-elaitor-2.jpg",
        "/images/personas/eltoni-elpako-elaitor-3.jpg",
      ],
      related: ["santako-live-sessions"],
    },
  },

  // ======================
  // EVENTOS (FAKE, COHERENTES)
  // ======================

  {
    type: "EVENTO",
    style: { size: "large", color: "accent-event" },
    data: {
      title: "Santako Live Sessions",
      label: "CONCIERTO",
      slug: "santako-live-sessions",
      date: "2025-06-14",
      images: [
        "/images/personas/santako-live-sessions-1.jpg",
        "/images/personas/santako-live-sessions-2.jpg",
        "/images/personas/santako-live-sessions-3.jpg",
      ],
      related: ["toni-dj", "motosierras", "sr-q", "dkorales", "dj-albert-b"],
    },
  },

  {
    type: "EVENTO",
    style: { size: "medium", color: "accent-event" },
    data: {
      title: "Acoustic Nights",
      label: "CONCIERTO",
      slug: "acoustic-nights",
      date: "2025-05-30",
      images: [
        "/images/personas/acoustic-nights-1.jpg",
        "/images/personas/acoustic-nights-2.jpg",
        "/images/personas/acoustic-nights-3.jpg",
      ],
      related: [
        "famous-monsters",
        "paco-xavi",
        "daniel-higienico",
        "los-hijos-de-james",
      ],
    },
  },
  {
    type: "EVENTO",
    style: { size: "medium", color: "accent-event" },
    data: {
      title: "Podcast Santako Live · Escena Local",
      slug: "podcast-santako-live-escena-local",
      label: "Podcast en directo",
      date: "2025-04-30",
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["daniel-higienico"],
    },
  },

  {
    type: "EVENTO",
    style: { size: "small", color: "accent-event" },
    data: {
      title: "DJ Session · Santako Nights",
      slug: "dj-session-santako-nights",
      label: "DJ Set",
      date: "2025-04-18",
      images: ["/images/eventos/dj-session-1.jpg"],
      related: ["dj-albert-b"],
    },
  },
  // ======================
  // PODCAST (FAKE, COHERENTE)
  // ======================
  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Abril 2025",
      slug: "podcast-santako-abril-2025",

      date: "2025-04-30",

      description:
        "Sesión mensual del podcast Santako Music grabada en directo, con invitados de la escena local.",

      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=XXXXXXXX",
      },

      images: ["/images/podcast/podcast-abril-2025.jpg"],

      related: ["dj-albert-b", "daniel-higienico"],
    },
  },
];
