<template>
    <v-app>
      <Drawer></Drawer>
        <add-session></add-session>
    </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AddSession from '../components/sessions/add-session.vue'
import Drawer from "@/components/home/drawer-main";


export default defineComponent({
  components: {AddSession,Drawer,  },
    setup() {
        
    },
})
</script>
