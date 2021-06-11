<template>
  <v-container>
    <v-row gutters>
      <v-col cols="6" md="6" sm="12" xs="12" v-for="(n, index) in 4" :key="index">
        <v-card elevation="20">
          <v-img v-if="index === 0" height="200px"
                 src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://images.pexels.com/photos/4310415/pexels-photo-4310415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else-if="index === 1" height="200px"
                 src="https://images.pexels.com/photos/968299/pexels-photo-968299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else-if="index === 2" height="200px"
                 src="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
             <img src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else height="200px"
                 src="https://images.pexels.com/photos/17658/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://images.pexels.com/photos/6897188/pexels-photo-6897188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John">
            </v-avatar>
          </v-img>
          <v-card-title v-if="index === 0">WEN ZHĀNG</v-card-title>
          <v-card-title v-else-if="index === 1">JERRY JOHN</v-card-title>
          <v-card-title v-else-if="index === 2">JULIANA SILVA</v-card-title>
          <v-card-title v-else-if="index === 3">LEO MARTINEZ</v-card-title>
          <v-card-text class="grey--text mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi asperiores aspernatur
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
  .avatar {
    margin-top: 15px;
  }

</style>