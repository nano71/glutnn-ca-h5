import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: "0.0.0.0"
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
