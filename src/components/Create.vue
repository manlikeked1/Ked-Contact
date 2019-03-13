<template>
<v-app class="bg-white">
    <v-form>
    <v-container>
        <v-layout row >
            <v-flex class="header">
                 Create new contact.
            </v-flex>
        </v-layout>
        <hr>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-account-circle" />
            </v-flex>
            <v-flex xs12 sm6 md5>
                <v-text-field
                label="Firstname">
                </v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                <v-text-field
                label="Lastname">
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-domain"/>
            </v-flex>
            <v-flex xs12 sm6 md5>
                <v-text-field
                label="Company">
                </v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                <v-text-field
                label="Job Title">
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-email-outline"/>
            </v-flex>
            <v-flex md10>
                <v-text-field
                label="Email">
                </v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
               <i class="mdi mdi-phone"/>
            </v-flex>
            <v-flex md10>
                <vue-tel-input v-model="phone"
                  :preferredCountries="['us', 'gb', 'ua', 'ng']" class="vue-tel-input">
                </vue-tel-input>
            </v-flex>
        </v-layout>
         <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                 <i class="mdi mdi-note-outline"/>
            </v-flex>
            <v-flex md10>
                <v-text-field md10>
                label="Notes">
                </v-text-field>
            </v-flex>
        </v-layout>
        <div class="row">
            <div class="col-10 pt-3">
                More Fields
            </div>
            <div @click="cancel" class="col-1 pt-3">
                <span class="save-contact">Cancel</span>
            </div>
            <div @click="saveContact" class="col-1 pt-3">
                <span class="save-contact">Save</span>
            </div>
        </div>
     
                

        
                
        
        
      
    </v-container>
</v-form>
</v-app>
</template>
    



    <!-- <div class="contact-create pl-5">
        <div class="row">
            <div class="col">
               
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-1">
                
            </div>
            <div class=" col-5">
                <label for="firstname">Firstname</label>
                <input id="firstname" class="form-control" type="text" placeholder="Firstname" v-model ="firstName">
            </div>
            <div class="col-5">
                <label for="lastname">Lastname</label>
                <input id="lastname" class="form-control" type="text" placeholder="Lastname" v-model="lastName">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1" >
                
            </div>
            <div class=" col-5">
                <label for="company">Company</label>
                <input id="company" class="form-control" type="text" placeholder="Company" v-model="company">
            </div>
            <div class="col-5">
                <label for="jobtitle">Job Title</label>
                <input id="jobtitle" class="form-control" type="text" placeholder="Job Title" v-model="jobTitle">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1" >
                <i class=""/>
            </div>
            <div class="col-10">
                <label for="email">E-mail</label>
                <input id="email" class="form-control" type="text" placeholder="E-mail" v-model="email">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1" >
                <i class="mdi mdi-phone"/>
            </div>
            <div class="col-10">
                <label for="phone">Phone</label>
                <input id="phone" class="form-control" type="text" placeholder="Phone" v-model="phone">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-1" >
             
            </div>
            <div class="col-10">
                <label for="notes">Notes</label>
                <input id="notes" class="form-control" type="text" placeholder="Notes" v-model="notes">
            </div>
        </div>
        <hr>
        

    </div>             -->
            

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            company: '',
            jobTitle: '',
            email: '',
            phone: '',
            notes: '',

             
        },
        phone
    },
    methods: {
        saveContact() {
            // console.log(pogo);
            var contactInfo = {
                name: this.firstName + ' ' + this.lastName,
                company: this.company,
                jobTitle: this.jobTitle,
                email: this.email,
                phone: this.phone,
                notes: this.notes,

            }
            this.$store.commit('createNewContact', contactInfo)
            this.$router.push({ name: 'contacts.all'});
        },
        cancel(){
            this.firstName = ''
            this.lastName = ''
            this.company = ''
            this.jobTitle = ''
            this.email = ''
            this.phone = ''
            this.notes = ''
        }
    }
    
}
</script>
<style>
.vue-tel-input{
    border-top: none;
}
.save-contact{
    cursor: pointer;
}
.mdi-note-outline{
    font-size: 35px ;
    color: rgb(168, 166, 166); 
    margin-left: 20px;
    font-size: 25px;
}

.header{
    font-size: 20px;
}
.mdi-phone{
    font-size: 35px ;
    color: rgb(168, 166, 166); 
    margin-left: 20px;
    font-size: 25px;
}
.mdi-email-outline{
    font-size: 25px ;
    color: rgb(126, 123, 123);
    margin-left: 20px; 
}
 .mdi-domain::before {
    margin-left:20px ;
    font-size: 25px ;
    color: grey;
    text-align: center
    /* position: relative; */
}
.mdi-account-circle::before {
    font-size: 65px ;
    color: whitesmoke;
    /* text-align: center */
}

input.form-control{
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0px;
    /* border-bottom: 0px; */
}

input.form-control:focus{
    box-shadow: none;
}
label {
    font-size: 20px;
    color: grey;
}

</style>




