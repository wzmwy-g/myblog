import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 12121, // 设置端口号
  },
  plugins: [react()],
});
