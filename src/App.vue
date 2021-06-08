<template>
  <v-app>
    <v-main>
      <Banner />
    </v-main>
  </v-app>
</template>

<script>
import Banner from "./components/banner";

export default {
  name: "App",

  components: {
    Banner,
  },

  data: () => ({
    //
  }),
};
</script>
