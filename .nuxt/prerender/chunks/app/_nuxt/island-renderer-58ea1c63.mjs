import { defineComponent, createVNode } from 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/ofetch/dist/node.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/hookable/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unctx/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unhead/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/ufo/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/h3/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/vue/server-renderer/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/socket.io-client/build/esm-debug/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/destr/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/scule/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/klona/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/defu/dist/defu.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/ohash/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unstorage/dist/index.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/training_ground/Nuxt/Nuxt3-Sea-Battle/node_modules/pathe/dist/index.mjs';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-58ea1c63.mjs.map
