<template>
  <div>
    <v-dialog v-model="visible" width="640">
      <v-card>
          <v-card-title><h2>{{title}}</h2></v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-card-subtitle><h2> Qual o horário? </h2> </v-card-subtitle>
              <v-menu ref="menu" v-model="menu1" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="horas" outlined readonly v-bind="attrs" v-on="on" hide-details />
                </template>
                <v-time-picker v-if="menu1" v-model="horas" full-width @click:minute="$refs.menu.save(time)" />
              </v-menu>
              <v-card-subtitle><h2> Selecione as vagas:</h2> </v-card-subtitle>
              <v-select :items="vagas" v-model="vaga"/>
              <v-card-subtitle><h2> Qual a origem? </h2> </v-card-subtitle>
              <v-text-field multi-line :label="label" v-model="origem" auto-grow rows="1" @keyup.ctrl.enter="ok()" @keyup.esc="close()"/>
              <v-card-subtitle><h2> Qual o destino? </h2> </v-card-subtitle>
              <v-text-field multi-line :label2="label2" v-model="destino" auto-grow rows="1" @keyup.ctrl.enter="ok()" @keyup.esc="close()"/>
            </v-container>
          </v-card-text>
          <v-btn class="blue--text darken-1" flat @click="close()">Cancelar</v-btn>
          <v-btn class="blue--text darken-1" flat @click="ok()" :loading="loading" :disabled="loading">{{action}}</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AppApi from '~apijs'
export default {
  data () {
    return {
      visible: false,
      title: '',
      label: '',
      label2:'',
      origem: '',
      destino: '',
      horas:'',
      vagas: [1, 2, 3, 4],
      vaga:'',
      actionFunc: null,
      loading: false,
      menu1: false,
      time: '',
      action:'',
    };
  },
  methods: {
    open(opts){
      opts = opts || {}
      this.visible = true
      this.loading = false
      this.title = opts.title || ''
      this.label2 = opts.label2 || ''

      this.action = opts.action || 'OK'
      this.actionFunc = opts.actionFunc
    },
    close () {
      this.visible = false
      this.loading = false
    },
    ok () {
      this.loading = true
      debugger
      this.actionFunc(this.origem, this.destino, this.vaga, this.horas).finally(() => {
        this.close()
      })
    }
  },
}
</script>
