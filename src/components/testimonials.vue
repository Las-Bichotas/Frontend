<template>
  <v-container>
    <br>
    <h2 class="text-h3 text-lg-h3 text-md-h3 text-sm-h3 mb-5 text-center" v-if="visitility">Testimonials from our users</h2>
    <h2 class="text-h3 text-lg-h3 text-md-h3 text-sm-h3 mb-5 text-center" v-else>Testimonials from our tutors</h2>
    <v-row gutters>
      <v-col cols="6" md="6" sm="12" xs="12" v-for="(user, index) in users" :key="index">

        <v-card elevation="20">

          <div v-if="index <= 3 && visitility">
            <v-img height="200px" :src=user.img>
              <v-avatar size="150" class="avatar justify-center">
                <img :src=user.avatar alt="John">
              </v-avatar>
            </v-img>
            <v-card-title> {{ user.name }}</v-card-title>
            <v-card-text v-if="index === 0" class="text-lg-h7 text-center font-italic">"I used to have trouble talking to my boss at work.
              Thanks to <strong>ILanguage</strong>, I can finally communicate properly. I can finally communicate properly".
            </v-card-text>
            <v-card-text  v-else-if="index === 1" class="text-lg-h7 text-center font-italic">"I am a doctor and I have always wanted to
              work in Spain, but I could not understand Spanish doctors. That is not a problem now thanks to <strong>ILanguage</strong>".
            </v-card-text>
            <v-card-text  v-else-if="index === 2" class="text-lg-h7 text-center font-italic">"I love photography and I applied to a school
              in Rome, Italy. Unfortunately I was not accepted because I did not know the technical terms of the specialty. I started researching
              and found <strong>ILanguage</strong>, with which I was finally able to enter the school".
            </v-card-text>
            <v-card-text  v-else-if="index === 3" class="text-lg-h7 text-center font-italic">"I didn't know about <strong>ILanguage</strong> until
              a friend recommended it to me. I subscribed with a music tutor in English and it really changed my perception of things. learning new terms about this art".
            </v-card-text>
          </div>

          <div v-else-if="index >= 4 && !visitility" >
            <v-img height="200px" :src=user.img>
              <v-avatar size="150" class="avatar justify-center">
                <img :src=user.avatar alt="John">
              </v-avatar>
            </v-img>
            <v-card-title> {{ user.name }}</v-card-title>
            <v-card-text v-if="index === 4" class="text-lg-h7 text-center font-italic">"I always wanted to be able to share my knowledge in botany. Now thanks to <strong>ILanguage</strong>.
              I have achieved that and I can also get paid for it: it's great!".
            </v-card-text>
            <v-card-text  v-else-if="index === 5" class="text-lg-h7 text-center font-italic">"My passion is computers and I have been very successful in my country thanks to this.
              That is why I have decided to help others so that they can also achieve it".
            </v-card-text>
            <v-card-text  v-else-if="index === 6" class="text-lg-h7 text-center font-italic">"I know all about car imports. However, my clients don't speak Japanese and that has
              always limited them. Thanks to <strong>ILanguage</strong> I can now help others become familiar with our terms and concepts".
            </v-card-text>
            <v-card-text  v-else-if="index === 7" class="text-lg-h7 text-center font-italic">"Many of my Argentinean friends from college asked me to help them with their Russian.
              Thanks to the application, now I help not only them, but also many people from Latin America".
            </v-card-text>
          </div>

        </v-card>
      </v-col>
    </v-row>
    <br>
  </v-container>
</template>

<script>
export default {
  name: "testimonials",
  data() {
    return {
      users: [
        { name: 'WEN ZHĀNG - CHINA', img: 'https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/4310415/pexels-photo-4310415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
        { name: 'JERRY JOHN - UNITED STATES', img: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://cdn.vuetifyjs.com/images/john.jpg' },
        { name: 'JULIANA SILVA - SPAIN', img: 'https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
        { name: 'LEO MARTINEZ - COLOMBIA', img: 'https://images.pexels.com/photos/17658/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/6897188/pexels-photo-6897188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
        { name: 'ADRIEN DUBOIS - FRANCE', img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://cdn.vuetifyjs.com/images/john.png ' },
        { name: 'KALÚ KUMAR - INDIA', img: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { name: 'HIROTO WATANABE - JAPAN', img: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://images.pexels.com/photos/8090289/pexels-photo-8090289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
        { name: 'DENISKA KUZNETSOV - RUSSIA', img: 'https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      ],
      visitility: true
    }
  },
  props: {  userVisibility: Boolean }
}
</script>

<style scoped>
  .avatar {
    margin-top: 15px;
  }

</style>