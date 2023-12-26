<template>
  <div class="flex justify-center items-center w-full h-screen overflow-y-hidden">
    <div class="grid grid-cols-2 w-full h-full">
      <div class="col-span-1">
        <div class="flex justify-center items-center h-full w-full">
          <div class="w-full">
            <div v-if="statusError" class="flex justify-center">
              <v-alert color="#FF5250" theme="dark" icon="mdi-alert-circle" density="compact" closable
                class="max-w-[25rem]" border>
                {{ messageError }}
              </v-alert>
            </div>
            <FormAuthVue @validate-login="onValidateLogin" />
          </div>
        </div>
      </div>
      <div class="relative col-span-1 h-full">
        <div class="absolute inset-0 bg-teal-500 container_frontpage opacity-50 z-0"></div> <!-- Capa transparente -->
        <div class="z-10 relative flex flex-col items-center justify-center h-full">
          <!-- <h2 class="text-teal-400 font-bold text-3xl text-center pb-10">Facturación electrónica</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import FormAuthVue from '@/components/login/FormAuth.vue';
import ImgFrontPage from '@/assets/login/FrontPage.png';
import { authLoginApi } from '@/api/LoginService';
import { useRouter } from 'vue-router';
import store from '@/store';

export default {
  components: {
    FormAuthVue
  },
  data: () => ({
    visible: false,
    imgFrontPage: ImgFrontPage
  }),
  setup() {
    const messageError = ref('');
    const statusError = ref(false);
    const router = useRouter();

    const onValidateLogin = (data) => {
      console.log(data)
      authLoginApi(data)
        .then(response => {
          const user = response.data.data
          store.commit('setUsername', user.username);
          store.commit('setToken', user.token);
          store.commit('setIsAuthenticated', true);
          router.push('/');
        })
        .catch(error => {
          statusError.value = true
          if (error.response) {
            if (error.response.status === 401) {
              // Manejar el error de Unauthorized (401) aquí
              messageError.value = "Las credenciales de usuario no son válidas"
            } else if (error.response.status === 500) {
              // Manejar el error de Internal Server Error (500) aquí
              messageError.value = "Error 500: Error interno del servidor"
            } else {
              // Otros códigos de estado pueden ser manejados aquí
              messageError.value = "Error:", error.response.data
            }
          } else if (error.request) {
            // La solicitud fue realizada pero no se recibió respuesta
            messageError.value = "No se recibió respuesta del servidor"
          } else {
            // Ocurrió un error al configurar la solicitud
            messageError.value = "Error al configurar la solicitud:", error.message
          }
        });
    }

    return {
      onValidateLogin,
      messageError,
      statusError
    }
  }
}
</script>
<style scoped>
/* Estilos para la capa transparente */
.container_frontpage {
  background-image: url('../assets/login/FrontPage.png');
  /* Ruta de la imagen */
  background-size: auto;
  background-position: center;
}
</style>