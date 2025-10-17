// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Sidebar configuration
const sidebar = [
  {
    label: "HTML + CSS Notes",
    items: [
      {
        label: "Overview of Web Development",
        slug: "html-css/overview-of-web-dev",
      },
      {
        label: "Intro to HTML",
        slug: "html-css/intro-to-html",
      },
      {
        label: "Text Elements",
        slug: "html-css/text-elements",
      },
      {
        label: "Images and Attributes",
        slug: "html-css/images-and-attributes",
      },
      {
        label: "Hyperlinks in HTML",
        slug: "html-css/links-in-html",
      },
      {
        label: "HTML5 Semantic Elements",
        items: [
          {
            label: "Part One",
            slug: "html-css/html5-semantic-elements-part-one",
          },
          {
            label: "Part Two",
            slug: "html-css/html5-semantic-elements-part-two",
          },
          {
            label: "Website Example",
            slug: "html-css/html5-semantic-website-example",
          },
        ],
      },
    ],
  },
  {
    label: "Docker Notes",
    items: [
      {
        label: "Intro to Docker",
        slug: "docker/intro-to-docker",
      },
      {
        label: "Why use Docker and Containers as a developer?",
        slug: "docker/why-use-docker-and-containers",
      },
      {
        label: "VMs vs Containers",
        slug: "docker/vms-vs-containers",
      },
    ],
  },
];

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
      sidebar,
    }),
  ],
});
