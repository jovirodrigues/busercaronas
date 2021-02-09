<template>
  <div class="butom">
    <v-btn dark color = "pink accent-2" v-if="logged_user" @click="postnewcar">Adicionar nova Carona</v-btn> 
  <textarea-dialog ref="newcaronadialog"></textarea-dialog>
  </div>
</template>

<script>

import textareaDialog from '~/components/TextareaDialog.vue'
import AppApi from '~apijs'

export default {
  components: {
    textareaDialog
  },
  data () {
    return {}
  },
  computed: {
    logged_user () {
      return this.$store.getters.logged_user
    }
  },
  methods:{
    postnewcar() {
      this.$refs.newcaronadialog.open({
        title: 'Nova Carona',
        label: 'Quais as informações?',
        origem: '',
        destino: '',
        vaga:'',
        horas: '',
        action: 'Enviar',
        actionFunc: value => {
          return AppApi.carona(origem, destino, vaga, horas).then(carona => {
            this.$emit('newcarona', carona)
          })
        }
      })
    }
  }
}



</script>

<style> 
  .butom {
    display:flex;
    justify-content: flex-end;
  }
</style>


