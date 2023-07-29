import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/tailwind.css'
import Notifications from "vt-notifications";

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Notifications);

new Vue({
  render: h => h(App),
}).$mount('#app')
