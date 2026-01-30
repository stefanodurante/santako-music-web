export const content: ContentNode[] = [
  {
    type: "EVENTO",
    style: { size: "large", color: "accent-event" },
    data: {
      title: "Raps de la Koma",
      label: "CONCIERTO",
      slug: "raps-de-la-koma",
      date: "2026-03-15",
      image: "/images/event-1.jpg",
      related: ["lia-kali"],
    },
  },
  {
    type: "PERSONA",
    style: { size: "medium", color: "accent-person" },
    data: {
      title: "Lia Kali",
      label: "ARTISTA",
      slug: "lia-kali",
      bio: "Voz emergente de la escena urbana...",
      image: "/images/person-1.jpg",
      related: ["raps-de-la-koma"],
    },
  },
];
