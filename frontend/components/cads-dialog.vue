<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card light color="pink lighten-4" shaped>
        <v-card-title >Bem vindo, vamos fazer o seu cadastro?</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-text-field label="Username" required v-model="username"/>
            <v-text-field label="Senha" type="password" required v-model="password" @keyup.enter="login()"/>
            <small style="color: black;" v-if="error">Username ou senha errada</small>
          </v-container>
        </v-card-text>
        <v-btn class="black--text darken-1" flat @click="close()">Cancelar</v-btn>
        <v-btn class="black--text darken-1" flat @click="login()" :loading="loading" :disabled="loading">Entrar</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>

import AppApi from '~apijs'

export default {
  data () {
    console.log('data');
    return {
      visible: false,
      loading: false,
      username: '',
      password: '',
      error: false,
    };
  },
  methods: {
    open(){
      this.visible = true;
      console.log('Open');
    },
    close(){
      this.visible = false;
      console.log('Close');
    },
    login(){
      this.loading = true;
      this.error = false;
      AppApi.login(this.username, this.password).then((result)=>{
        var user = result.data;
        if(user){
          this.$store.commit('SET_LOGGED_USER', user);
          this.visible = false;
          console.log('logged')
        } else {
          this.error = true;
        }
        this.loading = false;
      });
    },
  },
}
</script>

