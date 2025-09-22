// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Alfy's Notes",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "HTML + CSS Notes",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Overview of Web Development",
              slug: "html-css/overview-of-web-dev",
            },
            {
              label: "Intro to HTML",
              slug: "html-css/intro-to-html",
            },
          ],
        },
        {
          label: "Docker Notes",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Intro to Docker",
              slug: "docker/intro-to-docker",
            },
          ],
        },
      ],
    }),
  ],
});
