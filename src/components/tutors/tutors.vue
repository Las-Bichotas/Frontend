<template>
  <div>
    <Drawer></Drawer>
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
  </div>
</template>

<script>
import UserApiService from '../../services/users-api.service';
import Drawer from "../home/drawer-main";

export default {
  components: { Drawer },
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
      users: [],
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
      UserApiService.getAllTutors()
          .then(response => {
            this.users = response.data;
            this.displayTutors = response.data.map(this.getDisplayTutor);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayTutor(user) {
      console.log(user);
      return {
        users: user.tutor,
        topic: user.topic,
        language: user.language,
      };

    },

    refreshList() {
      this.retrieveTutors();
    },

    editItem(item) {
      this.editedIndex = this.displayTutors.indexOf(item);
      console.log(item);
      this.editedItem = this.users[this.editedIndex];
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