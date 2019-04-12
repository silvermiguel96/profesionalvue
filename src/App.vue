<template lang="pug">
  #app
    h1 {{ msg }}
    p {{ 1 + 1}}
    p {{ 'Hola '+ 'msg'}}
    p {{ person.name }}
    p {{ person.name.toUpperCase()}}
    p {{ JSON.stringify(person)}}
    p {{ true ? true : false}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo de vue!',

      person: {
        name: 'juan'
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
