import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$MYSQL_NODE_HOST = process.env.MYSQL_NODE_HOST;
Vue.prototype.$SOCKET_NODE_HOST = process.env.SOCKET_NODE_HOST;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
