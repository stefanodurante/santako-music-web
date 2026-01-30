export type ContentType = "EVENTO" | "PERSONA" | "PODCAST";

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
    image?: string;
    isLive?: boolean;
    related: string[];
  };
} // Content type definitions
