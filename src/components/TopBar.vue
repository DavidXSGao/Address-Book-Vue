<template>
  <div>
    <div class="topbar-row">

      <!-- Hamburger menu -->
      <div class="menu">
        <i class="fa fa-bars fa-2x" aria-hidden="true" v-on:click="toggleSidebar()"></i>
      </div>

      <!-- Page title -->
      <div class="title">{{ $t($route.name) }}</div>

    </div>
    <div class="topbar-row">

      <!-- Search bar (visible when on contact-list) -->
      <div v-if="$route.name === 'ui.contact-list'" class="search">
        <input v-model="contactFilter" :placeholder="$t('ui.search')"/>
        <i class="fa fa-times" aria-hidden="true" v-on:click="contactFilter = ''"></i>
      </div>

      <!-- Language selection -->
      <div class = "language">
        <select @change="setLanguage(language)" v-model="language">
          <option disabled value="">Language</option>
          <option :value="'en'">EN</option>
          <option :value="'cn'">CN</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script>
import i18n from '../i18n'
export default {
  data: function () {
    return {
      language: ''
    }
  },

  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    },
    setLanguage: function (lang) {
      i18n.locale = lang
    }
  },

  computed: {
    contactFilter: {
      get: function () {
        return this.$store.state.contactFilter
      },
      set: function (searchString) {
        this.$store.commit('filterContacts', searchString)
      }
    }
  }
}
</script>

<style>
.topbar-row {
  display: flex;
  flex: 1;
  height: 100%;
}

.menu {
  display: flex;
  align-items: center;
}

.menu i {
  position: relative;
  color: white;
  cursor: pointer;
  padding: 10px;
}

.title {
  display: flex;
  align-items: center;
  color: white;
  font-size: 4vmin;
}

.search {
  display: flex;
  flex: 1;
  align-items: center;
  color: darkgray;
}

.search input {
  width: 97%;
  height: 75%;
  border-radius: 5px;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 5px;
}

.search .fa {
  margin: auto -30px;
}

.language {
  flex: 1;
  text-align: right;
  color: black;
  padding: 5px;
}

@media (max-width: 600px) {
  .title {
    font-size: 5vmin !important;
  }

  .language {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 3vmin;
    border-radius: 3px;
    background: white;
    padding: 0 !important;
  }
}
</style>
