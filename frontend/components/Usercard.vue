<template>
  <v-card  class="mx-auto" max-width="800">
    <v-card color="pink accent-2" class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs7 align-self-center>
            <div style="font-size: 30px">
              <div>{{user.username}}</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <v-avatar size="125">
              <img :src="user.avatar">
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>

    <v-list three-line height="200px">
      <v-card-text style="font-size: 20px">
        <div>Nome: {{user.username}}</div>
        <v-divider/>
        <div>Telefone: XXXX-XXX </div>
        <v-divider/>
        <div>Slack: user.name </div>
        <v-divider/>
        <div>E-mail: random@buser.com.br</div>
      </v-card-text>
    </v-list>
  

  </v-card>
</template>

<script>


export default {
  props: ['user'],

  data () {
    return {}
  }
}

</script>

<style> 
  .title{
    display: flex;
    font-size: "200px";
    color: black;
  }
</style>