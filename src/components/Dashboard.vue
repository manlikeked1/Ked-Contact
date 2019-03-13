<template>
    <div>
        <div class="row">
            <div class="col-3" v-if="sidebarVisible">
                <sidebar />
            </div>
            <div class="col">
                <div class="bring-down">
                    <router-view> </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
    components: {
        Sidebar,
    },
    computed:{
        sidebarVisible(){
            return this.$store.getters.getSidebarStatus;
        }
    }
}
</script>

<style scoped>
.bring-down{
    margin-top: 90px;
    padding-right: 40px;
}
</style>


