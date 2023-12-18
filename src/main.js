import { createApp } from 'vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'
import './assets/style.css'
import App from './App.vue'
// import VueI18n from 'vue-i18'
import VueI18n from 'vue-i18n'
import i18n from 'vue-i18n'

const app = createApp(App)
app.use(Toast);
app.mount('#app');

