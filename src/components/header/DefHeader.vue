<template>
    <div>
        <def-nav ref="nav"  />
        <def-app-nav @toggleNav="() => {this.$refs.nav.toggleNav();}" />
    </div>
</template>
<script>
import DefNav from '@/components/common/navigation/DefNav.vue';
import DefAppNav from '@/components/common/navigation/app/DefAppNav.vue';

export default {
    name : "DefHeader",
    components : {
        DefNav, DefAppNav
    },
    data(){
        return {
            isToggle : false
        }
    }
}
</script>