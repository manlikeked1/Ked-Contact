<template>
    <div class="contact-detail">
        <div class="header">
            <div class="row align-items-center pl-5">
                <div class="col-1" >
                    <div class="profile pb-5 align-items-center" :style="{backgroundColor:randomColor(contact.index)}">
                        {{ contact.name[0]}}
                    </div>
                </div>
                <div class="col-3 " >
                    <div>{{ contact.name }}</div>
                </div>
                <div class="col-8">
                    <div class="zoom">
                        
                            <span>
                                <i class="mdi mdi-star-outline pr-3"></i>       
                                <i class="mdi mdi-pencil-outline pr-3"></i>     
                                <i class="mdi mdi-dots-vertical pr-3" @click="toggleOption"></i>        
                                <span>
                                <router-link to="/contacts" exact>
                                    <i class="mdi mdi-close" pr-3></i>
                                </router-link>
                                </span>
                            </span>
                        
                    </div>
                    <div class="options position-absolute bg-white rounded shadow-lg" @click="deleteContact" v-if="option" >
                        <div class="p-4"><i class="mdi mdi-trash-can-outline">Trash</i></div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="contact pl-5" >Contact Detail.</div>
        <div class="row align-items-center pl-5 pb-3">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-email-outline"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.email }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.company">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-domain"/>
                </div>
            </div>
            <div class="col-2">
                <div v-if="contact.company">{{  contact.company }}</div>
            </div>
        
        </div>
        <div class="row align-items-center pl-5 pb-3">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-phone"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.phone }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.notes">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-note-outline"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.notes}}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.city">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-city-variant-outline"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.city }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.prefix">
            <div class="col-1"></div>
            <div class="col-2">
                <div>{{ contact.prefix}}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.suffix">
            <div class="col-1"></div>
            <div class="col-2">
                <div>{{ contact.suffix }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.address">
           <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-home-outline"/>
                </div>
           </div>
            <div class="col-2">
                <div>{{ contact.address }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.country">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-map-marker"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.country }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.relationship">
            <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-google-circles-communities"/>
                </div>
            </div>
            <div class="col-2">
                <div>{{ contact.relationship }}</div>
            </div>
        </div>
        <div class="row align-items-center pl-5 pb-3" v-if="contact.country">
          <div class="icon">
                <div class="col-1">
                    <i class="mdi mdi-phone"/>
                </div>
          </div>
            <div class="col-2">
                <div>{{ contact.nickname }}</div>
            </div>
        </div>
        <div class="row pl-5 pt-4">
            <div class="col">
                <router-link tag="div" to="/contacts" exact>
                    
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactName: this.$route.params.name,
            colorCache: {},
            option: false,
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

        },
        deleteContact (){
            this.$store.commit('deleteContact',this.contact)
            this.$router.push({ name: 'trash' })
        },
        toggleOption () {
            this.option = !this.option
        },
        
    }
}
</script>

<style scoped>
a {
    color: rgb(129, 126, 126);
}
a:hover {
    color: rgb(87, 87, 170)
}
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
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}
.zoom {
    position: relative;
    left: 300px;
    color: rgb(129, 126, 126);
}
.options{
  max-height: 4rem;
  max-width: 13rem;
  z-index: 9999;
  position: absolute;
  left: 500px;
  font-size: 15px;
}

</style>

