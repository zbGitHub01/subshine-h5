import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxToViewport from 'postcss-px-to-viewport'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          unitToConvert: 'px',
          viewportWidth: 375,
          unitPrecision: 5,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          minPixelValue: 1,
          mediaQuery: true,
          replace: true,
          landscape: false,
          exclude: [/^(?!.*node_modules\/vant)/]
        }),
        postcssPxToViewport({
          unitToConvert: 'px',
          viewportWidth: 750,
          unitPrecision: 5,
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          minPixelValue: 1,
          mediaQuery: true,
          replace: true,
          landscape: false,
          exclude: [/node_modules\/vant/i]
        }),
      ]
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8001,
    open: true,
    cors: true,
    hmr: true,
    proxy: {
      '/api': {
        // target: 'http://192.168.0.74:9010',
        target: 'http://www.donganzichan.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      }
    }
  }
})
