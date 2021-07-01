<template>
  <v-card>
    <v-card-title>
      Tutorials
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers"
                    :items="displayTutors"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1" ref="tutorsTable">
        <v-card-actions>
        </v-card-actions>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import UserApiService from '../../services/users-api.service';
export default {
  name: "tutors",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Tutor', value: 'name'},
        {text: 'Language', value: 'language'},
        {text: 'Topic', value: 'topic'}
      ],
      tutors: [],
      displayTutors: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        tutor: '',
        topic: ''
      },
      defaultItem: {
        title: '',
        tutor: '',
        topic: ''
      },
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  methods: {
    retrieveTutors() {
      UserApiService.getAll()
          .then(response => {
            this.tutors = response.data;
            this.displayTutors = response.data.map(this.getDisplayTutor);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTutor(tutor) {
      return {
        title: tutor.name,
        name: tutor.language,
        topic: tutor.topic
      };
    },

    refreshList() {
      this.retrieveTutors();
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    navigateToReserveSessions() {
      this.$router.push({name: 'reserve-sessions'});
    }
  },
  mounted() {
    this.retrieveTutors();
  }
}
</script>
<style scoped>

</style>