<template>
  <div class="home">
    <banner></banner>
    <more-spoken></more-spoken>
    <badge-component></badge-component>
    <testimonials v-bind:user-visibility="true"></testimonials>
    <v-row>
      <v-col cols="12" md="4">
        <ranking-student></ranking-student>
      </v-col>
      <v-col cols="12" md="8">
        <div>
          <studentfeedback></studentfeedback>
        </div>
      </v-col>
    </v-row>
    <testimonials v-bind:tutor-visibility="true"></testimonials>
    <call-to-login></call-to-login>
    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/home/footer";
import Banner from "@/components/home/banner";
import CallToLogin from "@/components/home/call-to-register";
import RankingStudent from "@/components/home/ranking-student";
import Testimonials from "../components/home/testimonials";
import MoreSpoken from "../components/home/more-spoken";
import Studentfeedback from "../components/home/studentfeedback.vue";
import BadgeComponent from "../components/home/badge-component";
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
