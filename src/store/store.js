import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        sidebarStatus: true,
        contacts : [
            {name:'Ebube Kenechukwu Donald',email:'donaldebube@yahoo.com',phone:'08034345445',company:'PWC',jobTitle:'HR'},
            {name:'Gideon Oj Peters',email:'giddyboy@yahoo.com',phone:'08034345445',company:'Reftek',jobTitle:'HR'},
            {name:'Raymond P Ativie',email:'raytest@yahoo.com',phone:'08034345445',company:'Reftek',jobTitle:'HR'},
            {name:'Anesi Gabby Igebu',email:'gabby@yahoo.com',phone:'08034345445',company:'Reftek',jobTitle:'HR'},
            {name:'Nifemi H Gbamboye',email:'bambam@yahoo.com',phone:'08034345445',company:'Reftek',jobTitle:'HR'},
          ],  
        trash:[],  
        search : '',
    },
    getters: {
        getSidebarStatus (state) {
            return state.sidebarStatus
        },
        getContacts (state) {
            return state.contacts
        },
        getContactByName: (state) => (name) => {
            return state.contacts.find(contact => {
                return contact.name == name;
            })
        },
        getDeletedContacts (state) {
            return state.trash
        },
        getFilteredContacts: (state) => (category) => {
            if(category == 'allContacts') {
                var selectedContact = state.contacts
            }else if (category == 'deletedContacts') {
                 selectedContact = state.trash
            }

            let contacts =  selectedContact.filter(contact => {
                let contactName = contact.name.toLowerCase()
                let contactEmail = contact.email.toLowerCase()
                let contactCompany = contact.company.toLowerCase()
                return contactName.match(state.search)||contactEmail.match(state.search) || contactCompany.match(state.search)

            })
            return contacts;
        },
    },
    mutations: {
        toggleSidebarStatus(state){
            return state.sidebarStatus = !state.sidebarStatus;
        },
        createNewContact (state, contactInfo){
            state.contacts.push(contactInfo);
        },
        deleteContact: (state, payload) => {
            var contact = state.contacts.find(contact => {
                return contact == payload;
            })
            state.trash.push(contact)
            state.contacts.splice(state.contacts.indexOf(contact),1)
        },
        updateSearchInput: (state,payload) => {
            state.search = payload.toLowerCase()
        },
    }
       
});