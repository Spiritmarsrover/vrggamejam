// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
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
        "tutorial",
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        "contact",
      ],
    }),
  ],
});
