<template>
  <v-app>
    <v-main>
      <Banner />
      <Call-To-Register/>
    </v-main>
  </v-app>
</template>

<script>
import Banner from "./components/banner";
import CallToRegister from "./components/call-to-register";

export default {
  name: "App",

  components: {
    Banner,
    CallToRegister,
  },

  data: () => ({
    //
  }),
};
</script>
