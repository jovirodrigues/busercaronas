<template>
    <v-list two-line>
        <template v-for="caronas in caronas">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                     <img :scr="caronas.author_avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-liste-tile-title>
                        <router-link :to="{name: 'user-username', params:{username:caronas.author_name}}">{{caronas.author_name}}</router-link> - 
                        {{caronas.horario_at}}
                    </v-liste-tile-title>
                    <v-list-tile-sub-title>{{caronas.info}}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
        </template>
    </v-list>        
</template>
<script>

export default {
    props: ['caronas'],
    data () {
    return {}
  }
}
</script>

<style> 
 </style>