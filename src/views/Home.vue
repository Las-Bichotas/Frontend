<template>
  <div class="home">
    <navbar></navbar>
    <banner></banner>
    <v-row>
      <v-col cols="6">
        <more-spoken></more-spoken>
      </v-col>
      <v-col cols="6">
        <more-spoken></more-spoken>
      </v-col>
    </v-row>
    <testimonials></testimonials>
    <v-row>
      <v-col cols="6">
        <ranking-student></ranking-student>
      </v-col>
      <v-col cols="6"></v-col>
    </v-row>
    <testimonials></testimonials>
    <call-to-login></call-to-login>
    <Footer> </Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/footer";
import Banner from "@/components/banner";
import CallToLogin from "@/components/call-to-register";
import Navbar from "@/components/Navbar";
import RankingStudent from "@/components/RankingStudent";
import Testimonials from "../components/testimonials";
import MoreSpoken from "../components/more-spoken";
export default {
  name: "Home",
  components: {
    MoreSpoken,
    Testimonials,
    RankingStudent,
    Navbar,
    CallToLogin,
    Banner,
    Footer,
  },
};
</script>
