import type { ContentNode } from "../../types/content";

export const content: ContentNode[] = [
  {
    type: "EVENTO",
    style: { size: "large", color: "accent-event" },
    data: {
      title: "Raps de la Koma",
      label: "CONCIERTO",
      slug: "raps-de-la-koma",
      date: "2026-03-15",
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
      related: ["raps-de-la-koma"],
    },
  },
]; // Mock content data
