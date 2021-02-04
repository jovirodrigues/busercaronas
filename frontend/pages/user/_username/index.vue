<template>
    <viewuser :user="user" :caronas="caronas"></viewuser>
</template>

<script>

import viewuser from '~/components/Viewuser.vue'
import AppApi from '~apijs'

export default {
  components: {
    viewuser
  },
  asyncData (context){
    const username = context.params.username
    return Promise.all([
      AppApi.get_user_details(username),
      AppApi.list_caronas(username)
    ]).then(result => {
      return {
        user: result[0].data,
        caronas: result[1].data
      }
    })
    
  },
  data () {
    return {
      caronas: []
    }
  },
  computed: {
    logged_user () {
      return this.$store.getters.logged_user
    }
  }
}
</script>

<style>
  .perfil-us {
    display: flex;
    background-color: aqua;
  }
</style>