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
          <v-text-field
            ref="state"
            v-model="state.state"
            :rules="[
              () => !!state.state || 'This field is required'
            ]"
            label="State Line"
            placeholder="State"
            counter="25"
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
import TopicApiService from "../services/topics-api.service"
import SessionApiService from "../services/sessions-api.service"
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);
import { reactive, onMounted } from "@vue/composition-api";

export default {
  Name: "Add-session",

  setup() {
    const state = reactive({
      sessions: [],
      isTutor: true,
      startsAt: Date,
      endsAt: Date,
      state: "",
      topics: [],
      topic: null,
      information: "",
      errorMessages: "",
      formHasErrors: false,
    });

    function loadTopics() {
      TopicApiService.getAll()
      .then(function(response) {
        for(let i=0; i<response.data.length; i++) {
          state.topics.push(response.data[i].name);
          console.log(response.data[i].name);
        }
      })
      .catch((err) => console.log(err));

    }

    function saveSession() {
      SessionApiService.create({
          startAt: state.startsAt,
          endsAt: state.endsAt,
          link: "www.zoom.com",
          state: state.state,
          topic: state.topic,
          information: state.information,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }




    onMounted(() => {
      loadTopics();
    });

    return {
      state,
      saveSession,
    };
  },
};
</script>

<style></style>
