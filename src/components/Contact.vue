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
  color: rgb(175, 171, 171);
  padding-left: 14px;
  padding-bottom: 14px;
  padding-top: 10px;
  font-weight: bold;
  /* border-bottom:0.2px solid whitesmoke !important; */
}
.header {
  font-size: 15px;
  border-bottom: solid 0.2px ;
  border-bottom-color: whitesmoke!important;
  padding-bottom: 20px;
  
}
.con {
  padding-left: 10px;
  color: rgb(184, 180, 180);
}
  

</style>
