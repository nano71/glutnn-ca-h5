import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            }
        }
    },
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver(),
                IconsResolver({
                    prefix: false,
                    enabledCollections: ["ri"],
                })],
        }),
        Icons(),
    ],
    server: {
        host: "0.0.0.0",
        port: 8080,
        proxy: {
            "/jsj": {
                target: "https://nnfx.glut.edu.cn/",
                changeOrigin: true,
            },
            "/images": {
                target: "https://nnfx.glut.edu.cn/jsj",
                changeOrigin: true,
            },
            "/__local": {
                target: "https://nnfx.glut.edu.cn/",
                changeOrigin: true,
            },
        }
    }
})
