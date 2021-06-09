<template>
    <v-container>
        <v-row>
          <v-col cols="6">
            <v-card dark  max-width="700">
              <v-row>
                <v-col cols="6" >
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-col>
                <v-col cols="6" >
                  <v-card-title class="align-center">The title</v-card-title>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem fugiat
                    labore necessitatibus saepe!</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6" >
            <v-card dark  max-width="700">
              <v-row>
                <v-col cols="6" >
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                </v-col>
                <v-col cols="6" >
                  <v-card-title class="align-center">The title</v-card-title>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem fugiat
                    labore necessitatibus saepe!</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="6">
          <v-card dark  max-width="700">
            <v-row>
              <v-col cols="6" >
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
              </v-col>
              <v-col cols="6" >
                <v-card-title class="align-center">The title</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem fugiat
                  labore necessitatibus saepe!</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6" >
          <v-card dark  max-width="700">
            <v-row>
              <v-col cols="6" >
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
              </v-col>
              <v-col cols="6" >
                <v-card-title class="align-center">The title</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorem fugiat
                  labore necessitatibus saepe!</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>
export default {
  name: "testimonials",
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
  }),
}
</script>

<style scoped>

</style>