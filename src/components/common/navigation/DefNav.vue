<template>
    <v-navigation-drawer v-model="isToggle" app>
        네비게이션
    </v-navigation-drawer>
</template>
<script>
export default {
    name : "DefNav",
    data(){
        return {
            isToggle : false
        }
    },
    methods : {
        toggleNav(){
            this.isToggle = !this.isToggle;
        }
    }
}
</script>