<template>
  <timeline :caronas="caronas"></timeline>
</template>

<script>

import timeline from '~/components/Timeline.vue'

export default {
  props: ['caronas'],
  components: {
    timeline
},
  data () {
    return {}
  }
}
</script>

<style> 
</style>
