<template>

  <div class="home">

    <navbar></navbar>
    <banner></banner>
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
export default {
  name: 'Home',
  components: {
    RankingStudent,
    Navbar,

    CallToLogin,
    Banner,
    Footer
  }
}
</script>
