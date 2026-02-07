export type ContentType = "EVENTO" | "PERSONA" | "PODCAST" | "ACTIVIDAD";

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

  /** Mostrar en la home (Archivo Vivo) */
  showOnHome?: boolean;
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
  heroImage?: ImagePath;

  isLive?: boolean;
  isHero?: boolean;
  heroPriority?: number;
  related?: string[];

  /** Mostrar en la home (Archivo Vivo) */
  showOnHome?: boolean;
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

  /** Mostrar en la home (Archivo Vivo) */
  showOnHome?: boolean;
};

/**
 * ACTIVIDAD (Charla, Taller, Presentación)
 */
export type ActividadLabel = "CHARLA" | "TALLER" | "PRESENTACIÓN";

export type ActividadData = {
  title: string;
  slug: string;
  date?: string;

  /** Tipo de actividad */
  label: ActividadLabel;

  /** Descripción breve */
  description?: string;

  /** Lugar del evento */
  venue?: string;

  images?: ImagePath[];

  /** Link externo (audio, video, etc.) */
  externalUrl?: string;

  related?: string[];

  /** Mostrar en la home (Archivo Vivo) */
  showOnHome?: boolean;
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
    }
  | {
      type: "ACTIVIDAD";
      style?: ContentStyle;
      data: ActividadData;
    };
