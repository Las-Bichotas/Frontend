<template>
  <v-card
      max-width="400"
      class="mx-auto"
  >
    <v-container>
      <v-row dense>
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
                <v-card-title
                    class="text-h5"
                    v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                      v-if="item.artist === 'nadie'"
                      class="ml-2 mt-3"
                      fab
                      icon
                      height="40px"
                      right
                      width="40px"
                  >
                  </v-btn>

                  <v-btn
                      v-else
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                  >
                    Ver Perfil
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                  class="ma-3"
                  size="125"
                  tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

  name:"RankingStudent",
  data: () => ({
    items: [
      {
        color: '#E5D108 ',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Sunglasses&hatColor=Black&hairColor=Auburn&facialHairType=MoustacheFancy&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=Blue02&eyeType=EyeRoll&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Black',
        title: 'Primer Puesto',
        artist: 'Jaina Gouding',
      },
      {
        color: '#CACFD2  ',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=PastelRed&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Disbelief&skinColor=Yellow',
        title: 'Segundo Puesto',
        artist: 'Ellie Gouding',
      },
      {
        color: '#D68910 ',
        src: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
        title: 'Tercer Puesto',
        artist: 'Ana Maria',
      },
    ],
  }),
}
</script>