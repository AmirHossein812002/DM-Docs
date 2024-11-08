import { defineConfig } from "vitepress";
import baseConfig from "@vue/theme/config";

const SIDE_BAR_CONFIG = [
  {
    text: "Analysis",
    items: [
      {
        text: "phase 1",
        link: "/phase-1",
      },
      {
        text: "phase 2",
        link: "/phase-2",
      },
      {
        text: "phase 3",
        link: "/phase-3",
      },
    ],
  },
];
const BASE = "/analyze-documentation/";

export default defineConfig({
  extends: baseConfig,
  srcDir: "src",
  lang: "en-US",

  base: BASE,

  title: "Analyze-Documentation",
  description: "Date mining project ",

  themeConfig: {
    sidebar: {
      "/phase-1": SIDE_BAR_CONFIG,
      "/phase-2": SIDE_BAR_CONFIG,
      "/phase-3": SIDE_BAR_CONFIG,
    },
  },

  head: [["link", { rel: "icon", href: `${BASE}/data-mining.png` }]],
  markdown: {
    theme: "github-dark",
  },
});
