import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Groomed Gent Co. Event Experience",
    short_name: "Groomed Gent Co.",
    description: "A scan-first event display for Groomed Gent Co.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#151119",
    orientation: "any",
  };
}
