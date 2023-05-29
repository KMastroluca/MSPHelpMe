
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Import Themes
import MHMLightTheme from '@/themes/MHMLight';

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  ssr: false,
  theme:{
    defaultTheme:"MHMLightTheme",
    themes:{
      MHMLightTheme,
    }
  }
})
