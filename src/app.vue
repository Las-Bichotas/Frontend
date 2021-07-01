<template>
  <v-app>

    <div id="app">
      <div id="nav">
       <navbar ></navbar>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
