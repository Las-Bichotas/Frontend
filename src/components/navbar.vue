
<template>
  <div id = "app">



    <v-app-bar
        color="primary"
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>ILanguage</v-toolbar-title>
      <v-spacer></v-spacer>


          <v-toolbar-items class="hidden-sm-and-down" >
          <v-btn

              color="red"
              dark
          >
            Register
            <v-icon
                dark
                right
            >
              mdi-robot
            </v-icon>
          </v-btn>

          <v-btn

              color="success"
              dark

          >
            Log in
            <v-icon
                dark
                right
            >
              mdi-robot-happy
            </v-icon>
          </v-btn>
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
            active-class="deep-purple--text text--accent-4"
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
