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
                Terminos y condiciones
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Terminos y condiciones</span>
              </v-card-title>
              <v-card-text class="text-md-center text-justify">
                Al acceder y utilizar este servicio, usted acepta y accede a estar obligado por los términos y disposiciones de este acuerdo. Asimismo, al utilizar estos servicios particulares, usted estará sujeto a toda regla o guía de uso correspondiente que se haya publicado para dichos servicios. Toda participación en este servicio constituirá la aceptación de este acuerdo. Si no acepta cumplir con lo anterior, por favor, no lo utilice.
                <strong class="strong-text"><br>Politica de privacidad <br></strong>  Ilanguage  te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio Web www.ilanguage.com
                En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).
                El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal. <strong> <br> Obtención de datos personales <br> </strong> Para navegar por www.ilanguage.com no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los siguientes:
                <ul id="example-2">
                  <li v-for="(datoPersonal) in datosPersonales" v-bind:key="datoPersonal.id">
                     {{ datoPersonal.content }}
                  </li>
                </ul>
                <strong  ><br>Tus derechos <br> </strong> El Titular te informa que sobre tus datos personales tienes derecho a: /n
                <ul id="example-1">
                  <li v-for="(derecho) in derechos" v-bind:key="derecho.id">
                    {{ derecho.content }}
                  </li>
                </ul>
                El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular. \n
                Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a info@ilanguage.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.
                Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.
                Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.
                Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.
                <strong> <br> Contenido de otros sitios web  <br> </strong> Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.
                Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.
                <strong> <br> Política de cookies <br> </strong> Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en tu navegador web.
                En la página Política de Cookies puedes consultar toda la información relativa a la política de recogida, la finalidad y el tratamiento de las cookies.
                Esta página y sus componentes se ofrecen únicamente con fines informativos; esta página no se hace responsable de la exactitud, utilidad o disponibilidad de cualquier información que se transmita o ponga a disposición a través de la misma; no será responsable por cualquier error u omisión en dicha información”.Este tipo de disposición te ayudará a evitar responsabilidad en caso de que un usuario se base en tu información y eso cause un problema.
                La página y su contenido original, las características y la funcionalidad son propiedad de ILanguage S.A.C y están protegidos por derechos de autor internacionales, marcas registradas, patentes, secretos comerciales y demás leyes de propiedad intelectual o de derechos de propiedad.
                La empresa se reserva el derecho de modificar estas condiciones de vez en cuando según lo considere oportuno; asimismo, el uso permanente de la página significará su aceptación de cualquier ajuste a tales términos. Si hay algún cambio en nuestra política de privacidad, anunciaremos en nuestra página principal y en otras páginas importantes de nuestro sitio que se han hecho tales cambios. Si hay algún cambio en nuestra página respecto a la manera en que usamos la información de identificación personal de nuestros clientes, enviaremos una notificación por correo electrónico o correo postal a aquellos que sean afectados por el cambio. Todo cambio en nuestra política de privacidad se publicará en nuestra página 30 días antes de que tales cambios ocurran. Por lo tanto, se le recomienda volver a leer esta declaración de manera regular

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
        <strong>ILanguage</strong> es una aplicación web y móvil que permite aprender y/o perfeccionar diversos idiomas. Los usuarios son personas que quieran especializarse o practicar más algún idioma. Por ello, es un requisito que los usuarios tengan un conocimiento básico, por lo menos. La app contará con una sola versión, la cual es mediante suscripciones.
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
        {id:1, content:"Al contactar a través de los formularios de contacto o enviar un correo electrónico."},
        {id:2, content: "Al realizar un comentario en un artículo o página."},
        {id:3, content: "Al inscribirte en un formulario de suscripción"}
      ],
      derechos:[
        {id:1,content: "Solicitar el acceso a los datos almacenado"},
        {id:2,content:"Solicitar una rectificación o la cancelación"},
        {id:3,content:"Solicitar la limitación de su tratamiento"},
        {id:4,content:"Oponerte al tratamiento"},
        {id:5,content:"Solicitar la portabilidad de tus datos"}
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
