
<template>
  <div id = "app">
    <v-app-bar
        color="primary"

        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >

      <v-app-bar-nav-icon       @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <router-link :to="{name: 'Home'}">
      <v-toolbar-title class="homeBtn">ILanguage</v-toolbar-title></router-link>
      <v-spacer></v-spacer>


          <v-toolbar-items class="hidden-sm-and-down" >

              <router-link :to="{name: 'Register'}">
                <v-btn large color="primary" > Register</v-btn> </router-link>

            <router-link :to="{name: 'Login'}">
              <v-btn large color="primary"  flat >
                Login</v-btn
              > </router-link>
          </v-toolbar-items>


    </v-app-bar>



    <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"

    >

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
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>



          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Student</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-tie</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Teacher</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cloud</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Register</v-list-item-title>
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

</style>