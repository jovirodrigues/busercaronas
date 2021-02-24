<template>
  <v-app>
    <toolbar :state="layout"/>
    <v-content>
      <v-container fluid>
        <nuxt></nuxt>
      </v-container>
    </v-content>
    <le-footer/>
  </v-app>
</template>

<script>
  import toolbar from '~/components/toolbar.vue'
  import footer from '~/components/footer.vue'
  export default {
    components: {
      toolbar,
      leFooter: footer
    },
    data: () => ({
      layout: {
        drawer: true,
        drawerRight: true,
        right: null,
        left: null
      },
    })
  }
</script>