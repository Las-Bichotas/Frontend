<template>
  <div>
    <h1 class="text-h2 text-lg-h1 text-md-h2 text-sm-h2 mb-5 text-center">Badges</h1>
    <p class="text-lg-h7 text-center">
      These are some of the badges that can be obtained in our app. These different badges for students and
      for teachers which can show them to other users who visit their profile.
    </p>
    <div>
      <v-row>
        <v-col>
          <v-container>
            <h2 class="text-subtitle-1 text-decoration-underline text-center">Badges for teachers</h2>
            <v-row>
              <v-col>
                <v-card elevation="2" class="mx-auto my-12" hover max-width="500">
                  <v-carousel :show-arrows="false" hide-delimiters :cycle="true">
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
              <v-col>
                <v-card elevation="2" class="mx-auto my-12" hover max-width="500">
                  <v-carousel :show-arrows="false" hide-delimiters :cycle="true">
                    <v-carousel-item
                        v-for="(item,i) in imgs"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <h2 class="text-subtitle-1 text-decoration-underline text-center">Badges for Students</h2>
            <v-row>
              <v-col>
                <v-card elevation="2" class="mx-auto my-12" hover max-width="500">
                  <v-carousel :show-arrows="false" hide-delimiters :cycle="true">
                    <v-carousel-item
                        v-for="(item,i) in cards"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
              <v-col>
                <v-card elevation="2" class="mx-auto my-12" hover max-width="500">
                  <v-carousel :show-arrows="false" hide-delimiters :cycle="true">
                    <v-carousel-item
                        v-for="(item,i) in imgss"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
export default {
  name: "badge-component",
  data() {
    return {
      items: [
        {src: require("../../assets/profesor1.1.png")},
        {src: require("../../assets/profesor2.2.png")},
        {src: require("../../assets/profesor3.1.png")},
        {src: require("../../assets/profesor4.1.png")},
      ],
      imgs: [
        {src: require("../../assets/profesor1.3.png")},
        {src: require("../../assets/Profesor2.4.png")},
        {src: require("../../assets/profesor3.2.png")},
        {src: require("../../assets/profesor4.4.png")},],
      cards: [
        {src: require("../../assets/alumno1.2.png")},
        {src: require("../../assets/alumno2.1.png")},
        {src: require("../../assets/alumno3.3.png")},
        {src: require("../../assets/alumno4.2.png")},],
      imgss: [
        {src: require("../../assets/alumno1.4.png")},
        {src: require("../../assets/alumno2.3.png")},
        {src: require("../../assets/alumno3.4.png")},
        {src: require("../../assets/alumno4.3.png")},],
    }
  },
}
</script>

<style scoped>

</style>