<template>
<div>
  <div class="header">
    <div class="row pl-3 fixed">
      <!-- <div class="col-1"></div> -->
      <div class="col-4">
        Name
      </div>
      <div class="col-3">
        Email
      </div>
      <div class="col-2">
       Phone
      </div>
      <div class="col-1">
       Company
      </div>
      <div class="dots col-2">
        <span><i class="mdi mdi-dots-vertical pr-5"></i></span>
      </div>
    </div>
  </div>
  <div class="title">CONTACTS ({{contacts.length}})</div>

  <div class="row">
    <div class="col-12" v-for="contact in contacts" :key="contact.id">
        <contact-card :donald="contact"/>
    </div>
  </div>
</div>
</template>


<script>
import ContactCard from './ContactCard.vue'

export default {
  components: {
    ContactCard,
  },
  computed:{
    contacts() {
      return this.$store.getters.getFilteredContacts('allContacts');
    }
  },
  
}
</script>


<style scoped>
.bring-down{
    margin-top: 90px;
}
.title {
  font-size: 12px !important;
  color: rgb(32, 32, 32);
  padding-left: 14px;
  padding-bottom: 14px;
  padding-top: 10px;
  
  /* border-bottom:0.2px solid whitesmoke !important; */
}
.header {
  font-size: 15px;
  border-bottom: solid 0.2px ;
  border-bottom-color: whitesmoke!important;
  padding-bottom: 20px;
  font-weight: bold ;
  color: rgb(95, 94, 94)
  
}
.con {
  padding-left: 10px;
  color: rgb(184, 180, 180);
}
.dots{
  padding-left: 130px;
  font-size: 20px;
}
  

</style>
