import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import themeCss from 'primevue/resources/themes/saga-blue/theme.css'       //theme
import primevueCss from 'primevue/resources/primevue.min.css'             //core css
import primeVueIcon from 'primeicons/primeicons.css'                  //icons


const app = createApp(App)
app.use(PrimeVue) // UI Framework for Vue 3 
app.mount('#app')
