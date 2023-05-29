

<template>
    <v-app-bar class="white">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-menu min-width="200px" rounded >
            <template v-slot:activator="{props}">
                <v-btn icon v-bind="props">
                    <v-avatar color="brown" icon="mdi-account-circle"></v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar color="brown" icon="mdi-account-circle"></v-avatar>
                        <h3>User</h3>
                        <p class="text-caption mt-1">
                            User Email
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">Account Settings</v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">Logout</v-btn>
                </div>
                </v-card-text>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>


<script lang="ts">
export default {
    name:"MHMTaskbar",
    data(){
        return{
            appTitle: "MSP Support",
        }
    }
}
</script>

<style scoped>
</style>