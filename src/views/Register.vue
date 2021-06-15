<template>
  <v-app class="allApp">

    <div>
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="6"
            xs="12"
            v-if="state.showButtons"
        >
          <v-hover v-slot="{ hover }">
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                elevation="0"
                max-width="600"
            >
              <div class="crd-tutor">
                <v-card
                    class="mx-auto"
                    max-width="400"

                >
                  <v-img
                      class="white--text align-end"
                      height="200px"
                      src="../assets/tutor-virtual.png"
                  >
                    <v-expand-transition>
                      <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text-h2 white--text"
                          style="height: 100%;"
                      >
                        Tutor nativo
                      </div>
                    </v-expand-transition>

                    <v-card-title>Tutor</v-card-title>
                  </v-img>


                  <v-card-text class="text--primary">


                    <div>Registrate como un tutor, especializado en uno o varios lenguajes a nivel nativo.</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                        @click="makeTutortTrue"
                    >
                      Seleccionar
                    </v-btn>


                  </v-card-actions>
                </v-card>

              </div>
            </v-card>
          </v-hover>
        </v-col>
        <!-- Finish -->
        <v-col
            cols="12"
            sm="6"
            md="6"
            xs="12"
            v-if="state.showButtons"
        >
          <v-hover v-slot="{ hover }">
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                elevation="0"
                max-width="600"
            >
              <div class="crd-student">
                <v-card
                    class="mx-auto"
                    max-width="400"

                >
                  <v-img
                      class="white--text align-end"
                      height="200px"
                      src="../assets/estudiante-card.jpg"
                  >
                    <v-expand-transition>
                      <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text-h2 white--text"
                          style="height: 100%;"
                      >
                        Estudiante
                      </div>
                    </v-expand-transition>

                    <v-card-title>Estudiante</v-card-title>
                  </v-img>


                  <v-card-text class="text--primary">


                    <div>Registrate como un estudiante, capacitate en uno o mas lenguajes con tutores nativos.</div>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                        @click="makeStudentTrue"
                    >
                      Seleccionar
                    </v-btn>


                  </v-card-actions>
                </v-card>

              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>


      <div v-if="state.student">
        <register-student></register-student>
      </div>

      <div v-if="state.tutor">
        <register-tutor></register-tutor>
      </div>
    </div>
  </v-app>
</template>

<script>

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
import {reactive} from '@vue/composition-api'
import RegisterStudent from "@/components/register-student";
import RegisterTutor from "@/components/register-tutor";

export default {
  name: "Register",
  components: {RegisterTutor, RegisterStudent},
  setup() {
    const state = reactive({
      tutor: false,
      student: false,
      showButtons: true
    })

    function makeTutortTrue() {

      state.tutor = true
      state.student = false
      state.showButtons = false


    }

    function makeStudentTrue() {

      state.student = true
      state.tutor = false
      state.showButtons = false
    }


    return {
      state,
      makeStudentTrue,
      makeTutortTrue
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}

.allApp {
  background-color: #F5F5F5;
}


@media (min-width: 960px) {
  .crd-student {
    padding-top: 30%;
    padding-right: 15%;
  }

  .crd-tutor {
    padding-top: 30%;
    padding-left: 15%;
  }
}

</style>