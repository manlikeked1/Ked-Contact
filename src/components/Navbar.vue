<template>

<nav class="navbar fixed-top bg-white">
  
  <div class="row">
    <div class="col-md-1">
      <div class="toggle"><i class="mdi mdi-menu" @click="toggleSidebar"></i></div>
    </div>
    <div class="col-md-1">
      <router-link tag="div" class="" to='/' exact>
        <i class="mdi mdi-account-circle"></i>
      </router-link>
      
    </div>
    <div class="col-md-1">
      <a class="navbar-brand">Contacts</a>
    </div>
      
    <div class="col-md-6">
      <form class="form">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="mdi mdi-magnify"></i></span>
          </div>
          <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" @input='updateSearchInput' v-model="searchInput">
        </div>
      </form>
    </div>
    <div class="col-1">
      <span class="app"> <i class="mdi mdi-apps" /></span>
    </div>
     <div class="col-1">
      <span class="bell"> <i class="mdi mdi-bell" /></span>
    </div>
    <div class="profile ">
      E
    </div>
  </div>
</nav>
</template>
    
<script>
export default {
  data (){
    return {
      searchInput:''
    }
    
  },
  methods: {
    toggleSidebar(){
      this.$store.commit('toggleSidebarStatus')
      // console.log(this.$store.getters.getSidebarStatus)
    },
    updateSearchInput() {
      this.$store.commit('updateSearchInput', this.searchInput)
    }
  },
}
</script>

<style scoped>
.mdi-bell::before{
  color: white !important;
  position:relative;;
  left: 680px;
  top: 9px;
  border-radius: 50%;
  width: 40px;
  max-height: 40px;
  text-align: center;
  background-color: lightgrey;
}

.app {
  position: absolute;
  left: 670px;
  top: 6px;
  /* background-color: black; */
}

.toggle {
  position: absolute;
  left: -605px; 
  top: 6px
  /* margin-bottom: 60px; */
}

.input-group-text{
  border: none;
  background-color: whitesmoke;
}

.mdi-account-circle::before {
  position: absolute;
  left:-600px;
  top:-4px;
  color: blue;
  font-size: 40px !important;
  border: 50px;
  border-color: rgb(119, 119, 228);
}

.navbar-brand {
  font-size: 25px;
  color: rgb(175, 168, 168) !important;
  position: absolute;
  left: -580px;
  /* bottom: 9px; */
}

.mdi{
  font-size:25px;
  color: rgb(214, 210, 210)!important;
  /* background-color: whitesmoke; */
}

.form-control {
  height: 3rem;
  color: whitesmoke;
  background-color:whitesmoke;
  border: none;
}

.form{
  display: flex;
  /* margin-left: 80px; */
  justify-content: center;
  position: absolute;
  left:-350px;
  width: 45rem; 
  background-color: whitesmoke;
  border: none;
  /* height: 20rem; */
  /* justify-content: center; */
} 

.navbar{
    display:flex;
    justify-content: center;
    background-color: white;
    z-index: 999999999;
    /* margin-bottom: 90px; */
} 

.profile{
  border-radius: 50%;
  background-color: blue;
  width: 35px;
  height: 35px;
  position: absolute;
  padding-left: 9px;
  padding-bottom: 13px !;
  color: white;
  font-size: 25px;
  right: 14px;
  top: 17px;
}
</style>







