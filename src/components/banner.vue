<template>
  <v-banner elevation="4">
    <div class="d-flex justify-space-around align-center">
      <div class="mr-16 ml-16">
        <div class="text-h1 mb-5">
          ILanguage
        </div>
        <p class="text-h6">
          La mejor forma de estudiar un idioma platicando con nativos del
          lenguage que prefieras
        </p>
      </div>
      <v-carousel hide-delimiters cycle :show-arrows="false" height="600">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
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

<style scoped></style>
