<template>
    <v-app>
        <add-session></add-session>
    </v-app>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AddSession from '../components/sessions/add-session.vue'


export default defineComponent({
  components: {AddSession  },
    setup() {
        
    },
})
</script>
