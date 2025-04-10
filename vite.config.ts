import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite';

dotenv.config();

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  define: {
    'process.env': process.env
  },
  
});