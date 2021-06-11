<template>
  <v-banner elevation="4">
    <v-container class="d-flex justify-center">
      <v-row>
        <v-col lg="6" class="d-flex justify-center order-2 order-lg-1">
          <div>
            <v-img
              contain
              lazy-src="../assets/studyng.jpg"
              src="../assets/studyng.jpg"
              width="500"
            ></v-img>
          </div>
        </v-col>
        <v-col lg="6" class="d-flex align-center justify-center order-1 order-lg-2">
          <div>
            <h1 class="text-h3 text-lg-h1 text-md-h2 text-sm-h2 mb-6">
              Suscribete ya
            </h1>
            <p class="text-h6">
              Suscribete ya y vive la mejor experiencia en aprendizaje de
              idiomas aprendiendo con tutores nativos. Ten conversaciones con
              hablantes nativos y practica tu fluides en nuestra app.
            </p>
            <v-divider class="mb-4"></v-divider>

            <p class="text-h6">
              Unete a nuestro staff de tutores y comparte tus conocimientos en
              tu idioma
            </p>
            <router-link :to="{name: 'Login'}">
            <v-btn block large color="primary" elevation="6" class="mb-5" >Login</v-btn></router-link>

            <router-link :to="{name: 'Register'}">
              <v-btn block large elevation="6" outlined> Register</v-btn></router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-banner>
</template>

<script>
export default {
  name: "call-to-login",
};
</script>
<style scoped></style>
