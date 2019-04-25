<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(
          v-bind:class="type"
        )
          slot(name="body") Algo anda mal
</template>
<script>
export default {
  props: {
    type: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
  .notification {
    margin: 10px;
  }
</style>
