import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
  site: "https://kemiaosw.top", // 替换为你的站点 URL
});
