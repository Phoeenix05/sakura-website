import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), mdx()],
  output: "server",
  adapter: deno()
});