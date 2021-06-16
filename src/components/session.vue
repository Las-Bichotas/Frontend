<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-md2 offset-2>
      <div v-for="session in sessions" :key="session.id">
        <v-card elevation="2" class="mx-auto my-3" data-aos-easing="ease">
          <v-card-title>{{ session.title }} {{session.day}}</v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip>{{ session.init }}</v-chip>
              <v-chip>{{ session.finish }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <div>{{ session.description }}</div>
            </v-row>
          </v-card-text>
          <v-card-text>
            <v-chip-group column>
              <v-chip>{{ session.topic }}</v-chip>
              <v-chip>{{ session.language }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn>CANCELAR</v-btn>

            <v-dialog v-model="dialog" width="700">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary " dark v-bind="attrs" v-on="on">
                  ENTER TO SESSION
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Session day {{ session.day }} start {{ session.init }}
                </v-card-title>

                <v-card-text>
                  <v-card-title>
                    {{ session.description }}
                  </v-card-title>
                  <v-card-title>
                    Enter the session:
                    {{ session.link }}
                  </v-card-title>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Copy link
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
      dialog: false,
      sessions: [
        {
          id: 1,
          title: "Session",
          day: "14/05/2021",
          init: "7:00pm",
          finish: "8:00pm",
          description:
            "In the conversation you have to bring topics on the topic to discuss.",
          topic: "Math",
          language: "English",
          link: "https://zoom.us/j/1100000",
        },
        {
          id: 2,
          title: "Session",
          day: "20/05/2021",
          init: "6:00pm",
          finish: "7:00pm",
          description:
            "In the conversation you have to bring topics on the topic to discuss.",
          topic: "Vue js",
          language: "English",
          link: "https://zoom.us/j/1100000",
        },
      ],
    };
  },

  props: {},
};
</script>

<style scoped></style>
