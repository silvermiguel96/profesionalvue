<template lang="pug">
  #app
    pm-header

    pm-notification(
      v-show="showNotification",
      v-bind:type="{ 'is-success' : totalTracks, 'is-danger' : !totalTracks}"
    )
      p(
        v-show="totalTracks",
        slot="body"
        ) {{ totalTracks }} encontradas.
      p(
        v-show="!totalTracks",
        slot="body"
      ) No se econtraron Resultados.
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              v-bind:class="{ 'is-active': t.id === selectedTrack }",
              v-bind:track="t",
              v-on@select="setSelectedTrack"
            )

    pm-footer
</template>
<script>
// Arreglo , Array [{ '': ''}{'':''}]
import trackservide from '@/services/track.js'

import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

import PmTrack from '@/components/Track.vue'
import PmNotification from '@/components/shared/Notification.vue'
import PmLoader from '@/components/shared/LoaderCss.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      selectedTrack: '',
      isLoading: false,
      showNotification: false,
      totalTracks: 0
    }
  },
  computed: {
    searchMessage () {
      return `Encontramos: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackservide.search(this.searchQuery)
        .then(res => {
          // console.log(res)
          this.tracks = res.tracks.items
          this.isLoading = false
          this.totalTracks = res.tracks.total
          this.showNotification = true
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>
<style lang="scss">
@import './scss/main.scss';

.results{
  margin-top: 50px;
}
.is-active{
  border: 3px solid #23d160;
}
</style>
