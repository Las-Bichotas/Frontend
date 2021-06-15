<template>
  <v-card
      class="mx-auto"
      max-width="400"
  >
    <v-img
        class="white--text align-end"
        height="200px"
        src="../assets/tutor-virtual.png"
    >
      <v-card-title>Tutor</v-card-title>
    </v-img>



    <v-card-text class="text--primary">


      <div>Registrate como un tutor, especializado en uno o varios lenguajes a nivel nativo.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
          color="orange"
          text
          @click="makeSelectedTrue"
      >
        Seleccionar
      </v-btn>


    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { reactive } from '@vue/composition-api'


export default {
  name: "tutor-card",
  setup(){
    const state = reactive({
      selected : false
    })
    function makeSelectedTrue(){
      state.selected = true
    }
    return{
      state,
      makeSelectedTrue
    }
  }
}
</script>

<style scoped>

</style>