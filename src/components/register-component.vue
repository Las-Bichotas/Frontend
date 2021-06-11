<template>
  <v-app>
    <div class="ss">
      <v-card
          elevation="24"
          outlined
          shaped
          class="mainCard"
      >
        <v-card-title>Crear una nueva cuenta de ILanguage</v-card-title>
        <br>
        <v-divider></v-divider>
        <br>
        <v-row>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field
              v-model="state.newName"
              label="First Name"
              outlined
              clearable
              class="nameCard"
              :rules="state.nameRules"
              :counter="30"
          ></v-text-field>

        </v-col>
        <v-col
            cols="12"
            sm="3"
        >
          <v-text-field
              v-model="state.newLastName"
              label="Last Name"
              outlined
              clearable
              :rules="state.nameRules"
              :counter="30"
          ></v-text-field>

        </v-col>
        </v-row>
   <v-row>

          <v-col
              cols="12"
              sm="6"
          >
            <v-text-field
                v-model="state.newEmail"
                label="Email"
                outlined
                clearable
                class="card_txt"
                :rules="state.emailRules"
            ></v-text-field>

          </v-col>
   </v-row>
     <v-row>
          <v-col
              cols="12"
              sm="6"
          >
            <v-text-field
                v-model="state.newDescription"
                label="Description"
                outlined
                clearable
                class="card_dcp"
                :rules="state.descriptionRules"
                :counter="245"
            ></v-text-field>

          </v-col>
        </v-row>
        <v-row>
          <v-btn
              color="primary"
              elevation="2"
              outlined
              rounded
              class="btnCrearCuenta"
              v-on:click="createNewAccount"
          >Crear cuenta </v-btn>
        </v-row>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { reactive } from '@vue/composition-api'


export default {
  name: "register-component",
  setup(){
    const axios = require('axios');

    const state = reactive ({
      newName:'',
      newEmail:'',
      newDescription:'',
      newLastName:'',
      valid : false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length <= 245 || 'Description must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ]
    })

    function createNewAccount(){
      axios.post('https://60c2e09f917002001739da47.mockapi.io/user', {
        name: state.newName,
        lastname : state.newLastName,
        description : state.newDescription,
        email : state.newEmail
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }




    return{
      state,
      createNewAccount
    }
  }

}
</script>





<style scoped>
.mainCard{
  width: 70%;
  margin-left: 15%;
  margin-top: 20%;
  height: 50%;
}

.ss{
  background-image: url("../assets/wave.svg") !important;
  width: 100%;
  height: 100%;
  background-color: #faf4f4;
}
.nameCard{
  padding-left:10%;
}
.mainImgCard{
  width: 60%;
  height: 90%;
  margin-left:15%;
}
.card_txt{
  padding-left:5%;
}
.btnCrearCuenta{
  margin-left:20% !important;
}
.card_dcp{
  padding-left:5%;

}
</style>