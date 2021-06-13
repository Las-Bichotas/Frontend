<template>
  <div>
    <h1 class="text-h2 text-lg-h1 text-md-h2 text-sm-h2 mb-5 text-center">Insignias</h1>
    <p class="text-lg-h7 text-center">
      Estas son algunas de las insignias que se puede coseguir en nuestra aplicacion. Estas diferentes insignias son para los estudiantes y profesores
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
        {src: require("../assets/1.1.png")},
        {src: require("../assets/2.1.png")},
        {src: require("../assets/3.1.png")},
        {src: require("../assets/4.1.png")},
      ],
      imgs: [
        {src: require("../assets/1.2.png")},
        {src: require("../assets/2.2.png")},
        {src: require("../assets/3.2.png")},
        {src: require("../assets/4.2.png")},],
      cards: [
        {src: require("../assets/1.3.png")},
        {src: require("../assets/2.3.png")},
        {src: require("../assets/3.3.png")},
        {src: require("../assets/4.3.png")},],
      imgss: [
        {src: require("../assets/1.4.png")},
        {src: require("../assets/2.4.png")},
        {src: require("../assets/3.4.png")},
        {src: require("../assets/4.4.png")},],
    }
  },
}
</script>

<style scoped>

</style>