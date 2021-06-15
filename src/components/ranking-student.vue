<template>
  <v-container elevation="5">
  <v-card
      class="mx-auto"
      max-width="335"
      outlined
  >
    <v-container>
      <v-row >
        <v-card-title class="text-h5" >Student Ranking</v-card-title>
        <v-card-text class="grey--text mb-2">Top students booked more classes with you .</v-card-text>
        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"

        >


          <v-card
              :color="item.color"

          >


              <div>

                <v-card-actions
                    :color="item.color"

                >
                  <v-card-title class="text-lg-h5 text-center " v-text="item.title">
                  </v-card-title>



                  <v-avatar

                      size="80"

                      class="avatar justify-center"
                  >
                    <v-img  :src="item.src"  ></v-img>
                  </v-avatar>


                </v-card-actions>



                  <v-card-text class="text-lg-h7 text-center font-italic" v-text="item.artist">
                </v-card-text>





                <v-row>
                  <v-col class="text-lg-h7 text-center font-italic"   v-if="item.artist === 'Jaina Gouding'" >
                    <v-progress-circular
                        v-if="item.artist === 'Jaina Gouding'"
                        value="70"
                        color="purple lighten-3"
                        :size="35"
                        :width="6"
                    >{{70}}</v-progress-circular>

                    Reservations
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="text-lg-h7 text-center font-italic"   v-if="item.artist === 'Ellie Gouding'" >
                    <v-progress-circular
                        v-if="item.artist === 'Ellie Gouding'"
                        value="50"
                        color="blue lighten-3"
                        :size="35"
                        :width="6"
                    >{{50}}</v-progress-circular>

                    Reservations
                  </v-col>
                </v-row>


                <v-row>
                  <v-col class="text-lg-h7 text-center font-italic"   v-if="item.artist ==='Ana Maria'">
                    <v-progress-circular
                        v-if="item.artist === 'Ana Maria'"
                        value="35"
                         color="amber"
                        :size="35"
                        :width="6"
                    >{{35}}</v-progress-circular>

                    Reservations
                  </v-col>
                </v-row>

              </div>


          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-container>
</template>

<script>
export default {

  name:"ranking-student",
  data: () => ({


    items: [

      {
        color: '#E5D108 ',
        src: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'First place   ',
        artist: 'Jaina Gouding',




      },
      {
        color: 'blue-grey lighten-4  ',
        src: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        title: 'Second Place',
        artist: 'Ellie Gouding',

      },
      {
        color: '#D68910 ',
        src: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        title: 'Third Place',
        artist: 'Ana Maria',

      },
    ],
  }),
}
</script>