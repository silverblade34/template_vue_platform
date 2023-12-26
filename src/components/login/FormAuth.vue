<template>
    <div class="w-full pt-4">
        <div>
            <p class="text-2xl pb-2 font-bold text-teal-500 text-center">Facturación electrónica</p>
            <img :src="imgLogin" class="animation a6" style="margin: 0 auto 10px;width: 150px">
        </div>

        <v-card class="mx-auto pa-8 pt-5 elevation-0" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

            <v-text-field density="compact" placeholder="Ingrese su usuario" prepend-inner-icon="mdi-account"
                variant="outlined" v-model="username" color="teal"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Contraseña

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
                    Olvidaste tu contraseña?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Ingrese su contraseña" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible" v-model="password" color="teal"></v-text-field>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="validateLogin">
                Ingresar
            </v-btn>
        </v-card>
    </div>
</template>
<script>
import { ref } from 'vue'
import ImgLogin from '@/assets/login/logo_sysnet.png'

export default {
    data: () => ({
        visible: false,
        imgLogin: ImgLogin
    }),
    emits: ['validate-login'],
    setup(_, { emit }) {
        const username = ref('');
        const password = ref('');

        const validateLogin = () => {
            const data = {
                username: username.value,
                password: password.value
            }
            emit('validate-login', data)
        }

        return {
            username,
            password,
            validateLogin
        }
    }
}
</script>