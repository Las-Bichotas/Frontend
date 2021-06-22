<template>
  <div>
    <v-row>
      <div
        v-for="subscription in state.subscriptions"
        v-bind:key="subscription.id"
        class="crdplans"
        :class="{ '--proPlan': state.proPlan }"
      >
        <v-card
          :loading="state.loading"
          class="mx-auto my-12 justify-center"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="primary"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-card-title
            ><strong>{{ subscription.name }} </strong></v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                4.5 (413)
              </div>
            </v-row>

            <br />

            <div>
              <ul id="example-2">
                <li v-for="benefit in state.benefits" v-bind:key="benefit.id">
                  {{ benefit.benefitDescription }}
                </li>
              </ul>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-chip-group
              v-model="state.selection"
              active-class="primary accent-4 white--text"
              column
            >
              <v-chip>Before: {{ subscription.price + 9.99 }} $</v-chip>

              <v-chip>Now: {{ subscription.price }} $</v-chip>

            </v-chip-group>
          </v-card-text>

          <v-card-actions>

              <div class="text-center">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="orange lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                      Subscribe
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Payment
                    </v-card-title>

                    <v-card-text>

                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="primary"
                          text
                          @click="dialog = false"
                      >
                        I accept
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>

          </v-card-actions>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import { reactive, onMounted } from "@vue/composition-api";

export default {
  name: "subscription-item",
  setup() {
    const axios = require("axios");

    const state = reactive({
      subscriptions: [],
      proPlan: false,
      loading: false,
      selection: 1,
      images: [
        { place: "../assets/idiomas1.jpg" },
        { place: "../assets/idiomas2.jpg" },
        { place: "../assets/idiomas3.jpg" },
      ],
      benefits: [
        { id: 0, benefitDescription: "Cancel at any time" },
        {
          id: 1,
          benefitDescription:
            "We accept as payment method all your credit cards.",
        },
        { id: 2, benefitDescription: "No commissions or late payments" },
        { id: 3, benefitDescription: "Practice from your cell phone or computer" },
      ],
      slogan: [
        { id: 0, benefitDescription: "Learn now!!" },
        { id: 1, benefitDescription: "The world in your hands" },
        { id: 2, benefitDescription: "No excuses!" },
      ],
    });

    onMounted(() => {
      loadSubscriptions();
    });

    function reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    }

    function loadSubscriptions() {
      axios
        .get("https://60c2e09f917002001739da47.mockapi.io/subscription")
        //axios.get('https://localhost:44341/api/subscriptions')
        .then(function(response) {
          for (let i = 0; i < response.data.length; i++) {
            state.subscriptions.push(response.data[i]);
          }
          console.log(response.data);
          console.log(state.subscriptions);
        })
        .catch((err) => console.log(err));
    }

    return {
      state,
      loadSubscriptions,
      reserve,
    };
  },
};
</script>

<style scoped>
.btnSeleccionar {
  color: inherit !important;
  text-decoration: none;
}
.price {
  color: #42b983 !important;
  font-size: 30px !important;
  text-decoration: #2699fb !important;
}

.btnsuscri {
  background-color: #fff7e4;
  text-align: center;
  align-content: center !important;
  align-items: center !important;
}
@media (min-width: 960px) {
  .crdplans {
    padding-left: 5% !important;
    padding-right: 5% !important;
    padding-top: 8% !important;
  }
  .--proPlan {
    background-color: #2c3e50;
  }
}
</style>

