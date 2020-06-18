import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';
import { BootstrapVue } from 'bootstrap-vue';
import Scrollspy from 'vue2-scrollspy';

import App from './App.vue';
import router from './router';
import store from './store';
import AxiosPlugin from './plugins/AxiosPlugin';

var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;

import '@/assets/scss/style.scss';
import '@/assets/css/materialdesignicons.min.css';

Vue.use(Scrollspy);
Vue.use(VueScrollTo);
Vue.use(BootstrapVue);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(AxiosPlugin);

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faMapMarker,
  faPlusCircle,
  faUser,
  faCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

library.add(
  faFacebookSquare,
  faEnvelope,
  faGithub,
  faMapMarker,
  faPlusCircle,
  faUser,
  faCircle,
  faTimesCircle,
  faBars
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
