
import { updateAppConfig } from '#app'
import { defuFn } from 'D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "f650a064-e575-4836-a451-8e49d6cfff3e"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
