<template lang="pug">
  #app
    .label Nombre
    input(v-model="name")
    button(v-on:click="compilarName") Enviar
    p {{fullName}}
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      fullName: ''
    }
  },
  methods: {
    compilarName () {
      this.fullName = this.name.split(' ').join('-')
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss'
</style>
