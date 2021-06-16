<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2 offset-2>
      <div v-for="session in sessions" :key="session.title">
        <v-card elevation="2" class="mx-auto my-3" data-aos-easing="ease">
          <v-card-title>{{session.title}} {{session.id}}</v-card-title>
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
            <v-btn>CANCELAR</v-btn>
            <v-btn color="primary">ENTRAR</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "session",
  data() {
    return {
      sessions: [
        {
          id:1,
          title: "Session",
          init: "7:00pm",
          finish: "8:00pm",
          description:"In the conversation you have to bring topics on the topic to discuss.",
          topic: "Math",
          language: "English"
        },
        {
          id:2,
          title: "Session",
          init: "6:00pm",
          finish: "7:00pm",
          description:"In the conversation you have to bring topics on the topic to discuss.",
          topic: "Vue js",
          language: "English"
        }
      ],
    }
  },

  props: {
  },
};
</script>

<style scoped></style>
