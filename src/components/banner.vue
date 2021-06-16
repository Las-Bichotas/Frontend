<template>
  <v-banner elevation="4">
    <v-container>
      <v-row>
        <v-col lg="6" class="d-flex align-center justify-center">
          <div>
            <h1 class="text-h3 text-lg-h1 text-md-h2 text-sm-h2 mb-5">
              ILanguage
            </h1>
            <p class="text-h6">
              The best way to study a language is to practice it.
            </p>
            <p class="text-subtitle-1">
              Have a conversation with our native tutors on the topic of your choice.
            </p>
            <div>
              <router-link :to="{name: 'Login'}">
                <v-btn large color="primary" elevation="3" class="mr-2">
                  Login</v-btn
                > </router-link>
              <router-link :to="{name: 'Register'}">
                <v-btn large elevation="3"> Register</v-btn> </router-link>
            </div>
          </div>
        </v-col>
        <v-col lg="6">
          <v-carousel hide-delimiters cycle :show-arrows="false" height="600">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-banner>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      items: [
        { src: require("../assets/zoom-conversation.jpg") },
        { src: require("../assets/conversation-twomens.jpg") },
        { src: require("../assets/conversation-twowomans.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.app-color {
  color: #2699fb;
}
.h-xs-extra {
  font-family: Roboto;
}
</style>
