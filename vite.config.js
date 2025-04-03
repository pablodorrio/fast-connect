import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig({
  base: './',
  
  server: {
    port: 3000,
    open: true
  },
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  }
});
