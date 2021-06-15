<template>
  <v-footer
      color="#B71C1C"
      rounded
      shaped
      padless
      id="footer"
  >
    <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
    >



      <v-card-text class="white--text">
        <v-row justify="center">
          <v-dialog
              v-model="dialog"
              width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  class="btn-terminos"
              >
                Terms and Conditions
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Terms and Conditions</span>
              </v-card-title>
              <v-card-text class="text-md-center text-justify">
                By accessing and using this service, you accept and agree to be bound by the terms and provisions of this agreement. In addition, by using these particular services, you shall be subject to any applicable rules or usage guidelines posted for such services. Any participation in this service shall constitute acceptance of this agreement. If you do not agree to comply with the foregoing, please do not use it.
                 <strong class="strong-text"><br>Privacy Policy  <br></strong>  Ilanguage informs you about its Privacy Policy regarding the processing and protection of personal data of users and customers that may be collected by browsing or contracting services through the website www.ilanguage.com.
                In this regard, the Holder guarantees compliance with current regulations on the protection of personal data, reflected in the Organic Law 3/2018, of December 5, on the Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD). It also complies with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons (GDPR).
                The use of website implies acceptance of this Privacy Policy as well as the conditions included in the Legal Notice.
                <strong> <br> Collection of personal data <br> </strong> To browse www.ilanguage.com you do not need to provide any personal data. The cases in which you do provide your personal data are the following:
                <ul id="example-2">
                  <li v-for="(datoPersonal) in datosPersonales" v-bind:key="datoPersonal.id">
                     {{ datoPersonal.content }}
                  </li>
                </ul>
                <strong  ><br>Your rights <br> </strong> The Data Controller informs you that you have the right to:
                <ul id="example-1">
                  <li v-for="(derecho) in derechos" v-bind:key="derecho.id">
                    {{ derecho.content }}
                  </li>
                </ul>
                The exercise of these rights is personal and therefore must be exercised directly by the interested party, requesting it directly to the Holder, which means that any customer, subscriber or collaborator who has provided their data at any time may contact the Holder and request information about the data stored and how it has been obtained, request the rectification of the same, request the portability of their personal data, oppose the treatment, limit its use or request the cancellation of such data in the files of the Holder. \n
                To exercise your rights of access, rectification, cancellation, portability and opposition you have to send an email to info@ilanguage.com along with valid proof in law such as a photocopy of your ID card or equivalent.
                You have the right to effective judicial protection and to file a complaint with the supervisory authority, in this case, the Spanish Data Protection Agency, if you consider that the processing of personal data concerning you infringes the Regulation.
                The pages of this website may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in exactly the same way as if you had visited the other website.
                These websites may collect data about you, use cookies, embed additional third-party tracking code, and monitor your interaction using this code.
                <strong> <br> Content from other websites  <br> </strong> Pages on this website may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in exactly the same way as if you had visited the other website.
                These websites may collect data about you, use cookies, embed additional third-party tracking code, and monitor your interaction using this code.
                <strong> <br> Cookie Policy <br> </strong> For this website to function properly it needs to use cookies, which is information that is stored in your web browser.
                In the Cookies Policy page you can consult all the information related to the collection policy, the purpose and treatment of cookies.
                This site and its components are provided for informational purposes only; this site is not responsible for the accuracy, usefulness or availability of any information transmitted or made available through this site and shall not be liable for any errors or omissions in such information" This type of provision will help you avoid liability in the event that a user relies on your information and that causes a problem.
                The site and its original content, features and functionality are the property of ILanguage S.A.C. and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
                The company reserves the right to modify these terms from time to time as it sees fit; furthermore, your continued use of the site will signify your acceptance of any adjustment to such terms. If there are any changes to our privacy policy, we will post notices on our home page and other important pages of our site that such changes have been made. If there are any changes on our site regarding how we use our customers' personally identifiable information, we will send a notice by e-mail or postal mail to those who are affected by the change. Any changes to our privacy policy will be posted on our site 30 days before such changes occur. Therefore, you are encouraged to re-read this statement on a regular basis.

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                  Disagree
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <strong>ILanguage</strong> is a web and mobile application that allows you to learn and/or improve various languages. Users are people who want to specialize in or further practice a language. Therefore, it is a requirement that users have at least a basic knowledge. The app will have only one version, which is through subscriptions.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>ILanguage</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "footer",
  data(){
    return {
      dialog: false,
      datosPersonales: [
        {id:1, content:"By contacting us through the contact forms or sending an e-mail."},
        {id:2, content: "When commenting on an article or page."},
        {id:3, content: "When you sign up for a subscription form"}
      ],
      derechos:[
        {id:1,content: "Request access to stored data"},
        {id:2,content:"Request rectification or cancellation"},
        {id:3,content:"Request the limitation of your treatment"},
        {id:4,content:"Oppose treatment"},
        {id:5,content:"Request the portability of your data"}
      ]
    }

  }
}
</script>

<style scoped>
#footer{
  background-color: #42b983 !important;
  color: #42b983;
}

.btn-terminos{
  margin-top: 10px;
  border-bottom: 1px solid;
  padding-bottom: 10px;
}
.strong-text{
  text-decoration-skip-ink: revert;
}

</style>
