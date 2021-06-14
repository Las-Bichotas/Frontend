<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2 offset-2>
      <div v-for="session in sessions" :key="session.title">
        <v-card elevation="2" class="mx-auto" hover >
          <v-card-title>{{session.title}}</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip>{{session.init}}</v-chip>
              <v-chip>{{session.finish}}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div>{{session.description}}</div>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-chip-group column>
              <v-chip>{{session.topic}}</v-chip>
              <v-chip>{{session.language}}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn>ENTRAR</v-btn>
            <v-btn>CANCELAR</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "session",
  props: {
    sessions: Array,
  },
};
</script>

<style scoped></style>
