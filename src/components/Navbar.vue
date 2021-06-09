<template>
  <v-card
      class="mx-auto overflow-hidden"
      height="400"
  >
    <v-app-bar
        color="deep-purple"
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ILanguage</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="text-center">
        <div>
          <v-btn
              class="ma-2"
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
              class="ma-2"
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
        </div>
      </div>
    </v-app-bar>
    <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="600"
    >

    </v-sheet>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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