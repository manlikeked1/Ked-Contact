<template>
    <div class="contact-detail">
        <div class="header">
            <div class="row align-items-center pl-5">
                <div class="col-1" >
                    <div class="profile pb-5 align-items-center" :style="{backgroundColor:randomColor(index)}">
                        {{ contact.name[0]}}
                    </div>
                </div>
                <div class="col-4 " >
                    <div>{{ contact.name }}</div>
                </div>
            </div>
        </div>
        <hr>
        <div class="contact pl-5" >Contact Detail.</div>
        <div class="row align-items-center pl-5 pb-3">
            <div class="col-1">
                <i class="mdi mdi-email-outline"/>
            </div>
            <div class="col-2">
                <div>{{ contact.email }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3">
            <div class="col-1">
                <i class="mdi mdi-domain"/>
            </div>
            <div class="col-2">
                <div>{{  contact.company }}</div>
            </div>
        
        </div>
        <div class="row align-items-center pl-5 pb-3">
            <div class="col-1">
                <i class="mdi mdi-phone"/>
            </div>
            <div class="col-2">
                <div>{{ contact.phone }}</div>
            </div>
        </div>
        <div class="row pl-5 pt-4">
            <div class="col">
                <router-link tag="div" to="/contacts" exact>
                    <div>Back.</div>
                </router-link>
            </div>
        </div>


        
        
            <!-- <div class="col">
                <div>{{ contact.company }}</div>
            </div>
            <div class="col">
                <div>{{ contact.jobTitle }}</div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactName: this.$route.params.name,
            colorCache: {},
        }
    },
    computed: {
        contact() {
            return this.$store.getters.getContactByName(this.contactName)
        }
    },
    methods:{
        randomColor (id) {
            const r = () => Math.floor (256 * Math.random());
             return (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()}`);

        }
    }
}
</script>

<style scoped>
.contact-detail {
    cursor: pointer;
}
.contact{
    font-size: 20px;
    color: rgb(182, 177, 177);
}
.mdi-account-circle::before{
    font-size: 3rem;
}
.header{
    color: grey;
    font-size: 2rem;
}
.profile{
    border-radius: 50%;
    background-color: blue;
    width: 70px;
    height: 70px;
    /* size: 60px; */
    /* display: flex;
    justify-content: center; */
    /* vertical-align: middle; */
    /* position: absolute; */
    position: relative;
    top: 6px;

    padding-left: 27px;
    padding-top: 13px;;
    color: white;

}

</style>

