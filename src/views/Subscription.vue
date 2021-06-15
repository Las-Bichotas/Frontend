<template>
  <v-app>

      <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"

      >
        <subscription-item
            v-for="subscription in state.subscriptions"
            :key="subscription.id"
            :subscriptions="state.subscriptions"
            :month-duration="subscription.monthDuration"
            :name="subscription.name"
            :price="subscription.price"
            :num-subscriptions="state.subscriptions.length"

        ></subscription-item>
      </v-col>

  </v-app>
</template>

<script>
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
import {reactive, onMounted} from '@vue/composition-api'
import SubscriptionItem from "@/components/subscription-item";

export default {
  name: "Subscription",
  components: {SubscriptionItem},
  setup() {

    onMounted(() => {
      loadSubscriptions()
    })

    const axios = require('axios');
    const state = reactive({
      subscriptions: [
        {id: 8888, name: "dds", price: 5, monthDuration: 474}
      ]
    })

    function loadSubscriptions() {
      axios.get('https://60c2e09f917002001739da47.mockapi.io/subscription')
          //axios.get('https://localhost:44341/api/subscriptions')
          .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
              state.subscriptions.push(response.data[i])
            }
            console.log(response.data)
            console.log(state.subscriptions)
          })
          .catch(err => console.log(err))
    }


    return {
      state,
      loadSubscriptions
    }
  },


}
</script>

<style scoped>

</style>