<template>
  <v-app>
   <Drawer></Drawer>
    <user></user>
  </v-app>
</template>

<script>
import user from '../components/user.vue'
import Drawer from "@/components/home/drawer-main";
export default {
  components: { user, Drawer, },
  name: "profile",

}
</script>

<style>

</style>
