import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirective from '@unocss/transformer-directives'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
      transformers: [transformerDirective()],
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => !!tag?.match(/lit-|solid-|svelte-/g),
        },
      },
    }),
  ],
})
