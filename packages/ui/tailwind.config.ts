import type { Config } from "tailwindcss";
import tailwindConfig from "@repo/tailwindcss/tailwind.config";
const config: Pick<Config, "prefix" | "presets" | "content"> = {
  presets: [tailwindConfig],
  content: ["./src/**/*.tsx"],
};

export default config;
