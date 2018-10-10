<template>
  <div>
    <div class="sidebar">
      <ul>

        <!-- Contact List -->
        <li v-on:click="toggleSidebar()">
          <router-link :to = "{name: 'ui.contact-list'}">
            <i class="fa fa-address-book" aria-hidden="true"></i>
            {{ $t('ui.contact-list')}}
          </router-link>
        </li>

        <!-- Help -->
        <li v-on:click="toggleSidebar()">
          <router-link :to = "{name: 'ui.help'}">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
            {{ $t('ui.help')}}
          </router-link>
        </li>
      </ul>

    </div>

    <!-- Dark Overlay (mobile view only) -->
    <transition name="fade">
    <div class="sidebar-overlay" v-on:click="toggleSidebar()" v-show="sidebarStatus"></div>
  </transition>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    }
  },
  computed: {
    sidebarStatus:{
      get: function () {
        return this.$store.getters.sidebarStatus
      }
    }
  }
}
</script>

<style>
li a {
  display: block; /* Make Sidebar buttons display in a column */
  padding: 12px; /* Add some padding */
  text-align: left;
}

a, a:visited, a:hover, a:active {
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Remove original hyperlink color */
}

.sidebar li {
  font-family: 'Roboto', sans-serif; /* Google's font from their public library */
  color: black;
}

.sidebar li:hover {
  background-color: #ccc; /* Dark grey background on mouse-over */
}

.router-link-active {
  color: #2962ff;
  background-color: #ccc; /* Dark grey background on active link */
}

.sidebar {
  position: relative;
  height: 100%;
  background-color: white;
  border-right: 1px solid grey;
}

.sidebar ul{
  padding: 0;
  margin: 0;
  overflow: hidden; /* Remove default unordered list formatting */
}

.sidebar ul li i{
  margin-right: 15px; /* Add 15px of space between Font Awesome icons and text */
}

@media (max-width: 600px) {
  .sidebar {
    width: 75vw;
    z-index: 2;
  }

   .sidebar-overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s linear;
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
