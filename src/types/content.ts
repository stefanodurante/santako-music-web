export type ContentType = "EVENTO" | "PERSONA" | "PODCAST";

/** Supported image formats */
export type ImagePath = `${string}.${"jpg" | "jpeg" | "png" | "webp"}`;

/**
 * SOLO FRONTEND (grid / cards)
 */
export type ContentStyle = {
  size?: "small" | "medium" | "large";
  color?: "accent-event" | "accent-person" | "accent-live";
};

/**
 * PERSONA
 */
export type PersonaData = {
  title: string;
  label: string;
  slug: string;

  roles?: string[];

  bio?: string;
  genres?: string[];
  members?: string[];

  instagram?: string;
  youtube?: string;

  images: ImagePath[];

  related?: string[];
};

/**
 * EVENTO
 */
export type EventoData = {
  title: string;
  label?: string;
  slug: string;
  date?: string;

  images?: ImagePath[];

  isLive?: boolean;
  related?: string[];
};

/**
 * PODCAST (sesión mensual)
 */
export type PodcastData = {
  title: string;
  slug: string;
  date?: string;

  description?: string;

  youtube?: {
    channel?: string;
    videoUrl?: string;
  };

  images?: ImagePath[];

  related?: string[];
};

/**
 * NODO UNIFICADO
 */
export type ContentNode =
  | {
      type: "PERSONA";
      style?: ContentStyle;
      data: PersonaData;
    }
  | {
      type: "EVENTO";
      style?: ContentStyle;
      data: EventoData;
    }
  | {
      type: "PODCAST";
      style?: ContentStyle;
      data: PodcastData;
    };
