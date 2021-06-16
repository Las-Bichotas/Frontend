
<template>
  <div id = "app">
    <v-app-bar
        color="primary"
dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >

      <v-app-bar-nav-icon  @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <router-link :to="{name: 'Home'}">
      <v-toolbar-title class="homeBtn">ILanguage</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down"  >
              <v-btn  color="primary" v-for="navH in navhome" :key="navH.text" router :to="navH.route" elevation="3">
              {{ navH.text }}</v-btn>
          </v-toolbar-items>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto">
    </v-sheet>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        width = "200"
        id = "drawer"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="blue--text text--accent-4"
        >
          <v-list-item v-for="link in navidrahome" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon> {{ link.icon }} </v-icon>
            </v-list-item-icon>

              <v-list-item-title >{{ link.text }}</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


</div>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    drawer: false,
    navidrahome: [
      { icon: 'mdi-account-circle', text: 'Login', route: 'Login' },
      { icon: 'mdi-cloud', text: 'Register', route: 'Register' },
    ],
    navhome: [
      {  text: 'Login', route: 'Login' },
      {  text: 'Register', route: 'Register' },
    ],
    group: null,
  }),
}
</script>

<style scoped>
.homeBtn{
text-decoration: none !important;
  color: #ffffff;
  text-outline: none;

}
.NavDr{
  text-decoration: none !important;
  color: black;
  text-outline: none;

}
</style>