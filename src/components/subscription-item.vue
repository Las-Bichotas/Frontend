<template>

      <v-card
          elevation="10"
          outlined
          shaped
      >

    <v-card-title>{{name}}</v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle class="price">{{price}} Dolares</v-card-subtitle>

        <v-card-actions         text
                                color="deep-purple accent-4"
                                outlined
                                rounded
        class="btnsuscri">
          Suscribirse

        </v-card-actions>



  </v-card>

</template>

<script>
export default {
  name: "subscription-item",
  props:{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    monthDuration: {
      type: Number,
      required: true
    },
    subscriptions:{
      type: Array,
      required: true
    },

  },
  data: () => ({
    numSubscriptions:0,
    benefits: [
      {id: 0, benefitDescription:"Cancela en cualquier momento"},
      {id: 1, benefitDescription:"Aceptamos como metodo de pago todas tus tarjetas"},
      {id: 2, benefitDescription:"Sin comisiones ni moras"},
      {id: 3, benefitDescription:"Practica desde tu celular o ordenador"}
    ]
  }),

}
</script>

<style scoped>
.price{
  color: #42b983 !important;
  font-size: 30px !important ;
  text-decoration: #2699fb  !important;
}
.btnsuscri{
  background-color: #fff7e4;
  text-align:center;
  align-content: center !important;
  align-items: center !important;
}
</style>