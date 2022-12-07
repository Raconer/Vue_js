import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import { createPinia, PiniaVuePlugin } from 'pinia';
import "@/plugins/editor";

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  router,
  pinia,
  vuetify,
  render: h => h(App),
}).$mount('#app')
