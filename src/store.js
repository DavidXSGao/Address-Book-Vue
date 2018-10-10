import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var lastSortByField = ''
var DATA_COLUMN_ALIAS = {
  'name': 'name',
  'email': 'email',
  'gender': 'gender',
  'sex': 'gender',
  'country': 'country',
  'postal': 'postalCode',
  'postalcode': 'postalCode'
}

const store = new Vuex.Store({
  state: {
    sideBar: false,
    // Contacts displayed in list view
    contacts: [],
    // Full contacts grabbed from the API
    fullContacts: [],
    countries: [],
    contactFilter: '',
    contactToEdit: {},
    errors: []
  },
  getters: {
    sidebarStatus (state) {
      return state.sideBar
    },
    getErrors (state) {
      return state.errors
    },
    getContacts (state) {
      return state.contacts
    },
    getContactFilter (state) {
      return state.contactFilter
    },
    getContactToEdit (state) {
      return state.contactToEdit
    },
    getCountries (state) {
      return state.countries
    }
  },
  mutations: {
    toggleSidebar (state) {
      state.sideBar = !state.sideBar
    },
    saveErrors (state, errors) {
      state.errors.push(errors)
    },
    setContacts (state, response) {
      state.contacts = response
      state.fullContacts = response
    },
    setCountries (state, response) {
      state.countries = response
    },
    addContacts (state, newContacts) {
      state.contacts.push(newContacts)
    },
    requestEditContact (state, contact) {
      state.contactToEdit = contact // pass contact obj in from 'edit' button in UI
      state.contactToEdit.index = state.contacts.indexOf(contact) // find the index of the contact we're editing for later use
      return state.contactToEdit
    },
    editContact (state, response) {
      // our edited contact data
      state.contactToEdit = response
      // find the contact from our contacts array based on the index ID
      // replace this contact with our edited contact data
      state.contacts[state.contactToEdit.index] = state.contactToEdit
      // remove the temporary index to prevent stale and duplicate
      // IDs, in the case where we allow deleting of contacts in the future
      delete state.contacts[state.contactToEdit.index].index
    },
    sortContacts (state, column) {
      var direction

      if (column === lastSortByField) {
        direction = -1
        lastSortByField = ''
      } else {
        direction = 1
        lastSortByField = column
      }

      state.contacts = state.contacts.sort(function (a, b) {
        // Sort undefined behind everything else
        if (typeof a[column] === 'undefined') { return -direction }
        if (typeof b[column] === 'undefined') { return direction }
        if (a[column] > b[column]) { return direction }
        if (a[column] < b[column]) { return -direction }
        return 0
      })
    },
    filterContacts (state, filterString) {
      state.contactFilter = filterString || ''

      if (!state.fullContacts.length) {
        state.contacts = []
        return
      }

      filterString = filterString.toLowerCase()

      if (!filterString) {
        state.contacts = state.fullContacts
      } else {
        // Allow filtering by multiple words (AND logic)
        var filterArray = filterString.split(' ')

        filterArray.forEach(function (string) {
          var filterColumn = null
          var filterComponents = string.split(':')

          // Determine if we're using advanced(tm) search
          // Syntax: '<column>:<keyword>' e.g. 'name:bob'
          if (filterComponents.length === 2) {
            filterColumn = DATA_COLUMN_ALIAS[filterComponents[0].toLowerCase()] || null
            if (filterColumn) {
              string = filterComponents[1]
            }
          }

          state.contacts = state.fullContacts.filter(function (contact) {
            if (!filterColumn) {
              // General search (all columns)
              for (var key in contact) {
                if (contact.hasOwnProperty(key) && typeof contact[key] === 'string' && contact[key].toLowerCase().indexOf(string) !== -1) {
                  return true
                }
              }
            } else {
              // Advanced(tm) search
              if (contact[filterColumn] && contact[filterColumn].toLowerCase().indexOf(string) !== -1) {
                return true
              }
            }

            return false
          })
        })
      }
    }
  }
})

export default store
