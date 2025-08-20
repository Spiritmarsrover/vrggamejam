// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://jam.vrg.party",
  integrations: [
    mermaid(),
    starlight({
      title: "jam.vrg.party",
      favicon: "favicon.png",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      lastUpdated: true,
      social: [
        {
          icon: "comment",
          label: "the thread",
          href: "https://boards.4chan.org/vg/catalog#s=vrg",
        },
      ],
      sidebar: [
        "getting-started",
        "jam-info",
        "rules",
        "mugi",
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        "resources",
        "contact",
      ],
    }),
  ],
});
