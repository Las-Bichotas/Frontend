<template>
  <v-container>
    <v-row gutters>
      <v-col cols="6" md="6" sm="12"  v-for="n in 4" :key="n">
        <v-card elevation="20"  >
          <v-img height="200px" src="https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="180" class="justify-center">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
          </v-img>
          <v-card-title>About my life</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores aspernatur
            aut consequatur dolores esse est exercitationem facere illo impedit minima nisi, numquam odit
            possimus sint, tempora ullam voluptatibus.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "testimonials",
  data: () => ({}),
}
</script>

<style scoped>

</style>