import { defineConfig } from "vitepress";
import baseConfig from "@vue/theme/config";

const SIDE_BAR_CONFIG = [
  {
    text: "Phase 1 Analysis",
    items: [
      {
        text: "Part 1",
        link: "/phase-1/part-1",
      },
      {
        text: "Part 2",
        link: "/phase-1/part-2",
      },
      {
        text: "Part 3",
        link: "/phase-1/part-3",
      },
    ],
  },
  {
    text: "Phase 2 Analysis",
    items: [
      {
        text: "Part 1",
        link: "/phase-2/part-1",
      },
    ],
  },
];
const BASE = "/DM-Docs/";

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
    },
  },

  head: [["link", { rel: "icon", href: `${BASE}/data-mining.png` }]],
  markdown: {
    theme: "github-dark",
  },
});
