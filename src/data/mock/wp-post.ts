export type WPPost = {
    source: "WP";
    title: string;
    slug: string;
    date: string;
    excerpt: string;
  };
  
  export const wpPosts: WPPost[] = [
    {
      source: "WP",
      title: "Jam Session Can Sisteré",
      slug: "jam-session-can-sistere",
      date: "2025-04-10",
      excerpt:
        "Una noche de improvisación y conexión musical en el corazón del barrio.",
    },
    {
      source: "WP",
      title: "Santako Vibes Radio · Especial Primavera",
      slug: "santako-vibes-radio-primavera",
      date: "2025-04-03",
      excerpt:
        "Programa especial con artistas locales y conversación sobre escena urbana.",
    },
    {
      source: "WP",
      title: "Crónica · Acoustic Nights",
      slug: "cronica-acoustic-nights",
      date: "2025-03-28",
      excerpt:
        "Un repaso visual y emocional a una de las noches acústicas más especiales.",
    },
  ];
  