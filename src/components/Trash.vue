<template>
<div>
  <div class="header">
    <div class="row pl-3 fixed">
    <div class="col-3">
      Name
    </div>
    <div class="col-3">
      Email
    </div>
    <div class="col-3">
      Phone
    </div>
    <div class="col-3">
      Company
    </div>
  </div>

  </div>
  <div class="row">
    <div class="col-12" v-for="contact in contacts" :key="contact.id">
        <contact-card :donald="contact" :deleteTotal="deletedContact"/>
    </div>
  </div>
</div>
</template>

<script>
import ContactCard from './ContactCard.vue'
export default {
    components:{
        ContactCard,
    },
    computed:{
      contacts() {
        return this.$store.getters.getFilteredContacts('deletedContacts');
      }
    },
    methods: {
      deletedContact (){
      this.$store.commit('deletedContact',this.contact)
    },
    }
    
}
</script>
<style scoped>
.header {
    font-weight: bold;
    border-bottom: 0.5px solid;
    /* font-size: 30px;
    text-align: left;
    color: rgb(141, 125, 125) */

}
</style>
