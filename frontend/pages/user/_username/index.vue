<template>
  <div class="batata">
    batata
  </div>
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
  .batata {
    display: flex;
    font-size:"30px";
  }
</style>
