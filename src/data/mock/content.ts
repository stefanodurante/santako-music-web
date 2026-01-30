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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Famous Monsters",
      label: "TRIBUTO",
      slug: "famous-monsters",
      genres: ["Punk"],
      members: ["Sergi Gallardo", "Oliver Cabrera"],
      bio: "Tributo acústico a Misfits con un show familiar y divertido.",
      instagram: "@headcrusher3",
      image: "/images/persona-placeholder.jpg",
      related: ["acoustic-nights"],
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    style: { size: "small", color: "accent-person" },
    data: {
      title: "Los Hijos de James",
      label: "DUO",
      slug: "los-hijos-de-james",
      genres: ["Pop", "Rock", "Indie"],
      members: ["Toni Civico", "Stefano Durante"],
      bio: "Dúo de versiones pop, rock e indie.",
      instagram: "@bonbonsabroson",
      image: "/images/persona-placeholder.jpg",
      related: ["acoustic-nights"],
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/persona-placeholder.jpg",
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
      image: "/images/evento-placeholder.jpg",
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
      image: "/images/evento-placeholder.jpg",
      related: [
        "famous-monsters",
        "paco-xavi",
        "daniel-higienico",
        "los-hijos-de-james",
      ],
    },
  },

  // ======================
  // PODCAST (FAKE, COHERENTE)
  // ======================

  {
    type: "PODCAST",
    style: { size: "medium", color: "accent-live" },
    data: {
      title: "Santako Podcast #12 · Escena Local",
      label: "PODCAST",
      slug: "podcast-12-escena-local",
      image: "/images/podcast-placeholder.jpg",
      related: ["toni-dj", "motosierras", "daniel-higienico"],
    },
  },

  {
    type: "PODCAST",
    style: { size: "small", color: "accent-live" },
    data: {
      title: "Santako Podcast #13 · Rock & Actitud",
      label: "PODCAST",
      slug: "podcast-13-rock-actitud",
      image: "/images/podcast-placeholder.jpg",
      related: ["motosierras", "eltoni-elpako-elaitor"],
    },
  },
];
