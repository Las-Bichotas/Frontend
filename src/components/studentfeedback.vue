<template>
  <v-container>
    <div>
      <h1 class="xs10 text-center">FeedBack</h1>
      <p class="text-lg-h7 text-center">
        One benefit that teachers will have will be that they can be graded by
        other users with a simple and easy-to-use system. The user who is
        qualified will be able to see the qualifications that are given in
        percentages that the application will provide.
      </p>
      <v-row>
        <v-col cols="12" sm="6" md="3" xs="1">
          <v-container>
            <v-img
              class="align-center justify-center"
              width="800px"
              height="250px"
              src="../assets/student1.png"
            ></v-img>
            <h2 class="text-center">Juan carlos</h2>
          </v-container>
        </v-col>
        <v-col xs="1">
          <v-container class="text-center align-center justify-center">
            <v-col class="justify-center align-center">
              <div>
                <v-row class="justify-center align-center text-center">
                  <div>
                    <br />
                    <br />
                    <v-rating
                      color="warning"
                      half-increments
                      hover
                      length="5"
                      size="25"
                      value="4"
                    ></v-rating>
                  </div>
                </v-row>
                <v-row>
                  <v-col>
                    1 Estrellas
                    <v-progress-circular
                      value="15"
                      color="purple lighten-3"
                      :size="50"
                      :width="10"
                      >{{ 10 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col>
                    2 Estrellas
                    <v-progress-circular
                      value="25"
                      color="blue lighten-3"
                      :size="50"
                      :width="10"
                      >{{ 25 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col>
                    3 Estrellas
                    <v-progress-circular
                      value="45"
                      color="green lighten-1"
                      :size="50"
                      :width="10"
                      >{{ 45 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col>
                    4 Estrellas
                    <v-progress-circular
                      value="55"
                      color="blue-grey darken-1"
                      :size="50"
                      :width="10"
                      >{{ 55 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col>
                    5 Estrellas
                    <v-progress-circular
                      value="75"
                      color="amber"
                      :size="50"
                      :width="10"
                      >{{ 75 }}
                    </v-progress-circular>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "studentfeedback",
  data: () => ({
    alignments: ["center"],
  }),
};
</script>
<style scoped></style>

