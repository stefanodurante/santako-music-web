export type ContentType = "EVENTO" | "PERSONA" | "PODCAST" | "ACTIVIDAD";

/** Supported image formats */
export type ImagePath = `${string}.${"jpg" | "jpeg" | "png" | "webp"}`;

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

  /** Destacar (tamaño grande en grids) */
  featured?: boolean;
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

  /** Destacar (tamaño grande en grids) */
  featured?: boolean;
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

  /** Destacar (tamaño grande en grids) */
  featured?: boolean;
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

  /** Destacar (tamaño grande en grids) */
  featured?: boolean;
};

/**
 * NODO UNIFICADO
 * 
 * Nota: El estilo visual (tamaños, colores) se determina
 * en los componentes del frontend, no en el contenido.
 */
export type ContentNode =
  | { type: "PERSONA"; data: PersonaData }
  | { type: "EVENTO"; data: EventoData }
  | { type: "PODCAST"; data: PodcastData }
  | { type: "ACTIVIDAD"; data: ActividadData };
