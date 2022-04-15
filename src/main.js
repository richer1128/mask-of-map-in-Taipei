import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios'
import App from './App.vue';
import router from './router.js';
import store from './vuex.js';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
    render: h => h(App),
  }).$mount('#app');


createApp(App).use(store).use(router).mount('#app')
