<template>
      <div>
        <h1 class="text-h2 text-lg-h1 text-md-h2 text-sm-h2 mb-5 text-center">FeedBack</h1>
        <p class="text-lg-h7 text-center">
          Un beneficio que tendran los profesores y los alumnos sera que podran ser
          calificados por los demas usuarios con un sistema sencillo. El usuario
          que es calificado podra ver las calificaciones que le dan.
        </p>
        <v-card elevation="24" max-width="500" class="mx-auto">
          <v-img height="250px"  src="../assets/student1.png" ></v-img>
          <H2 class="text-center">Juan carlos</H2>
          <br>
          <div>
            <div class="fill-height" align="center" justify="center">
              1 Estrella
              <v-progress-linear
                  value="15"
                  color="purple lighten-3"
                  height="15"
              ></v-progress-linear>
            </div>

            <br>
            <div class="fill-height" align="center" justify="center">
              2 Estrellas
              <v-progress-linear
                  value="21"
                  color="blue lighten-3"
                  height="15"
              ></v-progress-linear>
            </div>
            <br>
            <div class="fill-height" align="center" justify="center">
              3 Estrellas
              <v-progress-linear
                  value="40"
                  color="grey lighten-1"
                  height="15"
              ></v-progress-linear>
            </div>
            <br>
            <div class="fill-height" align="center" justify="center">
              4 Estrellas
              <v-progress-linear
                  value="55"
                  color="blue-grey darken-1"
                  height="15"
              ></v-progress-linear>
            </div>
            <br>
            <div class="fill-height" align="center" justify="center">
              5 Estrellas
              <v-progress-linear
                  value="75"
                  color="amber"
                  height="15"
              ></v-progress-linear>
            </div>
          </div>
        </v-card>
      </div>

</template>



<script>
export default {
  name: "studentfeedback",
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78,
  }),
}
</script>

<style scoped>

</style>