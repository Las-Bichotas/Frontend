<template>
  <v-app>
    <div class="ss">
      <v-card
          elevation="24"
          outlined
          shaped
          class="mainCard"
      >
        <v-card-title>Crear una nueva cuenta de <br><strong class="subtitl">ILanguage</strong></v-card-title>
        <br>
        <v-divider></v-divider>
        <br>
        <v-row>
          <v-col
              cols="12"
              sm="6"
              md="3"
              xs="1"

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
              sm="5"
              md="3"
              xs="1"
          >
            <v-text-field
                v-model="state.newLastName"
                label="Last Name"
                outlined
                clearable
                :rules="state.nameRules"
                class="txtLastName"
                :counter="30"
            ></v-text-field>

          </v-col>


          <v-col
              cols="12"
              sm="12"
              md="5"
              xs="1"
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
              sm="12"
              md="6"
              xs="1"
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

          <v-col
              cols="12"
              sm="12"
              md="5"
              xs="1"
          >
            <v-combobox
                v-model="state.newLanguageDomination"
                :items="state.languages"
                label="Idiomas"
                multiple
                outlined
                dense
                class="cmblanguages"
            ></v-combobox>

          </v-col>
        </v-row>
        <v-row>
          <router-link :to="{name: 'Main'}">

            <v-btn
                color="primary"
                elevation="2"
                outlined
                rounded
                class="btnCrearCuenta"

            >Crear cuenta </v-btn> </router-link>
        </v-row>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import { reactive, onMounted } from '@vue/composition-api'

export default {
  name: "register-tutor",
  setup(){
    onMounted(()=>{
      loadAvailableLanguages()
    })

    const axios = require('axios');
    const state = reactive({
      newName:'',
      newEmail:'',
      newDescription:'',
      newLastName:'',
      newLanguageDomination:[],
      valid : false,
      languages:[],
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

    function loadAvailableLanguages(){
      axios.get('https://60c2e09f917002001739da47.mockapi.io/languages')
      .then(function (response){
        for (let i = 0; i<response.data.length;i++){
          state.languages.push(response.data[i].name)
        }
        console.log(response.data)
      })
      .catch(err => console.log(err))
    }

    return{
      state
    }
  }
}
</script>

<style scoped>
.ss {
  background-image: url("../assets/wave.svg") !important;
  width: 100%;
  height: 100%;
  background-color: #faf4f4;
}

@media (min-width:960px) {
  .mainCard{
    width: 70%;
    margin-left: 15%;
    margin-top: 20%;
    height: 50%;
  }
  .nameCard{
     padding-left:10%;
   }

  .card_txt{
    padding-left:5%;
  }

  .card_dcp{
    padding-left:5%;

  }

  .btnCrearCuenta{
    margin-left:20% !important;
    alignment-baseline: center !important;
    alignment: center !important;
  }

  .cmblanguages{
    padding-left:5%;
  }

}

@media (max-width:599px) {
  .mainCard{
    width: 90%;
    margin-left: 3%;
    margin-top: 20%;

  }
  .nameCard{
    padding-left:5%;
    width: 90%;
  }

  .card_txt{
    padding-left:5%;
    width: 90%;
  }

  .card_dcp{
    padding-left:5%;
    width: 90%;
  }

  .btnCrearCuenta{
    margin-left:20% !important;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;

  }

  .cmblanguages{
    padding-left:5%;
    width: 90%;
  }
  .txtLastName{
    padding-left:5%;
    width: 90%;
  }
  .subtitl{
    padding-left:30%;
  }

}



@media (min-width:600px) and (max-width: 959px) {
  .mainCard{
    width: 90%;
    margin-left: 3%;
    margin-top: 20% !important;

  }
  .nameCard{
    padding-left:10%;
    width: 90%;
  }

  .card_txt{
    padding-left:5%;
    width: 90%;
  }

  .card_dcp{
    padding-left:5%;
    width: 90%;
  }

  .btnCrearCuenta{
    margin-left:20% !important;
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;

  }

  .cmblanguages{
    padding-left:5%;
    width: 90%;
  }
  .txtLastName{
    padding-left:0%;
    width: 100%;
  }
  .subtitl{
    padding-left:30%;
  }

}

</style>