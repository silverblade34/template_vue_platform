<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
                <div class="p-2 pt-8 flex items-center justify-center">
                    <img :src="logoBusiness" class="w-[4rem]"/>
                </div>
                <v-divider></v-divider>
                <v-list density="compact" nav class="pt-5">
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main class="h-screen bg-slate-50">
                <div class="w-full bg-white flex justify-between items-center px-3">
                    <v-btn variant="text" icon="mdi-menu" color="blue-grey-lighten-1" class="cursor-pointer" @click.stop="rail = !rail"></v-btn>
                    <div class="flex items-center text-start text-xs">
                        <v-list>
                            <v-list-item class="text-start text-xs item-personalizado" :prepend-avatar="avatarPath" title="Hola, Juan"
                                subtitle="Administrador">
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
                <router-view />
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import avatarImage from "@/assets/iconuser_hombre.png";
import logoBusiness from "@/assets/logo.png";

export default {
    data() {
        return {
            avatarPath: avatarImage,
            logoBusiness: logoBusiness,
            drawer: true,
            rail: true,
        }
    },
}
</script>
<style>
.v-list-item-title {
    font-size: 14px !important;
}

.v-list-item-subtitle{
    font-size: 13px !important;
}
</style>