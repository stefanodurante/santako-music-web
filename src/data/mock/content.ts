import type { ContentNode } from "../../types/content";

export const content: ContentNode[] = [
  // ======================
  // PERSONAS
  // ======================

  {
    type: "PERSONA",
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
      showOnHome: true,
      featured: true,
    },
  },

  {
    type: "PERSONA",
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
      showOnHome: true,
    },
  },

  {
    type: "PERSONA",
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
      showOnHome: true,
    },
  },

  {
    type: "PERSONA",
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
    data: {
      title: "Daniel Higiénico",
      label: "CANTAUTOR",
      slug: "daniel-higienico",
      genres: ["Rock", "Cantautor"],
      members: ["Daniel Soler"],
      bio: "Cantautor con humor, teatro y espíritu rock.",
      instagram: "@daniel.higienico",
      youtube: "https://youtu.be/I7UTZF51TYA",
      images: ["/images/personas/daniel-higienico-1.jpg"],
      related: ["acoustic-nights"],
      showOnHome: true,
      featured: true,
    },
  },

  {
    type: "PERSONA",
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
      images: ["/images/personas/apto-para-consumo-1.jpg"],
      related: ["santako-live-sessions"],
      showOnHome: true,
    },
  },
  {
    type: "PERSONA",
    data: {
      title: "Dj Albert B",
      label: "DJ",
      slug: "dj-albert-b",
      genres: ["Electrónica", "Funk", "Pop"],
      members: ["Albert Bastida"],
      bio: "DJ con fuerte conexión con el público y gran versatilidad musical.",
      instagram: "@abp_365",
      images: ["/images/personas/dj-albert-b-1.jpg"],
      related: ["santako-live-sessions"],
      showOnHome: true,
    },
  },

  {
    type: "PERSONA",
    data: {
      title: "Eltoni, Elpako & Elaitor",
      label: "BANDA",
      slug: "eltoni-elpako-elaitor",
      genres: ["Punk"],
      members: ["Antonio Molina", "Paco Molina", "Aitor Sotillos"],
      bio: "Trío de punk psicodélico con actitud festiva y mensaje de amistad.",
      instagram: "@eltonielpakoelaitor",
      images: ["/images/personas/eltoni-elpako-elaitor-1.jpg"],
      related: ["santako-live-sessions"],
    },
  },

  {
    type: "PERSONA",
    data: {
      title: "Marko Fontana",
      label: "MC",
      slug: "marko-fontana",
      genres: ["Hip Hop", "Soul", "Música Negra"],
      members: ["Marco Fonktana"],
      bio: "Marco Fonktana a.k.a ElTornado es un veterano MC, músico y activista de la escena del hip hop y la música negra de Barcelona. Parte activa de bandas como Soul Divos, Aerolineas Subterraneas y Hombres Bala, ha colaborado en multitud de proyectos con artistas tanto en directo como en estudio. Inquieto y con espíritu divulgador, su estilo costumbrista y elegante ha recorrido la mayoría de la geografía española. Ahora presenta Clave Ardiendo, un podcast donde da cabida a lo que no tiene cabida en el circuito oficial.",
      youtube: "https://www.youtube.com/@Clavoardiendovideo",
      images: ["/images/personas/marko-fontana-1.jpg"],
      related: ["clave-ardiendo"],
    },
  },

  // ======================
  // EVENTOS (FAKE, COHERENTES)
  // ======================

  // 🔥 EVENTO HERO ACTUAL - Febrero 2026
  {
    type: "EVENTO",
    data: {
      title: "Nit de Blues · Psycho Club",
      slug: "nit-de-blues-psycho-club-2026",
      label: "CONCIERTO",
      date: "2026-02-14",

      images: ["/images/eventos/jam-sistere-1.jpg"],
      heroImage: "/images/eventos/jam-sistere-1.jpg",

      isHero: true,
      heroPriority: 1,

      related: ["daniel-higienico", "dkorales"],
    },
  },
  {
    type: "EVENTO",
    data: {
      title: "Santako Live Sessions",
      label: "CONCIERTO",
      slug: "santako-live-sessions",
      date: "2025-06-14",
      images: [
        "/images/eventos/event-1.jpg",
      ],
      related: ["toni-dj", "motosierras", "sr-q", "dkorales", "dj-albert-b"],
      showOnHome: true,
    },
  },

  {
    type: "EVENTO",
    data: {
      title: "Acoustic Nights",
      label: "CONCIERTO",
      slug: "acoustic-nights",
      date: "2025-05-30",
      images: ["/images/eventos/event-1.jpg"],
      related: [
        "famous-monsters",
        "paco-xavi",
        "daniel-higienico",
        "los-hijos-de-james",
      ],
      showOnHome: true,
    },
  },
  {
    type: "EVENTO",
    data: {
      title: "Podcast Santako Live · Escena Local",
      slug: "podcast-santako-live-escena-local",
      label: "Podcast en directo",
      date: "2025-04-30",
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["daniel-higienico"],
      showOnHome: true,
    },
  },

  {
    type: "EVENTO",
    data: {
      title: "DJ Session · Santako Nights",
      slug: "dj-session-santako-nights",
      label: "DJ Set",
      date: "2025-04-18",
      images: ["/images/eventos/dj-session-1.jpg"],
      related: ["dj-albert-b"],
      showOnHome: true,
    },
  },
  // ======================
  // PODCASTS
  // ======================

  // 🎙️ PODCAST OFICIAL SANTAKO MUSIC
  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Enero 2026",
      slug: "podcast-santako-enero-2026",
      date: "2026-01-28",
      description:
        "Arrancamos el año con una sesión especial del podcast oficial de Santako Music. Repasamos lo mejor de 2025 y avanzamos los proyectos de este nuevo año.",
      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["daniel-higienico", "dkorales"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Diciembre 2025",
      slug: "podcast-santako-diciembre-2025",
      date: "2025-12-18",
      description:
        "Último podcast del año con invitados especiales. Celebramos la música local y brindamos por un 2026 lleno de ritmo.",
      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["motosierras", "sr-q"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Octubre 2025",
      slug: "podcast-santako-octubre-2025",
      date: "2025-10-15",
      description:
        "Especial otoño con artistas que han marcado el año. Hablamos de festivales, bolos y proyectos futuros.",
      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["eltoni-elpako-elaitor"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Julio 2025",
      slug: "podcast-santako-julio-2025",
      date: "2025-07-20",
      description:
        "Edición veraniega con repaso a la temporada de festivales y conciertos al aire libre en Santa Coloma.",
      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["dj-albert-b", "malas-formas"],
    },
  },

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
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["dj-albert-b", "daniel-higienico"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Podcast Santako · Febrero 2025",
      slug: "podcast-santako-febrero-2025",
      date: "2025-02-14",
      description:
        "San Valentín musical: hablamos de canciones de amor, desamor y todo lo que hay entre medias con artistas locales.",
      youtube: {
        channel: "https://www.youtube.com/@santakomusic",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["paco-xavi", "apto-para-consumo"],
    },
  },

  // 🔥 CLAVE ARDIENDO - Podcast de Marko Fontana
  {
    type: "PODCAST",
    data: {
      title: "Clave Ardiendo · Clandestino Club Social #12",
      slug: "clave-ardiendo-clandestino-12",
      date: "2026-01-15",
      description:
        "Marko Fontana recibe a veteranos de la escena hip hop barcelonesa para hablar de los orígenes del movimiento, las batallas de gallos y la evolución del rap en castellano.",
      youtube: {
        channel: "https://www.youtube.com/@Clavoardiendovideo",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["marko-fontana"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Clave Ardiendo · Clandestino Club Social #11",
      slug: "clave-ardiendo-clandestino-11",
      date: "2025-12-10",
      description:
        "En este episodio hablamos de música negra, soul y funk con músicos que llevan décadas en la escena underground de Barcelona.",
      youtube: {
        channel: "https://www.youtube.com/@Clavoardiendovideo",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["marko-fontana"],
    },
  },

  {
    type: "PODCAST",
    data: {
      title: "Clave Ardiendo · Clandestino Club Social #10",
      slug: "clave-ardiendo-clandestino-10",
      date: "2025-11-05",
      description:
        "Especial reggae y dub. Marko Fontana conversa con selectores y soundsystems que llevan el mensaje roots por toda la península.",
      youtube: {
        channel: "https://www.youtube.com/@Clavoardiendovideo",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      images: ["/images/eventos/podcast-live-1.jpg"],
      related: ["marko-fontana"],
    },
  },

  // ======================
  // ACTIVIDADES (Charlas, Talleres, Presentaciones)
  // ======================
  {
    type: "ACTIVIDAD",
    data: {
      title: "La rebelión de RadioActivas",
      slug: "rebelion-radioactivas",
      date: "2024-10-18",
      label: "PRESENTACIÓN",
      description:
        "Radioactivas presentan REBELIÓN en una fiesta que tendrá lugar en Psycho Rock&Roll Club. Presentación de su nuevo disco con vinylo, videoclip, sorteos, merchan y mucho más.",
      venue: "Psycho Rock&Roll Club, carrer de Piquer 27",
      related: [],
      showOnHome: true,
    },
  },

  {
    type: "ACTIVIDAD",
    data: {
      title: "Charla con Ferran Boutin: Santakomusic, Blues y Betis",
      slug: "charla-ferran-boutin",
      date: "2021-02-12",
      label: "CHARLA",
      description:
        "Primera charla de la serie con socios de SantakoMusic. Ferran Boutin, presidente de la asociación, nos habla del nacimiento de SantakoMusic y de sus proyectos artísticos.",
      externalUrl: "https://stereo.com/santakomusic",
      related: [],
    },
  },
];
