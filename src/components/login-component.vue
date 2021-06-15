<template >
  <v-app>
    <div class="ss">
      <div>
        <v-form v-model="state.valid">
          <v-card
              :loading="loading"
              class="cardIniciarSecion"
              max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>

            <v-img
                height="300"
                src="../assets/no_profile.jpg"
            ></v-img>



            <v-card-title align="center">Iniciar sesion</v-card-title>

            <v-text-field
                v-model="state.username"
                label="Username"
                placeholder="Username or email "
                filled
                :counter="20"
                rounded
                dense
                :rules="state.nameRules"
                class="inputs"
            ></v-text-field>
            <v-text-field
                label="Password"
                placeholder="Password"
                filled
                :counter="6"
                rounded
                dense
                :rules="state.passwordRules"
                class="inputs"
            ></v-text-field>

            <v-card-actions>
              <router-link :to="{name: 'Main'}">
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="reserve"
              >
                Iniciar
              </v-btn></router-link>

              <router-link :to="{name:'Home'}">
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="regresar"
              >
                Regresar
              </v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-form>
      </div>
    </div>
  </v-app>
</template>



<script>
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { reactive, computed } from '@vue/composition-api'

export default {
  name: "login-component",

  setup(){
    //const axios = require('axios');
    //DATA
    const state = reactive({
      username : '',
      password : '',
      valid : false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      passwordRules:[
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Paswords contain more than 6 characters',
      ],
      users: []
    })
    //COMPUTED
    const nameMaxLengthCount = computed(()=>state.username.length)

    /*function getUsers(){
      axios.get('https://60c2e09f917002001739da47.mockapi.io/user')
      .then(function(response){
         var arr = response.data;
            for (let i=0; i< arr.length;i++){
              if(arr[i].username == state.username )
            }
      })
    }*/


    //RETURNS
    return {
      state,
      nameMaxLengthCount
    }
  }
}



</script>

<style scoped>

.rightSide{
  background-color: #2699fb;
  height: 100%;
  width: 100%;
}
.ss{
  background-image: url("../assets/wave.svg") !important;
  width: 100%;
  height: 1000%;
  background-color: #faf4f4;
}
.cardIniciarSecion{
  color: rebeccapurple;
  margin-left: 40%;
  margin-top: 20%;
}

.nameexeceeded{
  text-color:red;
}

.inputs{
  width: 90%;
  padding-left: 5% !important;

}

</style>