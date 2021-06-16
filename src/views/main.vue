<template>
  <v-app>
    <session></session>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
import { reactive, onMounted } from "@vue/composition-api";
import session from '../components/session.vue';

export default {
  components: { session },
  name: "Main",
  setup() {
    const axios = require("axios");
    const state = reactive({
      users: [],
      user: Object,
    });

    function loadUsers() {
      axios
        .get("https://60c2e09f917002001739da47.mockapi.io/user")
        .then(function(response) {
          for (let i = 0; i < response.data.length; i++) {
            state.users.push(response.data[i]);
          }
        });
    }

    onMounted(() => {
      loadUsers();
    });

    return {
      state,
      loadUsers,
    };
  },
};
</script>

<style scoped></style>

