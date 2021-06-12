<template>
  <div>
    <h1 class="text-h2 text-lg-h1 text-md-h2 text-sm-h2 mb-5 text-center">FeedBack</h1>
    <p class="text-lg-h7 text-center">
      Un beneficio que tendran los profesores y los alumnos sera que podran ser
      calificados por los demas usuarios con un sistema sencillo y el usuario
      que es calificado podra ver las calificaciones que le dan en porcentajes.
    </p>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img height="150px" src="../assets/student1.png"></v-img>
          <h2 class="text-center">Juan carlos</h2>
        </v-col>
        <v-col cols="6">
          <v-row class="d-flex justify-center" >
            <div >
              <v-rating color="warning" half-increments hover length="5" size="38" value="3"></v-rating>
            </div>
          </v-row>
          <v-row>
            <v-col>
              1 Estrella
              <v-progress-circular
                  value="15"
                  color="purple lighten-3"
                  height="15"
              ></v-progress-circular>
            </v-col>
            <v-col>
              2 Estrellas
              <v-progress-circular
                  value="21"
                  color="blue lighten-3"
                  height="15"
              ></v-progress-circular>
            </v-col>
            <v-col>
              3 Estrellas
              <v-progress-circular
                  value="40"
                  color="grey lighten-1"
                  height="15"
              ></v-progress-circular>
            </v-col>
            <v-col>
              4 Estrellas
              <v-progress-circular
                  value="55"
                  color="blue-grey darken-1"
                  height="15"
              ></v-progress-circular>
            </v-col>
            <v-col>
              5 Estrellas
              <v-progress-circular
                  value="75"
                  color="amber"
                  height="15"
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
export default {
  name: "studentfeedback",
  data: () => ({
    rating: 4.5,
  }),
}
</script>


<style scoped>

</style>