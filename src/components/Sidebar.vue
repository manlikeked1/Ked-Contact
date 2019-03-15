<template>
<!-- <div class="container-fluid"> -->
    <div class="sidebar" v-if="sidebarVisible">
        <div class="row">
            <div class="col-12">
                <router-link to='/create' exact>
                    <div class="create px-1 mb-4 mt-3">
                    <button class="btn btn shadow">
                        <svg width="36" height="36" viewBox="0 0 36 36">
                        <path fill="#34A853" d="M16 16v14h4V20z"></path>
                        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
                        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
                        <path fill="none" d="M0 0h36v36H0z"></path>
                    </svg>
                        Create Contact
                    </button>
                </div>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <router-link tag="div" class="one" active-class="active" to='/contacts' exact>
                    <span> <i class="mdi mdi-account-outline px-3"></i> </span>
                    <span class="pl-1">Contacts </span>
                    <span class="length">{{contacts.length}}</span>
                    <!-- <span class="pl-3">{{contacts.length}}</span> -->
                </router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <router-link tag='div' class="one" active-class="active" to='/trash' exact>
                    <span> <i class="mdi mdi-trash-can-outline px-3"></i> </span>
                    <span class="pl-1">Deleted Contacts</span>
                    <span class="item" v-if="trash.length>0">{{trash.length}}</span>
                </router-link>
            </div>
        </div>
        <hr>
    </div>    
</template>

<script>
export default {
    computed:{
        sidebarVisible(){
            return this.$store.getters.getSidebarStatus;
        },
        contacts () {
            return this.$store.getters.getContacts;
        },
        trash () {
            return this.$store.state.trash;
        }

    }
}
</script>

<style scoped>
.one:hover{
    background-color: rgb(247, 240, 240);
    border-radius: 0 25px 25px 0;
}

.one.active{
    background-color: #e8f0fe;
    border-radius: 0 25px 25px 0;
    color: #1a73e8;
}
    /* padding-right: 100px; */ 
.one{
    
    padding: 10px;
    border-radius: 50%;
}.sidebar{
    min-width: 300px;
    /* margin: 20px; */
    /* padding-left: 20px; */
    position: fixed;
    /* font-weight: bold; */
    font-size: 15px;
    font-family:sans-serif;
    margin-top: 60px;
}


.btn{
    /* padding: 12px; */
    border-radius: 25px 25px 25px 25px;
    /* border-inline-start: 2px; */
    border-style: solid;
    min-width: 200px;
    /* border-width: medium; */
}
.length {
    padding-left: 9rem;
}
.item {
    padding-left: 5.5rem;
}
   

.mdi{
    color: grey;
}
.mdi::before{
    font-size: 20px;
}

</style>
 
 
