<template>
  <h1>Esse é o perfil do {{username}}</h1>
</template>

<script>

export default {
  asyncData (context){
    return {
      username: context.params.username
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
