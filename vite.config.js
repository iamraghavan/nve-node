import { defineConfig } from "vite";
import { resolve } from "path";
import glob from "fast-glob";

export default defineConfig({
    root: "public",
    base: "/", // Ensure correct asset paths
    build: {
        outDir: "../dist",
        emptyOutDir: true, // Clears the output folder before building
        assetsDir: "assets",
        minify: "terser",
        rollupOptions: {
            input: Object.fromEntries(
                glob.sync("public/**/*.html").map((file) => [
                    file.replace(/^public\//, "").replace(/\.html$/, ""),
                    resolve(process.cwd(), file),
                ])
            ),
            output: {
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                assetFileNames: "assets/css/[name]-[hash].[ext]",
            },
        },
    },
    server: {
        open: true,
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    publicDir: "public/assets",
});
