<template>
<div class="contact-card mb-3"  :style="{backgroundColor: definedColor, borderLeft: selectBorder}" @mouseover="changedColor" @mouseleave="removeColor">
  <div class="row pl-3 py-2 align-items-center" >
    <div class="col-1">
      <div class="profile " :style="{backgroundColor: randomColor}" v-if="(hovering !== 1)">
        {{ donald.name[0] }}
      </div>
      <div v-else class="py-2">
        <!-- <v-checkbox hide-details></v-checkbox> -->
        <input type="checkbox"  class="checkbox"/>
      </div>
    </div>
    <div class="col-3" @click="navigateToContact">
      {{ donald.name }}
    </div>
    <div class="col-3" @click="navigateToContact">
      {{ donald.email }}
    </div>
    <div class="col-2" @click="navigateToContact">
      {{ donald.phone }}
    </div>
    <div class="col-1" @click="navigateToContact">
      {{ donald.company }} 
    </div>
    <div class="col-md-2">
      <div class="zoom pl-5">
        <template v-if="(hovering === 1)">
        <span><i class="mdi mdi-star-outline pr-3"></i></span>
        <span><i class="mdi mdi-pencil-outline pr-3"></i></span>
        <span><i class="mdi mdi-dots-vertical pr-3" @click="toggleOption"></i></span>
        </template>
      </div>
      <div class="options position-absolute bg-white rounded shadow-lg" @click="deleteContact" v-if="option">
        <div class="p-4"><i class="mdi mdi-trash-can-outline">Trash</i></div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  props: [
    'donald', 'deleteTotal'
  ],
  data() {
    return {
      hovering :0,
      definedColor: "white",
      selectBorder: '',
      colorCache:{},
      option: false,
     
    }
  },
  computed: {
    randomColor () {
      // console.log(id);
      let r = Math.floor (256* Math.random());
      let r1 = Math.floor (256* Math.random());
      let r2 = Math.floor (256* Math.random());
      let r3 = Math.floor (256* Math.random());
      

      return `rgb(${r1}, ${r2}, ${r}, ${r3})`;
    },
  },
  methods: {
    changedColor(){
      // console.log('yoooooo')
      this.definedColor = "#cccccc" 
      this.selectBorder = '3px solid blue' 
      this.hovering = 1
    },
    removeColor() 
    {
      // console.log('growwwww')
      this.definedColor = 'white'
      this.selectBorder = ''
      this.hovering = 0
    },
    navigateToContact() {
      this.$router.push({ name: 'contacts.details', params: {name: this.donald.name}, })
    },
    deleteContact (){
      if(this.$router.currentRoute.name == 'contacts.all') {
        this.$store.commit('deleteContact',this.donald)
      } else if(this.$router.currentRoute.name == 'trash'){
        this.deleteTotal();
      }
      // console.log(this.$router.currentRoute.name);
    },
    toggleOption () {
      this.option = !this.option
    }
    
  }
   
}
</script>

<style scoped>
.bring-down{
    margin-top: 90px;
}
.header {
  font-weight: bold;
  border-bottom: solid 0.5px ;
  
}
/* .con {
  padding-left: 10px;
  color: rgb(184, 180, 180);
} */
.contact-card {
  cursor: pointer;
}
.profile{
    border-radius: 50%;
    background-color: blue;
    width: 35px;
    height: 35px;
    position: relative;
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.options{
  max-height: 4rem;
  max-width: 13rem;
  z-index: 9999;
  position: relative;
  left: 60px;
}
.zoom {
  z-index: 99999;
  font-size: 20px;
  color: rgb(182, 179, 179)
}
.checkbox {
  size: 90px;
}
  


</style>


