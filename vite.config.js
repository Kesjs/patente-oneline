import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({

  plugins: [
    react(),
    // Visualize bundle size
    mode === 'analyze' && visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    // PWA support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Patente di Guida Autentica',
        short_name: 'Patente Autentica',
        description: 'Ottieni la tua patente di guida autentica e registrata senza esame',
        theme_color: '#0066cc',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ].filter(Boolean),
  
  // Base public path when served in production
  base: '/',
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode !== 'production',
    minify: mode === 'production' ? 'terser' : 'esbuild',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion'],
        },
      },
    },
  },
  
  // Development server configuration
  server: {
    host: true,
    port: 3015,
    strictPort: true,
    open: true,
    hmr: {
      clientPort: 443,
    },
  },
  
  // Preview server configuration
  preview: {
    port: 3016,
    open: true,
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  
  // CSS configuration
  css: {
    devSourcemap: mode !== 'production',
    postcss: './postcss.config.cjs',
  },
  
  // Environment variables
  define: {
    'process.env.NODE_ENV': `"${mode}"`,
  },
}));
