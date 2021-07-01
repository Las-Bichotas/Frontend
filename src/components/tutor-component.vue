<template>
  <v-app>
    <v-layout row wrap align-center>
      <v-flex xs8 offset-md2 offset-2>
        <div>
          <v-card>
            <v-card-text>
              <v-avatar size="227">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="el profesor"
                />
              </v-avatar>
              <v-card-title>Full Name:Alvaro Miyagi</v-card-title>
              <v-card-title>Email:AMLO@gmail.com</v-card-title>
              <v-card-title>Description:Teacher of universal history in French</v-card-title>
              <br>
              <div>
                <v-row>
                  <v-col>
                    <h1 class="xs10 float-lg-right">4.0 Stars</h1>
                  </v-col>
                  <v-col>
                    <div class="float-left">
                      <v-rating
                          color="warning"
                          half-increments
                          hover
                          length="5"
                          size="25"
                          value="4"
                      ></v-rating>
                    </div>
                  </v-col>
                </v-row>
              </div>
              <div>
                <v-row class="align-center text-center justify-center">
                  <v-col cols="1">
                    1 Stars
                    <v-progress-circular
                        value="15"
                        color="purple lighten-3"
                        :size="50"
                        :width="10"
                    >{{ 10 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="1">
                    2 Stars
                    <v-progress-circular
                        value="25"
                        color="blue lighten-3"
                        :size="50"
                        :width="10"
                    >{{ 25 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="1">
                    3 Stars
                    <v-progress-circular
                        value="45"
                        color="green lighten-1"
                        :size="50"
                        :width="10"
                    >{{ 45 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="1">
                    4 Stars
                    <v-progress-circular
                        value="55"
                        color="blue-grey darken-1"
                        :size="50"
                        :width="10"
                    >{{ 55 }}
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="1">
                    5 Stars
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
            </v-card-text>
            <br>
            <div>
              <v-btn large color="primary" elevation="8" class="mr-2">Reserve</v-btn>
              <v-btn large elevation="8"> Edit</v-btn>
            </div>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  name: "tutor-component"
}
</script>

<style scoped>

</style>
