<template>
  
    
    <v-navigation-drawer
        absolute
        expand-on-hover
        right
        
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
</template>


<script>
export default {
  data () {
    return {
      
      items: [
        { title: 'Session', icon: 'mdi-home', route: "newsession" },
        { title: 'Profile', icon: 'mdi-account', route: "profile" },
        { title: 'Search', icon: 'mdi-account-search' , route: "profile"},
      ],
     
    }
  },
}
</script>