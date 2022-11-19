import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    plugins: [
        react(),
        VitePluginFonts({
            google: {
                families: ['IBM Plex Sans'],
            },
        }),
    ],
});
