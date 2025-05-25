import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    proxy: {
      '/kor/api': {
        target: 'https://www.daegufood.go.kr',
        changeOrigin: true,
        secure: false,
      },
      '/ajax/api': {
        target: 'https://thegoodnight.daegu.go.kr',
        changeOrigin: true,
        secure: false,
      },
    }
  },
});
