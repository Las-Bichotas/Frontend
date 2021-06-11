<template>
  <v-container>
  <v-card
      max-width="400"
      class="mx-auto"
  >
    <v-container>
      <v-row >
        <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
        >
          <v-card
              :color="item.color"
               dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-actions
                    :color="item.color"
                    class="text-h5"
                    v-text="item.title"
                ></v-card-actions>

                <p  v-text="item.artist">
                   </p>

                <v-progress-circular
                    v-if="item.artist === 'Jaina Gouding'"
                    value="75"
                    color="red lighten-1"
                    :size="50"
                    :width="10"
                >
                  {{ 75 }}
                </v-progress-circular>


                <v-progress-circular
                    v-if="item.artist === 'Ellie Gouding'"
                    value="65"
                    color="teal"
                    :size="50"
                    :width="10"


                > {{ 65 }}

                </v-progress-circular>

                <v-progress-circular
                    v-if="item.artist === 'Ana Maria'"
                    value="35"
                    color="indigo"

                    :size="50"
                    :width="10"


                > {{ 35 }}

                </v-progress-circular>
                <v-card-actions>
                  <v-btn
                      v-if="item.artist === 'nadie'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"

                      width="40px"
                  >
                  </v-btn>


                </v-card-actions>
              </div>

              <v-avatar
                  class="ma-3"
                  size="125"


              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
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

  name:"RankingStudent",
  data: () => ({


    items: [
      {
        color: '#E5D108 ',
        src: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Primer Puesto',
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