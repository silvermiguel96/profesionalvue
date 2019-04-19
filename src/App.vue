<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
             v-model="searchQuery")
          a.button.is-info.is-large(v-on:click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      .container.results
        .columns
          .cloumn(v-for="t in tracks") {{ t.name }} - {{t.artist}}
</template>
<script>
// Arreglo , Array
const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Pinto' },
  { name: 'Hoy aca en el baie', artist: 'El pepo' },
  { name: 'I was made for loving you', artist: 'pepo' }
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontramos: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss';

.results{
  margin-top: 50px;
}
</style>
