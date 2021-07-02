<template>
  <v-card>
    <v-card-title>
      Tutors
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
                    class="elevation-1" ref="tutorialsTable">
        <template>
          <v-icon small class="mr-2" @click="navigateToProfileTutor()">mdi-pencil</v-icon>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn small color="primary" @click="refreshList()">REFRESH</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserApiService from '../../services/users-api.service';
export default {
  name: "tutorials",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Tutor', value: 'tutor'},
        {text: 'Topic', value: 'topic'},
        {text: 'Language', value: 'language'},
        {text: 'Actions', value: 'actions', sortable: false}
      ],
      tutors: [],
      displayTutors: [],
      editedIndex: -1,
      editedItem: {
        tutor: '',
        topic: '',
        language: '',
      },
      defaultItem: {
        tutor: '',
        topic: '',
        language: '',
      },
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Tutor' : 'Edit Tutor'
    },
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
      console.log(tutor);
      return {
        tutor: tutor.tutor,
        topic: tutor.topic,
        language: tutor.language,
      };

    },

    refreshList() {
      this.retrieveTutors();
    },

    editItem(item) {
      this.editedIndex = this.displayTutors.indexOf(item);
      console.log(item);
      this.editedItem = this.tutors[this.editedIndex];
      this.dialog = true;
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

    save() {
      if (this.editedIndex > -1) {
        this.tutors[this.editedIndex] = this.editedItem;
        this.displayTutors[this.editedIndex] = this.getDisplayTutor(this.tutors[this.editedIndex]);
        UserApiService.update(this.editedItem.id, this.editedItem)
            .then(() => {
              this.refreshList();
            })
            .catch(e => {
              console.log(e);
            });

      } else {
        UserApiService.create(this.editedItem)
            .then(response => {
              let item = response.data;
              this.tutors.push(item);
              this.displayTutors.push(this.getDisplayTutor(item));
            })
            .catch(e => {
              console.log(e);
            })
      }
      this.close()
    },

    navigateToProfileTutor() {
      this.$router.push({name: 'tutor-component'});
    }
  },
  mounted() {
    this.retrieveTutors();
  }
}
</script>
<style scoped>

</style>