<template>
  <v-card max-width="376" class="mx-auto">
    <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
      <v-row class="fill-height">
        <v-spacer></v-spacer>

        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1 pl-12 pt-12">
            {{username}}
          </div>
        </v-card-title>
      </v-row>
    </v-img>

    <v-list two-line>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Whats: (650) 555-1234</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> E-mail: {{username}}@example.com</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Slack: joao.rodrigues</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>    
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
  .perfil-us {
    display: flex;
    background-color: aqua;
  }
</style>
