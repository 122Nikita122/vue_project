import Vue from 'vue';
import VueRouter from 'vue-router';
import VueSlider from 'vue-slider-component';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.min.css';
import store from './store';
import 'vue-slider-component/theme/default.css';

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.component('VueSlider', VueSlider);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
