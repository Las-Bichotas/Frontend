<template>
  <div class="home">

    <banner></banner>
    <!--v-row>
      <v-col cols="6">
        <more-spoken></more-spoken>
      </v-col>
      <v-col cols="6">
        <more-spoken></more-spoken>
      </v-col>
    </v-row-->
    <more-spoken></more-spoken>

    <v-row>
      <v-col cols="4">
        <ranking-student></ranking-student>
      </v-col>
      <v-col cols="8">
    <v-container fluid>
      <studentfeedback></studentfeedback>
    </v-container>
      </v-col>
    </v-row>
    <testimonials></testimonials>
    <badge-component></badge-component>

    <call-to-login></call-to-login>

    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/footer";
import Banner from "@/components/banner";
import CallToLogin from "@/components/call-to-register";
import RankingStudent from "@/components/RankingStudent";
import Testimonials from "../components/testimonials";
import MoreSpoken from "../components/more-spoken";
import Studentfeedback from '../components/studentfeedback.vue';
import BadgeComponent from "../components/badge-component";
export default {
  name: "Home",
  components: {
    BadgeComponent,
    MoreSpoken,
    Testimonials,
    RankingStudent,
    CallToLogin,
    Banner,
    Footer,
    Studentfeedback,
  },
};
</script>
