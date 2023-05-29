// Styles
import '@mdi/font/css/materialdesignicons.min.css';

// Components
import App from './App.vue';

// Libraries
import {createApp} from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');
