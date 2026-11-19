import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const base = process.env.NODE_ENV === 'production' ? '/biojasi/' : '/';

function prefixPublicAssets(baseUrl: string) {
  return {
    name: 'prefix-public-assets',
    transform(code: string, id: string) {
      if (id.includes('node_modules')) return null;
      if (/\.(tsx|ts|jsx|js)$/.test(id)) {
        const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
        const replaced = code.replace(/(['"])\/(assets|docs)\//g, `$1${cleanBase}$2/`);
        return { code: replaced, map: null };
      }
      return null;
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), prefixPublicAssets(base)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5176,
    strictPort: true,
    host: true,
  },
});
