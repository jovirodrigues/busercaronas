<template>
    <v-list three-line>
        <h1>Caronas Disponíveis:</h1>
        <v-space></v-space>
        <template v-for="caronas in caronas">
            <v-list-tile> 
                <v-list-tile-avatar>
                     <v-img :src= "caronas.author_avatar"/>
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>
                        <router-link :to="{name: 'user-username', params:{username:caronas.author_name}}">{{caronas.author_name}}</router-link> 
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                        <v-card> Horário:  {{caronas.horario_at}} - Vagas: {{caronas.vagas}}</v-card>
                        <v-card> Origem: {{caronas.origem}}  -  Destino: {{caronas.destino}}</v-card>
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider/>
            <v-divider/>
        </template>
    </v-list>        
</template>

<script>
export default {
    props: ['caronas'],
    data () {
        return {
        }
    },
    computed: {
    logged_user () {
      return this.$store.getters.logged_user
    }
  },
}

</script>

<style> 
    .title{
       color: black;
    }
    .v-list__tile__sub-title{
        font-size: 20px;
    }
</style>