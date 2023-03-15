import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0",
        port: "8080",
        proxy: {
            "/html": {
                target: "http://jsj.glutnn.cn/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/html/, '') // 不可以省略rewrite
            },
            "/uploads": {
                target: "http://jsj.glutnn.cn/uploads",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/uploads/, '') // 不可以省略rewrite
            },
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
    }
})
