import { defineConfig } from "vitepress";
import baseConfig from "@vue/theme/config";

const SIDE_BAR_CONFIG = [
  {
    text: "Analysis",
    items: [
      {
        text: "Part 1",
        link: "/part-1",
      },
      {
        text: "Part 2",
        link: "/part-2",
      },
      {
        text: "Part 3",
        link: "/part-3",
      },
    ],
  },
];
const BASE = "/DM-Docs/src";

export default defineConfig({
  extends: baseConfig,
  srcDir: "src",
  lang: "en-US",

  base: BASE,

  title: "Analyze-Documentation",
  description: "Date mining project ",

  themeConfig: {
    sidebar: {
      "/part-1": SIDE_BAR_CONFIG,
      "/part-2": SIDE_BAR_CONFIG,
      "/part-3": SIDE_BAR_CONFIG,
    },
  },

  head: [["link", { rel: "icon", href: `${BASE}/data-mining.png` }]],
  markdown: {
    theme: "github-dark",
  },
});
