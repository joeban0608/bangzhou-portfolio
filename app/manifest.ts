import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "洪邦洲 | Frontend / Full-stack Engineer",
    short_name: "Bangzhou",
    description:
      "洪邦洲的個人作品集，整理前端與全端開發經驗，涵蓋 Next.js、React、TypeScript、Node.js、雲端部署與 AI SaaS 平台實作。",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
