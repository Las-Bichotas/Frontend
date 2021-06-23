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


</style>