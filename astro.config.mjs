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
        items: [
          {
            label: "What is HTML?",
            slug: "html-css/intro-to-html/what-is-html",
          },
          {
            label: "Text Elements",
            slug: "html-css/intro-to-html/text-elements",
          },
          {
            label: "Images and Attributes",
            slug: "html-css/intro-to-html/images-and-attributes",
          },
          {
            label: "Hyperlinks in HTML",
            slug: "html-css/intro-to-html/links-in-html",
          },
          {
            label: "HTML5 Semantic Elements",
            items: [
              {
                label: "Part One",
                slug: "html-css/intro-to-html/html5-semantic-elements-part-one",
              },
              {
                label: "Part Two",
                slug: "html-css/intro-to-html/html5-semantic-elements-part-two",
              },
              {
                label: "Website Example",
                slug: "html-css/intro-to-html/html5-semantic-website-example",
              },
            ],
          },
        ],
      },
      {
        label: "Intro to CSS",
        items: [
          {
            label: "What is CSS?",
            slug: "html-css/intro-to-css/what-is-css",
          },
          {
            label: "Combinators, Classes, Ids",
            slug: "html-css/intro-to-css/css-combinators-classes-ids",
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
      customCss: ["/src/styles/custom.css"],
    }),
  ],
});
