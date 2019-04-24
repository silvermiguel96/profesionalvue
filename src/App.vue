<template lang="pug">
  #app
    pm-header
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav.has-shadow
        .container
          input.input(type="text",placeholder="Buscar canciones",v-model="searchQuery")
          a.button.is-info.is-outlined.is-four-fifths(v-on:click="search") Buscar
          a.button.is-danger &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(v-bind:track="t")
    pm-footer
</template>
<script>
// Arreglo , Array [{ '': ''}{'':''}]
import trackservide from '@/services/track.js'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/LoaderCss.vue'
export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false
    }
  },
  computed: {
    searchMessage () {
      return `Encontramos: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackservide.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        })
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
