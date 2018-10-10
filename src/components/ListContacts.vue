<template>
  <div id="contacts">
    <table class="table contact-list">
      <tbody>
        <tr>
          <th class="contact-avatar"></th>
          <th class="contact-name" v-on:click="sortContacts('name')">{{ $t('ui.list-contact-name')}}</th>
          <th class="contact-gender" v-on:click="sortContacts('gender')">{{ $t('ui.list-contact-gender')}}</th>
          <th class="contact-country" v-on:click="sortContacts('country')">{{ $t('ui.list-contact-country')}}</th>
          <th class="contact-email" v-on:click="sortContacts('email')">{{ $t('ui.list-contact-email')}}</th>
          <th class="contact-postal" v-on:click="sortContacts('postalCode')">{{ $t('ui.list-contact-postal-code')}}</th>
          <th class="contact-edit"></th>
        </tr>
        <tr v-for="(contact, index) in filteredContacts" v-bind:key="index">
          <td class="contact-avatar"><img :src="`https://robohash.org/${contact.name.split(' ').join('')}.jpg?size=50x50&set=set4`" class="profile-picture" :style="Math.random() > 0.85 && 'transform-origin: center; transform: rotate(180deg);'" /></td>
          <td class="contact-name">{{ contact.name }} </td>
          <td class="contact-gender"><a href="#" v-on:click="filterGender(contact.gender)" data-toggle="tooltip" :title="`Show only ${contact.gender}`">{{ $t('ui.list-contact-gender-' + contact.gender) }}</a></td>
          <td class="contact-country"><a href="#" v-on:click="filterCountry(contact.country)" data-toggle="tooltip" :title="`Show only ${contact.country}`"><span :class="`flag-icon flag-icon-${contact.country.toLowerCase()} fa-2x`"></span></a></td>
          <td class="contact-email">{{ contact.email }}</td>
          <td class="contact-postal">{{ contact.postalCode || $t('ui.list-contact-no-data')  }}</td>
          <td class="contact-edit"><router-link :to="{name: 'ui.edit-contact', query: {id: contacts.indexOf(contact)}}"><button @click="requestEditContact(contact)">Edit</button></router-link></td>
          <!-- TODO: Either use or remove modal code -->
          <!-- <td class="contact-edit">
            <button
              type="button"
              @click="showModal">Edit</button>
          </td> -->
        </tr>
      </tbody>
    </table>
    <span v-if="!filteredContacts.length">The Aperture Science Enrichment Center apologize for the fact that you have no friends.</span>
    <!-- TODO: Either use or remove modal code -->
    <!-- <modal v-show="isModalVisible" @close="closeModal">
      <div slot="header">replacing default modal `header</div>
    </modal> -->
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import modal from './lib/modal/modal.vue'

export default {
  name: 'ListContacts',
  components: {
    modal
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'getContacts'
    }),
    filteredContacts: function () {
      return this.contacts.filter(function (contact) {
        return !contact.hide
      })
    }
  },

  methods: {
    ...mapMutations({
      sortContacts: 'sortContacts',
      requestEditContact: 'requestEditContact'
    }),
    filterCountry (countryString) {
      this.$store.commit('filterContacts', `country:${countryString}`)
    },
    filterGender (genderString) {
      this.$store.commit('filterContacts', `gender:${genderString}`)
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }

}

</script>

<style>
#contacts {
  text-align: left;
  padding-left: 1em;
}
.flag-icon {
  background-size: 110%;
  border: 1px solid black;
}
th {
  cursor: pointer;
}
th:hover {
  background-color: #e5efff;
}
.profile-picture {
  border-radius: 50%;
}
.contact-list tr:nth-child(even) {
  background-color: #fcfcfc
}
.contact-list > tbody > tr > td {
  vertical-align: middle;
}
.contact-avatar{
  width: 80px;
}
.contact-name{
  width: 140px;
}
.contact-gender{
  width: 80px;
}
.contact-country{
  width: 80px;
}
.contact-email{
  width: 240px;
}
.contact-postal{
  width: 120px;
}
.contact-edit{
  width: 100px;
}
td {
  word-wrap:break-word;
}
table {
  table-layout:fixed;
}
@media (max-width: 600px) {
  .contact-list > tbody > tr > td {
    padding: 3px;
  }
  th {
    font-size: 10px;
  }
  .contact-avatar{
    display:none;
  }
  td {
    border-left: 1px gray;
    font-size: 3vmin;
  }
  #contacts{
    padding-left: 5px;
  }
  .contact-name{
    width: 130px;
  }
  .contact-gender{
    width: 60px;
  }
  .contact-country{
    display: none;
  }
  .contact-email{
    width: 100px;
  }
  .contact-postal{
    display: none;
  }
  .contact-list {
    width: auto;
  }
}
</style>
