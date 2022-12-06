<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</template>
<script>
export default {
    name : "DefAppNav",
    methods : {
        toggleNav(){
            this.$emit("toggleNav");
        }
    }
}
</script>