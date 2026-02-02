export type ContentType = "EVENTO" | "PERSONA" | "PODCAST";

/** Supported image formats: .jpg, .png, .webp */
export type ImagePath = `${string}.${"jpg" | "jpeg" | "png" | "webp"}`;

export interface ContentNode {
  type: ContentType;
  style: {
    size: "large" | "medium" | "small";
    color: "accent-event" | "accent-person" | "accent-live";
  };
  data: {
    title: string;
    label: string;
    slug: string;
    date?: string;
    bio?: string;
    /** Array of image paths (.jpg, .png, .webp) */
    images?: ImagePath[];
    isLive?: boolean;
    genres?: string[];
    members?: string[];
    instagram?: string;
    youtube?: string;
    related: string[];
  };
}
