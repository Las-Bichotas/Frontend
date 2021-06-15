<template>
  <v-app>

    <div id="app">
      <div id="nav">
       <navbar class="nvbar"></navbar>
      </div>
      <router-view />
    </div>

    <br>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {


  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nvbar{

}
</style>
