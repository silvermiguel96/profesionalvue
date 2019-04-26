import Vue from 'vue'
const eventBus = {}
eventBus.install = function (vue) {
  vue.prototype.$bus = new Vue()
}
export default eventBus
