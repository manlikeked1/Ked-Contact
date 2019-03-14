<template>
<v-app class="bg-white">
    <v-form>
    <v-container>
        <div class="header">
            Create New Contact.
        </div>
        <hr>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-account-circle" />
            </v-flex>
            <v-flex xs12 sm6 md5 >
                <v-text-field v-model="firstName"
                label="Firstname">
                </v-text-field>
            </v-flex>
                <v-flex xs12 sm6 md5>
                <v-text-field v-model="lastName"
                label="Lastname">
                </v-text-field>
            </v-flex>
            <v-flex>
                <i class="mdi mdi-close-circle-outline" @click = "clear('firstName')" data-toggle="popover" ata-placement="top" 
                title="Remove" data-content="Popup content"></i>
            </v-flex>
        </v-layout>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-domain"/>
            </v-flex>
            <v-flex xs12 sm6 md5>
                <v-text-field v-model="company"
                label="Company">
                </v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md5>
                <v-text-field
                label="Job Title">
                </v-text-field>
            </v-flex>
            <v-flex>
                <i class="mdi mdi-close-circle-outline" @click = "clear('company')" data-toggle="popover" ata-placement="top" 
                title="Remove" data-content="Popup content"></i>
            </v-flex>
        </v-layout>
        <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                <i class="mdi mdi-email-outline"/>
            </v-flex>
            <v-flex md10>
                <v-text-field v-model="email"
                label="Email">
                </v-text-field>
            </v-flex>
            <v-flex>
                <i class="mdi mdi-close-circle-outline" @click = "clear('email')" data-toggle="popover" ata-placement="top" 
                title="Remove" data-content="Popup content"></i>
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
            <v-flex>
                <i class="mdi mdi-close-circle-outline" @click = "clear('phone')" data-toggle="popover" ata-placement="top" 
                title="Remove" data-content="Popup content"></i>
            </v-flex>
        </v-layout>
         <v-layout row align-items-center>
            <v-flex xs6 sm3 md1 >
                 <i class="mdi mdi-note-outline"/>
            </v-flex>
            <v-flex md10>
                <v-text-field md10 v-model="notes">
                label="Notes">
                </v-text-field>
            </v-flex>
            <v-flex>
                <i class="mdi mdi-close-circle-outline" @click = "clear('notes')" data-toggle="popover" ata-placement="top" 
                title="Remove" data-content="Popup content"></i>
            </v-flex>
        </v-layout>
        <div class="row">
            <div class="col-10 pt-3">
                <router-link to="/morefields" exact>
                    More Fields.
                </router-link>
            </div>
            <div @click="cancel" class="col-1 pt-3">
                <span class="save-contact">Cancel</span>
            </div>
            <div @click="saveContact" class="col-1 pt-3" >
                <span class="save-contact" active-class="active">Save</span>
            </div>
        </div>
    </v-container>
</v-form>
</v-app>
</template>

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

             
        }
        
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
        },
        clear(create) {
             switch(create) {
                case 'firstName':
                this.firstName = '';
                this.lastName = '';
                break;
                case 'company':
                this.company = '';
                this.jobTitle = ''
                break;
                case 'email':
                this.email = ''
                break;
                case 'phone':
                this.phone = ''
                break;
                case 'notes':
                this.notes = ''
                break;
            }
        }
    }
    
}

                


</script>

<style scoped>
.bg-white {
    margin-top: -30px;
}
.vue-tel-input{
    border-top: none;
}
.save-contact{
    cursor: pointer;
}
.save-contact:hover{
    background-color: #f9fafc;
    /* border-radius: 0 25px 25px 0; */
    color: #1a73e8;
}

.mdi-close-circle-outline {
    font-size: 25px;
    color: rgb(175, 172, 172)
}
.mdi-note-outline{
    font-size: 35px ;
    color: rgb(168, 166, 166); 
    margin-left: 20px;
    font-size: 25px;
}

.header{
    font-size: 2rem;
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

label {
    font-size: 20px;
    color: grey;
}
</style>




     
                

        
                
        
        
      
            

