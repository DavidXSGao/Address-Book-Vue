<template>
  <div id="app">
    <div class="wrapper">

      <topbar class="header-temp"></topbar>

      <div class="secondary">
      <transition name="fade">
        <sidebar class="sidebar-temp" v-show="sidebarStatus"></sidebar>
      </transition>
        <!-- Add Contact + Button -->
        <div class="circle">
          <router-link :to = "{name: 'ui.add-contact'}" class="circle">
            <i class="fa fa-plus fa-2x circle" aria-hidden="true"></i>
          </router-link>
        </div>
        <div class="main-temp">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import axios from 'axios'
import countries from './assets/data/countries'
import {mapGetters} from 'vuex'
export default {
  components: {'sidebar': SideBar, 'topbar': TopBar},
  name: 'App',
  created () {
    axios.get('http://www.mocky.io/v2/5a71e4f72f0000de117764e6')
    .then(mockyRes => {
      this.saveContacts(mockyRes.data.data)
    })
    .catch(e => {
      this.saveErrors(e)
    })
    this.saveCountries(countries)
  },
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    },
    saveResponse (response) {
      this.$store.commit('saveResponse', response)
    },
    saveErrors (errors) {
      this.$store.commit('saveErrors', errors)
    },
    saveContacts (contact) {
      this.$store.commit('setContacts', contact)
    },
    saveCountries (countries) {
      this.$store.commit('setCountries', countries)
    }
  },
  computed: {
    ...mapGetters({
      sidebarStatus: 'sidebarStatus',
      getContacts: 'getContacts',
      getErrors: 'getErrors'
    })
  },
  data () {
    return {
      countries
    }
  }
}
</script>

<style>

@media (max-width: 600px) {
  .header-temp {
    min-height: 10%;
    flex-direction: column;
  }

  .secondary {
    min-height: 90%;
  }

  .sidebar-temp {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.wrapper * {
  box-sizing: border-box;
}
.header-temp {
  width: 100%;
  height: 7.5%;
  background-color: #2a56c6;
  font-family: 'Roboto', sans-serif;
  font-size: 2vh;
  display: flex;
}
.secondary {
  display: inline-flex;
  width: 100%;
  height: 92.5%;
}
.sidebar-temp {
  flex: 1;
}
.main-temp {
  flex: 6;
}
input {
  color: black;
}
div.circle {
  position: fixed;
  z-index: 1;
  bottom: 0px;
  right: 0px;
  margin: 25px;
  background: fuchsia;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  text-align: center;
}
a.circle {
  background-color: transparent;
}
i.circle {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
  color: white;
}
.circle:hover {
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s linear;
}
.fade-enter, .fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
