<template>
  <div class="main">
    <Drawer></Drawer>
    <session></session>
   
  </div>
</template>

<script>
//import router from "../router/index";
import SessionApiService from "../services/sessions-api.service"
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
import { reactive, onMounted/*, computed*/ } from "@vue/composition-api";
import session from '../components/session.vue';
import Drawer from "../components/drawer-main";


export default {
  components: { session , Drawer,},
  name: "Main",
  setup() {
   // const userId = computed(() =>router.params.userId);

    const state = reactive({
      users: [],
      user: Object,
    });

    function loadUsers() {
      SessionApiService.getAll()
      .then(function(response) {
          for (let i = 0; i < response.data.length; i++) {
            state.users.push(response.data[i]);
          }
        })
        .catch(err => console.log(err));

        
    }

    onMounted(() => {
      loadUsers();
    });

    return {
      state,
      loadUsers
      //userId
    };
  },
};
</script>

<style scoped></style>
