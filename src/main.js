import Vue from 'vue'
import App from './App.vue'
import EventBus from '@/plugins/even-bus'
// import Registro from './Registro.vue'

Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
