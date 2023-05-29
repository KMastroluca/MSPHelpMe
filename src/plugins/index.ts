/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader';
import {VueFire, VueFireAuth} from 'vuefire';
import vuetify from './vuetify';
import pinia from '../store';
import router from '../router';
import firebaseApp from './firebase';

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(VueFire, {
      firebaseApp,
      modules:[
        VueFireAuth(),
      ],
    })
    .use(vuetify)
    .use(router)
    .use(pinia)
}
