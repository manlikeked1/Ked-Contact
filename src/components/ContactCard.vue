<template>
<div class="contact-card mb-3"  :style="{backgroundColor: definedColor, borderLeft: selectBorder}" @mouseover="changedColor" @mouseout="removeColor">
  <div class="row pl-3 pt-2 align-items-center" >
    <div class="col-1">
      <div class="profile " :style="{backgroundColor: randomColor}">
        {{ donald.name[0] }}
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
        <span v-if="(hovering === 1)"><i class="mdi mdi-star-outline pr-3"></i></span>
        <span v-if="(hovering === 1)"><i class="mdi mdi-pencil-outline pr-3"></i></span>
        <span v-if="(hovering === 1)"><i class="mdi mdi-dots-vertical pr-3" @click="toggleOption"></i></span>
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
    'donald',
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
      // return (this.colorCache[id] = `rgb(${r1}, ${r2}, ${r3}`);
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
      this.$store.commit('deleteContact',this.donald)
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
    size: 40px;
    position: relative;
    padding-left: 9.5px;
    color: white;
    font-size: 25px;

}
.options{
  max-height: 4rem;
  max-width: 13rem;
  z-index: 9999;
}
.zoom {
  z-index: 99999;
  font-size: 20px;
}
  


</style>


