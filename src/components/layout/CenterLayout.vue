<template>
   <v-app>
        <router-view name="header" />
        <v-main>
            <v-container >  
                <router-view />
            </v-container>
        </v-main> 
        <router-view name="footer" />
    </v-app>
</template>
<script>
export default {
    name : "CenterLayout"
}
</script>