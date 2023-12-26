<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" color="teal">
                <div class="p-2 pt-10 flex items-center justify-center gap-2">
                    <img :src="logoBilling" class="w-6" />
                    <span v-if="!rail" class="font-bold text-2xl">Mixercon</span>
                </div>
                <v-list density="compact" nav class="pt-10">
                    <v-list-item @click="selectItem('home')" prepend-icon="mdi-view-dashboard" title="Home" value="home"
                        :class="{ 'selected-item': selectedItem === 'home' }"></v-list-item>
                    <v-list-item @click="selectItem('account')" prepend-icon="mdi-account" title="My Account"
                        value="account" :class="{ 'selected-item': selectedItem === 'account' }"></v-list-item>
                    <v-list-item @click="selectItem('users')" prepend-icon="mdi-account-group-outline" title="Users"
                        value="users" :class="{ 'selected-item': selectedItem === 'users' }"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-50">
                <div class="w-full bg-white flex justify-between items-center px-3 shadow-sm">
                    <v-btn variant="text" icon="mdi-menu" color="blue-grey-lighten-1" class="cursor-pointer"
                        @click.stop="rail = !rail"></v-btn>
                    <div class="flex gap-2 items-center">
                        <div class="flex items-center text-start text-xs">
                            <v-list>
                                <v-list-item class="text-start text-xs item-personalizado" :prepend-avatar="avatarPath"
                                    title="Hola, Juan" subtitle="Administrador">
                                </v-list-item>
                            </v-list>
                        </div>
                        <MenuAsPopover />
                    </div>
                </div>
                <router-view />
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import avatarImage from "@/assets/iconuser_hombre.png";
import LogoBilling from "@/assets/login/BillingLogo.png";
import MenuAsPopover from '@/components/general/MenuAsPopover.vue';

export default {
    components: {
        MenuAsPopover,
    },
    data() {
        return {
            avatarPath: avatarImage,
            logoBilling: LogoBilling,
            drawer: true,
            rail: true,
            selectedItem: null // Variable para almacenar el elemento seleccionado
        }
    },
    methods: {
        selectItem(item) {
            // Método para actualizar el elemento seleccionado
            this.selectedItem = item;
            // Aquí puedes realizar acciones adicionales en base al elemento seleccionado
        }
    }
}
</script>
<style>
.v-list-item-title {
    font-size: 14px !important;
}

.v-list-item-subtitle {
    font-size: 13px !important;
}

.selected-item {
    background-color: #2dd4be70 !important;
    /* Cambia el fondo del item seleccionado según tu preferencia */
    /* Agrega estilos adicionales para indicar que el elemento está seleccionado */
}
</style>