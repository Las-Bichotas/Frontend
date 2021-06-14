<template>
  <div>
    <h1 class="text-h2 text-lg-h1 text-md-h2 text-sm-h2 mb-5 text-center">Insignias</h1>
    <p class="text-lg-h7 text-center">
      Estas son algunas de las insignias que se puede conseguir en nuestra aplicación. Estas diferentes insignias son para los estudiantes y profesores con las cuales pueden mostrarlas a los demás usuarios que visitan sus perfiles.
    </p>
    <v-container>
      <v-row>
        <v-card :loading="loading" class="mx-auto my-12" max-width="500">
          <v-col>
            <v-carousel :show-arrows="false" :cycle="true">
              <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-card>
        <h2>Insignias Profesores</h2>
        <v-card :loading="loading" class="mx-auto my-12" max-width="500">
          <v-col>
            <v-carousel :show-arrows="false" :cycle="true">
              <v-carousel-item
                  v-for="(item,i) in imgs"
                  :key="i"
                  :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-card>
        <v-spacer></v-spacer>

        <v-card :loading="loading" class="mx-auto my-12" max-width="500">
          <v-col>
            <v-carousel :show-arrows="false" :cycle="true">
              <v-carousel-item
                  v-for="(item,i) in cards"
                  :key="i"
                  :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-card>

        <h2>Insignias Alumnos</h2>
        <v-card :loading="loading" class="mx-auto my-12" max-width="500">
          <v-col>
            <v-carousel :show-arrows="false" :cycle="true">
              <v-carousel-item
                  v-for="(item,i) in imgss"
                  :key="i"
                  :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "badge-component",
  data() {
    return {
      items: [
        {src: require("../assets/profesor1.1.png")},
        {src: require("../assets/profesor2.2.png")},
        {src: require("../assets/profesor3.1.png")},
        {src: require("../assets/profesor4.1.png")},
      ],
      imgs: [
        {src: require("../assets/profesor1.3.png")},
        {src: require("../assets/Profesor2.4.png")},
        {src: require("../assets/profesor3.2.png")},
        {src: require("../assets/profesor4.4.png")},],
      cards: [
        {src: require("../assets/alumno1.2.png")},
        {src: require("../assets/alumno2.1.png")},
        {src: require("../assets/alumno3.3.png")},
        {src: require("../assets/alumno4.2.png")},],
      imgss: [
        {src: require("../assets/alumno1.4.png")},
        {src: require("../assets/alumno2.3.png")},
        {src: require("../assets/alumno3.4.png")},
        {src: require("../assets/alumno4.3.png")},],
    }
  },
}
</script>

<style scoped>

</style>