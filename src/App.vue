<template lang="pug">
  #app
    .label Nombre
    input(v-model="name")
    .label Apellido
    input(v-model="lastName")
    p {{fullName}}
    .label Fecha de nacimiento
    input(type="date" v-model="birthday")
    p {{calcYear}}
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      birthday: ''
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    },
    calcYear () {
      if (this.birthday) {
        let birthday = new Date(this.birthday)
        let today = new Date()
        let years = today.getFullYear() - birthday.getFullYear()
        return years
      }
      return null
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss'
</style>
