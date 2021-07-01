<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="information"
            v-model="state.information"
            :rules="[() => !!state.information || 'This field is required']"
            :error-messages="state.errorMessages"
            label="Information about the session"
            placeholder="Information"
            required
          ></v-text-field>


          <v-autocomplete
            ref="topic"
            v-model="state.topic"
            :rules="[() => !!state.topic || 'This field is required']"
            :items="state.topics"
            label="Topic"
            placeholder="Select..."
            required
          ></v-autocomplete>
          <v-autocomplete
              ref="topic"
              v-model="state.language"
              :rules="[() => !!state.topic || 'This field is required']"
              :items="state.languages"
              label="Language"
              placeholder="Select..."
              required
          ></v-autocomplete>
          <v-row justify="center">
            <v-datetime-picker label="Select Datetime" v-model="state.datetime">
            </v-datetime-picker>
          </v-row>
          <v-autocomplete
              ref="topic"
              v-model="state.hoursDuration"
              :items="state.hoursDurations"
              label="Duration in hours"
              placeholder="Select..."
              required
          ></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn text> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="state.formHasErrors" left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="saveSession"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LanguageApiService from "../services/languages-api.service.js";
import moment from 'moment'
import DatetimePicker from "vuetify-datetime-picker";
import TopicApiService from "../services/topics-api.service";
import SessionApiService from "../services/sessions-api.service";
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
Vue.use(DatetimePicker);
import { reactive, onMounted } from "@vue/composition-api";

export default {
  Name: "Add-session",
  components: {},
  setup() {
    const state = reactive({
      sessions: [],
      isTutor: true,
      startsAt: Date,
      endsAt: Date,
      state: "",
      topics: [],
      languages:[],
      topic: null,
      language: null,
      information: "",
      errorMessages: "",
      formHasErrors: false,
      datetime: '',
      hoursDuration:Number,
      hoursDurations: [1,2,3]
    });

    function loadLanguages() {
      LanguageApiService.getAll()
      .then((ress)=>{
        for(let i=0; i<ress.data.length; i++){
          state.languages.push(ress.data[i])
        }
      })
      .catch()
    }

    function loadTopics() {
      TopicApiService.getAll()
        .then(function(response) {
          for (let i = 0; i < response.data.length; i++) {
            state.topics.push(response.data[i].name);
            console.log(response.data[i].name);
          }
        })
        .catch((err) => console.log(err));
    }

    function saveSession() {
      state.endsAt = state.startsAt();
      state.endsAt = moment().add(5,'h');
      /*let a = new Date();
      let b = new Date();
      a= state.startsAt;
      b= a;
      b.setHours(b.getHours()+ state.hoursDuration());
      state.endsAt = b;*/
      console.log(state.endsAt);
      SessionApiService.create({
        startAt: state.startsAt,
        endsAt: state.endsAt,
        link: `www.zoom.com/${state.topic}/${state.language}`,
        state: state.state,
        topic: state.topic,
        information: state.information,
      })
        .then(function(response) {
          console.log(response);
        })
        .catch((err) => console.log(err));
        console.log(state.datetime);
        var a = moment(String(state.datetime)).format('MMMM Do YYYY, h:mm:ss a');
        console.log(a);
    }

    onMounted(() => {
      loadTopics();
      loadLanguages();
      state.state = "active";
    });

    return {
      state,
      saveSession,
    };
  },
};
</script>

<style>
.italic {
  font-style: italic;
}
.custom {
  font-weight: bold !important;
}
</style>
