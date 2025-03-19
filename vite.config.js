import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), dynamicImport()],
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
            "@components": path.join(__dirname, "src/components"),
            "@pages": path.join(__dirname, "src/pages"),
        },
    },
});
