<template>
  <v-app>

    <v-card
        elevation="24"
        outlined
        shaped
        class="justify-center mx-auto my-12 crdpay"
    >


    <vue-c-card
        :number="state.cc.number"
        :holder="state.cc.holder"
        :exp="state.cc.exp"
        :cvc="state.cc.cvc"
        :is-typing-cvc="isTypingCvc"
    class="cccrd"/>

      <v-row>
        <v-col
            cols="12"
            md="6"
        >
          <v-text-field label="Credit Card Number" type="text" v-model="state.cc.number" id="number" class="txtcard"></v-text-field></v-col>

        <v-col
            cols="12"
            md="6"
        >
          <v-text-field label="Credit Card Owner" type="text" v-model="state.cc.holder" id="holder" class="txtcard"></v-text-field></v-col>
        <v-col
            cols="12"
            md="6"
        >
          <v-text-field label="Expiration date" type="text" v-model="state.cc.exp" id="exp" class="txtcard"></v-text-field></v-col>

        <v-col
            cols="12"
            md="6"
        >
    <v-text-field class="txtcard" label="CVC" type="text" v-model="state.cc.cvc"
           @focus="isTypingCvc = true"
                  @blur="isTypingCvc = false" id="cvc"></v-text-field></v-col>

        <v-col
            cols="12"
            md="6"
        ></v-col>

      </v-row>
      <v-btn
          block
          elevation="14"
          rounded
          text
          class="btnPagar"
      >Pagar</v-btn>

      <router-link
          style="text-decoration: none; color: inherit;"
          :to="{ name: 'home' }"

      >
        <br>
      <v-btn
          block
          elevation="14"
          rounded
          text class="btnCancelar"
      >Cancelar</v-btn></router-link>

    </v-card>
  </v-app>
</template>

<script>
import VueCCard from 'vue-ccard';
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import { reactive } from "@vue/composition-api";


export default {
  name: "payment",
  components:{VueCCard},
  setup(){
    const state = reactive({
      valid: false,
      isTypingCvc: false,
      cc: {
        number: '',
        holder: '',
        exp: '',
        cvc: '',
      },
    })


    return {
      state
    }
  }
}
</script>

<style scoped>
.crdpay{
margin-top: 10% !important;
}

.txtcard{
  max-width:60%;

  margin-left: 20% !important;
  margin-right: 20% !important;
}

.cccrd{
  margin-left: 20% !important;
  margin-right: 20% !important;
  margin-top: 5%;
  padding-bottom: 15px !important;
}
.btnCancelar{
  background-color: red !important;
  margin-bottom: 5px !important;

}

.btnPagar{
  background-color: #42b983;

  max-width: 80% !important;
}


</style>