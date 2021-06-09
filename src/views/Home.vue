<template>
  <div class="home">

    <banner></banner>
    <call-to-login></call-to-login>
    <Footer> </Footer>
  </div>

</template>

<script>
// @ is an alias to /src

import Footer from "@/components/footer";
import Banner from "@/components/banner";
import CallToLogin from "@/components/call-to-register";
export default {
  name: 'Home',
  components: {
    CallToLogin,
    Banner,
    Footer
  }
}
</script>
