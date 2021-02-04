<template>
  <v-dialog v-model="visible" max-width="800px">
    <v-card light color="pink lighten-4" shaped>
      <v-card-title>Bem vindo, vamos fazer o seu cadastro?</v-card-title>
      <v-container fluid>
        <v-form v-model="valid">
            <v-text-field v-model="userData.username" label="Username: "/>
            <v-text-field v-model="userData.password" type="password" label="Senha: "/>
            <v-text-field v-model="userData.first_name" label="Primeiro nome: "/>
            <v-text-field v-model="userData.last_name" label="Segundo nome: "/>
            <v-text-field v-model="userData.slack" label="Slack: "/>
            <v-text-field v-model="userData.email" label="Email: "/>
            <v-text-field v-model="userData.whats" label="WhatsApp: "/>
        </v-form>
      </v-container>
      <v-btn class="black--text darken-1" flat @click="close()">Cancelar</v-btn>
      <v-btn class="black--text darken-1" flat @click="cads()" :loading="saving" :disabled="loading">Cadastrar</v-btn>
    </v-card>
  </v-dialog>
</template>


<script>

import AppApi from '~apijs'

export default {
  data () {
    return {
      userData: {
        username:'',
        password:'',
        first_name:'',
        last_name:'',
        slack:'',
        email:'',
        whats:0
      },
      visible: false,
      saving: false,
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
    cads(){
      this.saving = true
      AppApi.cadastrar(this.cads).then(response =>{
        this.saving = false
        this.loading = true;
        this.error = false;
        AppApi.login(this.userDatausername, this.userDatapassword).then((result)=>{
          var user = result.data;
          if(user){
            this.$store.commit('SET_LOGGED_USER', user);
            this.visible = false;
            this.close();
            console.log('logged')
          } else {
            this.error = true;
          }
          this.loading = false;
        })
      })
    }
  },
}
</script>

