<template>
  <div class="">
  <Drawer></Drawer>
  <user></user></div>
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
