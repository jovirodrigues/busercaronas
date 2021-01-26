<template>
  <div>
  <v-progress-linear :indeterminate="true" v-if="!caronas"></v-progress-linear>
  <home :caronas="caronas" v-if="caronas"></home>
  </div>
</template>

<script>

import home from '~/components/Home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home
  },
  data () {
    return {
      caronas: null,
    }
  },
  mounted() {
    AppApi.list_caronas().then(result => {
      this.caronas = result.data
    })
  }
}
</script>

<style>
</style>
