import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.git/**",
    ],
  },
});

// this file tells the vitest to "DONT EXECUTE TEST FILES FOUND INSIDE dist"