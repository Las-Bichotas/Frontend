<template>
  <v-app>
    <v-layout row wrap align-center>
      <v-flex xs8 offset-md2 offset-2>
        <div>
          <v-card>
            <v-card-text>
              <v-avatar size="227">
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
              <v-card-title>Name:</v-card-title>
              <v-card-title>Email:</v-card-title>
              <v-card-title>Description:</v-card-title>
              <v-chip-group column>
                <v-chip>Topic</v-chip>
                <v-chip>Language</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
