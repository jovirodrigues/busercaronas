<template>
  <div>
    <v-dialog v-model="visible" width="640">
      <v-card>
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-menu ref="menu" v-model="menu1" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="horas" outlined prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on" hide-details />
                </template>
                <v-time-picker v-if="menu1" v-model="horas" full-width @click:minute="$refs.menu.save(time)" />
              </v-menu>
              <v-select :items="vagas" v-model="vaga"/>
              <v-text-field multi-line :label="label" v-model="origem" auto-grow rows="1" hint="Ctrl+enter envia a parada" persistent-hint @keyup.ctrl.enter="ok()" @keyup.esc="close()"/>
              <v-text-field multi-line :label="label" v-model="destino" auto-grow rows="1" hint="Ctrl+enter envia a parada" persistent-hint @keyup.ctrl.enter="ok()" @keyup.esc="close()"/>
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
      origem: '',
      destino: '',
      vagas: [1, 2, 3, 4],
      vaga:'',
      horas: '',
      action: 'OK',
      actionFunc: null,
      loading: false,
      menu1: false,
    };
  },
  methods: {
    open(opts){
      opts = opts || {}
      this.visible = true
      this.loading = false
      this.title = opts.title || ''
      this.label = opts.label || ''

      this.origem = opts.origem || ''
      this.destino = opts.destino || ''
      this.vaga = opts.vaga|| ''
      this.horas = opts.horas || ''

      this.action = opts.action || 'OK'
      this.actionFunc = opts.actionFunc
    },
    close () {
      this.visible = false
      this.loading = false
    },
    ok () {
      this.loading = true
      this.actionFunc(this.value).finally(() => {
        this.close()
      })
    }
  },
}
</script>
