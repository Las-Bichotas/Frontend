<template>
  <v-container>
    <h2 class="text-h3 text-lg-h3 text-md-h3 text-sm-h3 mb-5 text-center">Testimonios de nuestros usuarios</h2>
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
                 src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
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
          <v-card-title v-if="index === 0">WEN ZHĀNG - CHINA</v-card-title>
          <v-card-title v-else-if="index === 1">JERRY JOHN - ESTADOS UNIDOS</v-card-title>
          <v-card-title v-else-if="index === 2">JULIANA SILVA - ESPAÑA</v-card-title>
          <v-card-title v-else-if="index === 3">LEO MARTINEZ - COLOMBIA</v-card-title>
          <v-card-text v-if="index === 0" class="text-lg-h7 text-center font-italic">"Antes tenía problemas para hablar con mi jefe de trabajo. Gracias a <strong>ILanguage</strong>
            finalmente puedo comunicarme correctamente".
          </v-card-text>
          <v-card-text  v-else-if="index === 1" class="text-lg-h7 text-center font-italic">"Soy médico y siempre he querido trabajar en España, pero no podía entederme con
            los médicos españoles. Eso ahora no es un problema gracias a <strong>ILanguage</strong>".
          </v-card-text>
          <v-card-text  v-else-if="index === 2" class="text-lg-h7 text-center font-italic">"Me encanta la fotografía y postulé a una escuala en Roma, Italia. Lamentablemente no me
            aceptaron por no conocer los términos técnicos de la especialidad. Me puse a investigar
            y encontré a <strong>ILanguage</strong>, con el que finalmente pude entrar a la escuela".
          </v-card-text>
          <v-card-text  v-else-if="index === 3" class="text-lg-h7 text-center font-italic">"No sabía de la existencia de <strong>ILanguage</strong> hasta que un amigo me lo recomendó. Me suscribí
            con un tutor de música en inglés y realmente cambió mi persepción de las cosas, no he parado
            de aprender nuevos términos sobre este arte".
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br>
    <h2 class="text-h3 text-lg-h3 text-md-h3 text-sm-h3 mb-5 text-center">Testimonios de nuestros tutores</h2>
    <v-row gutters>
      <v-col cols="6" md="6" sm="12" xs="12" v-for="(n, index) in 4" :key="index">
        <v-card elevation="20">
          <v-img v-if="index === 0" height="200px"
                 src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://cdn.vuetifyjs.com/images/john.png" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else-if="index === 1" height="200px"
                 src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else-if="index === 2" height="200px"
                 src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://images.pexels.com/photos/8090289/pexels-photo-8090289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John">
            </v-avatar>
          </v-img>
          <v-img v-else height="200px"
                 src="https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
            <v-avatar size="150" class="avatar justify-center">
              <img src="https://cdn.vuetifyjs.com/images/lists/3.jpg" alt="John">
            </v-avatar>
          </v-img>
          <v-card-title v-if="index === 0">ADRIEN DUBOIS - FRANCIA</v-card-title>
          <v-card-title v-else-if="index === 1">KALÚ KUMAR - INDIA</v-card-title>
          <v-card-title v-else-if="index === 2">HIROTO WATANABE - JAPÓN</v-card-title>
          <v-card-title v-else-if="index === 3">DENISKA KUZNETSOV - RUSIA</v-card-title>
          <v-card-text v-if="index === 0" class="text-lg-h7 text-center font-italic">"Siempre quize poder compartir mis conocimientos en botánica. Ahora gracias a <strong>ILanguage</strong>
            he conseguido eso y además puedo obtener una remuneración sobre esto: ¡es genial!".
          </v-card-text>
          <v-card-text  v-else-if="index === 1" class="text-lg-h7 text-center font-italic">"Mi pasión es la informática y he tenido mucho éxito en mi país gracias a esto.
            Es por eso que he decidio ayudar a otros para que también puedan conseguirlo".
          </v-card-text>
          <v-card-text  v-else-if="index === 2" class="text-lg-h7 text-center font-italic">"Sé todo sobre importaciones de autos. Sin embargo, mis clientes no hablan japonés y eso siempre a los ha
            limitado. Gracias a <strong>ILanguage</strong> ahora puedo ayudar a otras personas a familiarizarse con nuestros términos y conceptos".
          </v-card-text>
          <v-card-text  v-else-if="index === 3" class="text-lg-h7 text-center font-italic">"Muchos de mis amigos argentinos de la facultad me pidieron que les ayudase con el ruso.
            Gracias a la aplicación, ahora no sólo los ayudo a ellos, sino que también a muchas personas de latinoamérica".
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br>
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