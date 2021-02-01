<template>
  <div>
    <newcarona @newcarona=addToTimeline($event.data)></newcarona>
    <timeline :caronas="caronas"></timeline>
  </div>
</template>

<script>

import timeline from '~/components/Timeline.vue'
import newcarona from '~/components/NewCarona.vue'

export default {
  props: ['caronas'],
  components: {
    timeline, newcarona
  },
  data () {
    return {}
  },
  methods: {
    addToTimeline(carona){
      this.caronas.push(carona)
    }
  }
}

</script>

<style> 
  .botao {
    display: flex;
    justify-content: flex-end;
  }
</style>
