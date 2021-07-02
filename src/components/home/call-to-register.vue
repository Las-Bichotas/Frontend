<template>
  <v-banner elevation="4">
    <v-container>
      <v-row>
        <v-col lg="6" class="d-flex justify-center order-2 order-lg-1">
          <div>
            <v-img
              contain
              lazy-src="../../assets/studyng.jpg"
              src="../../assets/studyng.jpg"
              width="500"
            ></v-img>
          </div>
        </v-col>
        <v-col
          lg="6"
          class="d-flex align-center justify-center order-1 order-lg-2"
        >
          <div>
            <h1 class="text-h3 text-lg-h1 text-md-h2 text-sm-h2 mb-6">
              Subscribe now
            </h1>
            <p class="text-h6 text-justify">
              Subscribe now and live the best language learning experience
              learning with native tutors. Have conversations with native
              speakers and practice your fluency in our app.
            </p>
            <v-divider class="mb-4"></v-divider>

            <p class="text-h6 text-justify">
              Join our staff of tutors and share your knowledge in your own
              language.
            </p>
            <div>
              <router-link :to="{ name: 'login' }">
                <v-btn block large color="primary" elevation="6" class="mb-5"
                  >Login</v-btn
                ></router-link
              >
              <router-link :to="{ name: 'register' }">
                <v-btn block large elevation="6" outlined>
                  Register</v-btn
                ></router-link
              >
            </div>
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
