<template lang="pug">
  #app
    p(v-show="mostrarDom") {{valor}}
    p(v-if="mostrarDomIf") {{valorIf}}
    p(v-else-if="mostrarDom") {{valor}}
    p(v-else="mostrarDomIf") {{valorIf}}
    ul
      li(v-bind:key="i" v-for="i in array") {{i}}
    ul
      li(v-for="h in arrayObjetos" v-show="h.status") {{h.nombre}}
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo de vue!',
      mostrarDom: true,
      valor: 'Valor del Vshow',
      mostrarDomIf: false,
      valorIf: 'Valor del Vshowif',
      // Collecion de objeto
      array: [1, 2, 3, 4, 5],
      arrayObjetos: [
        { nombre: '1 for',
          status: true
        },
        { nombre: '2 for',
          status: false
        },
        { nombre: '3 for',
          status: true
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss'
</style>
