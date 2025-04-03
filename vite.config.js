import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";

dotenv.config();

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  let serverConfig;

  if (isDev) {
    serverConfig = {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, process.env.VITE_KEY_PATH)),
        cert: fs.readFileSync(path.resolve(__dirname, process.env.VITE_CERT_PATH)),
      },
      host: process.env.VITE_HOST,
      port: Number(process.env.VITE_PORT),
    };
  }

  return {
    server: isDev ? serverConfig : undefined,
  };
});
