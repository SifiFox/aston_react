import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(
  {
      base: './',
      plugins: [react()],
      server: {
          open: true,
          host: true,
          port: 3000
      },
      test: {
          globals: true,
          environment: "jsdom",
          setupFiles: "src/setupTests",
          mockReset: true,
      },
      resolve: {
          alias: {
              '@': path.resolve(__dirname, 'src'),
              '@public': path.resolve(__dirname, 'public'),
              '@components': path.resolve(__dirname, 'src/components'),
              '@constants': path.resolve(__dirname, 'src/constants'),
              '@hooks': path.resolve(__dirname, 'src/hooks'),
              '@pages': path.resolve(__dirname, 'src/pages'),
              '@redux': path.resolve(__dirname, 'src/redux'),
              '@types': path.resolve(__dirname, 'src/types'),
              '@utils': path.resolve(__dirname, 'src/utils'),
          },
      },
  }
)
