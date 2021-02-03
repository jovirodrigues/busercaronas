<template>
  <v-toolbar color= white dark fixed app clipped-right>
    <v-toolbar-title><router-link :to="{ name: 'index'}"><img src="/busercaronas3.png" style="max-height:64px;"></router-link> </v-toolbar-title>
    <v-spacer></v-spacer>
   <v-btn v-if="!logged_user" color = pink accent-2 flat ripple dark class="ma-0 ml-5" @click="open_login_dialog($event)">Entrar</v-btn>
   <v-btn v-if="!logged_user" color = pink accent-2 flat ripple dark class="ma-0 ml-5" @click="open_cads_dialog($event)">Cadastrar</v-btn>
    <v-menu v-if="logged_user" offset-y>
      <v-btn icon slot="activator" class="ma-0 ml-5">
        <v-avatar size="46px">
          <img src="https://newslab.com.br/wp-content/uploads/2018/08/pato-960x720.jpg">
        </v-avatar>
      </v-btn>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-avatar>
                <img src=https://newslab.com.br/wp-content/uploads/2018/08/pato-960x720.jpg>
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{logged_user.email}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile @click="logout()">
            <v-list-tile-content>
              <v-list-tile-title>SAIR</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    <login-dialog ref="login_dialog"/>
    <cads-dialog ref="cads_dialog"/>
  </v-toolbar>
</template>

<script>
  import Vuex from 'vuex'
  import loginDialog from '~/components/login-dialog.vue'
  import cadsDialog from '~/components/cads-dialog.vue'
  import Snacks from '~/helpers/Snacks.js'
  import AppApi from '~apijs'
  export default {
    components: {
      loginDialog, cadsDialog,
    },
    computed: Object.assign(
      {},
      Vuex.mapGetters([
        'logged_user'
      ])
    ),
    props: ['state'],
    methods: {
      open_login_dialog (evt) {
        this.$refs.login_dialog.open();
        evt.stopPropagation();
      },
      open_cads_dialog (evt) {
        this.$refs.cads_dialog.open();
        evt.stopPropagation();
      },
      logout(){
        AppApi.logout().then(()=>{
          this.$store.commit('SET_LOGGED_USER', null);
          Snacks.show(this.$store, {text: 'Até logo!'})
        });
      }
    }
  }
</script>

