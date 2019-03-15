import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        sidebarStatus: true,
        contacts : [
            {name:'Ebube Donald', email: 'donaldebube@yahoo.com', company: 'Reftek Consulting', jobTitle: 'Student', phone: '+234 937 483 2932', address:'Lagos, Nigeria'},
            {name:'Ebube Amanda', email: 'amandaebube@yahoo.com', company: 'Shell Ltd', jobTitle: 'HR', phone: '+234 937 483 2932', address:'Abuja, Nigeria'},
            {name:'Igebu Anesi', email: 'anesiigebu@yahoo.com', company: 'Reftek Ltd', jobTitle: 'Developer', phone: '+234 937 483 2932', address:'Ogun, Nigeria'},
            {name:'Peters Gideon', email: 'petergideon@yahoo.com', company: 'ConcoilLtd', jobTitle: 'CTO', phone: '+234 937 483 2932', address:'Kaduna, Nigeria'},
            {name:'Ebube Donald', email: 'donaldebube@yahoo.com', company: 'Dickerson Ltd', jobTitle: 'Student', phone: '+234 937 483 2932', address:'Lagos, Nigeria'}
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
        deletedContact: (state, payload) => {
            var contact = state.contacts.find(contact => {
                return contact == payload;
            })
            // state.trash(contact)
            state.trash.splice(state.trash.indexOf(contact),1)
        },
        updateSearchInput: (state,payload) => {
            state.search = payload.toLowerCase()
        },
    }
       
});