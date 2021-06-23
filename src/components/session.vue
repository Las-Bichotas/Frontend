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
            :src="state.imgs[parseInt(Math.random()*5)]"
            height="200px"
        ></v-img>

        <v-card-title>
          {{session.topic}}
        </v-card-title>

        <v-card-subtitle>
          {{ session.startAt }} - {{session.endsAt}}
        </v-card-subtitle>
        <v-divider></v-divider>

        <v-card-text>
          {{
            session.information
          }}
        </v-card-text>

        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
              class="btn-reservar"

          >
            Reservar
          </v-btn>

          <v-spacer></v-spacer>


          <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="session" @changePage="onChangePage"></jw-pagination>
          </div>
        </v-card-actions>


      </v-card>


    </v-container>

    </v-row>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import {reactive, onMounted} from "@vue/composition-api";

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

export default {
  name: "session",

  setup() {
    const axios = require("axios");
    const state = reactive({
      sessions: [],
      pageOfItems: [],
      imgs: ["https://m5s7j2f7.rocketcdn.me/wp-content/uploads/fly-images/8825/5-angular-vs_angularjs-vs-angular4-2136x0.jpg","https://conceptodefinicion.de/wp-content/uploads/2019/08/Medicina-.jpg","https://static-wc.arcux.net/uploads/20200529130551/la-arquitectura-1.jpg","https://www.caracteristicas.co/wp-content/uploads/2018/10/matematicas-e1581735212109.jpg","https://sites.google.com/site/divierteteconlafisica/_/rsrc/1427808642745/home/fisica_0.jpg" ],
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
            console.log(response);
            console.log(response.data);
            console.log(state.sessions);
          })
          .catch((err) => console.log(err));
    }

    function onChangePage(pageOfItems){
      state.pageOfItems = pageOfItems;
    }



    return {
      state,
      onChangePage
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
