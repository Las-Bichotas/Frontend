<template>
  <v-card  elevation="24" max-width="500" class="mx-auto">
    <v-list two-line>
      <v-list-item class="text-center">
        <v-list-item-content>
          <v-list-item-content>Estas son algunas de las insignias que se puede coseguir en nuestra aplicacion. Estas diferentes insignias son para los estudiantes y profesores</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  <v-carousel :show-arrows="false" :cycle="true">
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: "badge-component",
  data () {
    return {
      items: [
        {src:require("../assets/insignia1.png")},
        {src:require("../assets/insignia2.png")},
        {src:require("../assets/insignia3.png")},
        {src:require("../assets/insignia4.png")},
      ],
    }
  },
}
</script>

<style scoped>

</style>