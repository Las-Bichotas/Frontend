<template>
  <v-container elevation="5">
  <v-card
      class="mx-auto"
      max-width="344"
      outlined
  >
    <v-container>
      <v-row >
        <v-card-title class="text-h5" >Ranking de Estudiantes</v-card-title>
        <v-card-text class="grey--text mb-2">Top de los estudiantes reservaron mas clases con usted .</v-card-text>
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


                  <v-card class="mx-auto y ma-3" >
                    <v-avatar

                        size="80"
                        class="avatar justify-center"
                    >
                      <v-img  :src="item.src"  ></v-img>
                    </v-avatar>
                  </v-card>


                </v-card-actions>




                <v-card-text class="text-lg-h7 text-center font-italic" v-text="item.artist">
                   </v-card-text>



                <v-row>
                  <v-col   v-if="item.artist === 'Jaina Gouding'">
                   70 veces
                    <v-progress-circular
                        v-if="item.artist === 'Jaina Gouding'"
                        value="70"
                        color="purple lighten-3"
                        height="15"
                    ></v-progress-circular>
                  </v-col>
                </v-row>


                <v-row>
                  <v-col   v-if="item.artist === 'Ellie Gouding'">
                    50 veces
                    <v-progress-circular
                        v-if="item.artist === 'Ellie Gouding'"
                        value="50"
                        color="indigo "
                        height="15"
                    ></v-progress-circular>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col   v-if="item.artist === 'Ana Maria'">
                    20 veces
                    <v-progress-circular
                        v-if="item.artist === 'Ana Maria'"
                        value="20"
                        color="red lighten  "
                        height="15"
                    ></v-progress-circular>
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
        title: 'Primer Puesto   ',
        artist: 'Jaina Gouding',




      },
      {
        color: 'blue-grey lighten-4  ',
        src: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        title: 'Segundo Puesto',
        artist: 'Ellie Gouding',

      },
      {
        color: '#D68910 ',
        src: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        title: 'Tercer Puesto',
        artist: 'Ana Maria',

      },
    ],
  }),
}
</script>