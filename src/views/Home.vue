<template>

  <div class="home">

    <navbar></navbar>
    <banner></banner>
    <more-spoken></more-spoken>
    <testimonials></testimonials>
    <call-to-login></call-to-login>
    <ranking-student></ranking-student>
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
  name: 'Home',
  components: {
    MoreSpoken,
    Testimonials,
    RankingStudent,
    Navbar,
    CallToLogin,
    Banner,
    Footer
  }
}
</script>
