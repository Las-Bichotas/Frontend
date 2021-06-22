<template>
  <div>
    <v-row>

    <v-container v-for="session in state.sessions"
         :key="session.id"
                 class="ctn-session"
    >

      <v-card
          class="mx-auto  crd-sessions"
          shaped
          outlined
          elevation="15"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
        ></v-img>

        <v-card-title>
          {{session.topic}}
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
          sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
          you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
          escape.
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
              class="btn-reservar"
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>


        </v-card-actions>


      </v-card>


    </v-container>

    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import {reactive, onMounted} from "@vue/composition-api";

export default {
  name: "session",

  setup() {
    const axios = require("axios");
    const state = reactive({
      sessions: []
    })

    onMounted(() => {
      loadSesions();
    })

    function loadSesions() {
      axios.get("https://60c2e09f917002001739da47.mockapi.io/session")
          .then(function (response) {
            for (let i = 0; i < response.data.length; i++) {
              state.sessions.push(response.data[i]);

            }
            console.log(response.data);
            console.log(state.sessions);
          })
          .catch((err) => console.log(err));
    }


    return {
      state
    }


  }
};
</script>

<style scoped>
@media (min-width: 960px) {
  .crd-sessions{
    margin-left: 10% !important;
    margin-right: 10% !important;
    margin-top: 10% !important;
    max-width: 500px;
  }
}

.btn-reservar{
  flex: 10 !important;
}
.ctn-session{
  max-width:500px !important;
}
</style>
