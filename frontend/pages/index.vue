<template>
    <home :caronas="caronas"></home>
</template>

<script>

import home from '~/components/Home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home
  },
  asyncData () {
    return AppApi.list_caronas().then(result => {
      return {
        caronas: result.data
      }
    })
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
