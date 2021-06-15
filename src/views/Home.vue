<template>
  <div class="home">

    <banner></banner>
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
    <testimonials v-bind:user-visibility="true"></testimonials>
    <badge-component></badge-component>
    <testimonials v-bind:tutor-visibility="true"></testimonials>
    <call-to-login></call-to-login>

    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/footer";
import Banner from "@/components/banner";
import CallToLogin from "@/components/call-to-register";
import RankingStudent from "@/components/ranking-student";
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
