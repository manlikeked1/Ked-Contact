<template>
<v-app class="bg-white"  >
    <v-form>
        <v-container>
            <v-layout row >
                <v-flex class="header">
                     Create new contact
                </v-flex>
            </v-layout>
            <hr>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 >
                    <i class="mdi mdi-account-circle" />
                </v-flex>
                <v-flex md9 >
                    <v-text-field v-model="prefix"
                    label="Prefix">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('prefix')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="firstName"
                    label="First name">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('firstName')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="middleName"
                    label="Middle name">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('middleName')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="lastName"
                    label="Last name">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('lastName')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="suffix"
                    label="Suffix">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('suffix')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="phoneticFirst"
                    label="Phonetic First">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('phoneticFirst')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="phoneticMiddle"
                    label="Phonetic Middle">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('phoneticMiddle')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="phoneticLast"
                    label="Phonetic Last">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('phoneticLast')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 ></v-flex>
                <v-flex md9 >
                    <v-text-field v-model="nickname"
                    label="Nickname">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('nickname')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 >
                    <i class="mdi mdi-city-variant-outline"/>
                </v-flex>
                <v-flex md9>
                    <v-text-field v-model="city"
                        label="City">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('city')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <v-layout row align-items-center @mouseover="display" @mouseleave="hide">
                <v-flex xs6 sm3 md1 >
                    <i class="mdi mdi-email-outline"/>
                </v-flex>
                <v-flex md9>
                    <v-text-field v-model="email"
                        label="Email">
                    </v-text-field>
                </v-flex>
                <v-flex v-if="(hovering === 1)">
                    <i class="mdi mdi-close-circle-outline" @click = "clear('email')" data-toggle="popover" ata-placement="top" 
                    title="Remove" data-content="Popup content"></i>
                </v-flex>
            </v-layout>
            <div class="row">
                <div class="col-10 pt-3">
                    <router-link to="/create" exact>
                        Fewer fields.
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
            hovering: 0,
            firstName: '',
            lastName: '',
            city:'',
            email: '',
            phone: '',
            notes: '',
            prefix:'',
            middleName: '',
            suffix:'',
            phoneticFirst:'',
            phoneticMiddle: '',
            phoneticLast: '',
            nickname: '',
            
        }
        
    },

             
    methods: {
        saveContact() {
            // console.log(pogo);
            var contactInfo = {
                name: this.firstName + ' ' + this.middleName + ' ' + this.lastName,
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
            this.middleName = ''
            this.lastName = ''
            this.city = ''
            this.email = ''
            this.phone = ''
            this.notes = ''
            this.prefix = ''
            this.suffix = ''
            this.phoneticFirst = ''
            this.phoneticMiddle = ''
            this.phoneticLast = ''
            this.nickname = ''

        },
        clear(create) {
             switch(create) {
                case 'firstName':
                this.firstName = '';
                break;
                case 'lastName':
                this.lastName = '';
                break;
                case 'city':
                this.city = '';
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
                case 'prefix':
                this.prefix = ''
                break;
                case 'middleName':
                this.middleName = ''
                break;
                case 'suffix':
                this.suffix = ''
                break;
                case 'phoneticFirst':
                this.phoneticFirst = ''
                break;
                case 'phoneticMiddle':
                this.phoneticMiddle = ''
                break;
                case 'phoneticLast':
                this.phoneticLast= ''
                break;
                case 'nickname':
                this.nickname= ''
                break;

            }
        },
        display () {
            this.hovering = 1
        },
        hide () {
            this.hovering = 0
        }
    }
    
}

                


</script>

<style scoped>
.header {
    font-size: 20px;
}
.bg-white {
    margin-top: -30px;
}
.mdi-account-circle {
    font-size: 70px;
    color: rgb(224, 220, 220)
}
.mdi-domain{
    font-size: 40px;
    color: rgb(224, 220, 220)
}
.mdi-email-outline {
    font-size: 40px;
    color: rgb(224, 220, 220)
}
.mdi-city-variant-outline{
    font-size: 40px;
    color: rgb(224, 220, 220)
}
.mdi-close-circle-outline {
    font-size: 30px;
    color: rgb(224, 220, 220)
}

</style>
