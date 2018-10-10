<template>
  <div class="temp">
    <a class="back-button btn btn-default" href="javascript:history.go(-1)">Back</a>
    <form class="needs-validation">
      <div class="form-group">
        <label for="contactName">Name</label>
        <input type="text" class="form-control" id="contactName" placeholder="Name" v-model="userName" required>
      </div>
      <div class="form-group">
        <label for="contactEmail">Email address</label>
        <input type="email" class="form-control" id="contactEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="userEmail" required>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="genderSelect" id="genderMale" value="male" v-model="gender" @change="disableTextField">
        <label class="form-check-label" for="genderMale">Male</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="genderSelect" id="genderFemale" value="female" v-model="gender" @change="disableTextField">
        <label class="form-check-label" for="genderFemale">Female</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="genderSelect" id="genderOther" value="other" v-model="gender" @change="toggleDisable">
        <label class="form-check-label" for="genderOther">Other</label>
      </div>
      <div class="form-group">
        <label for="otherText">Gender</label>
        <input type="text" class="form-control" id="customGender" aria-describedby="genderHelp" placeholder="Please enter your gender" :disabled="customGenderField == false" v-model="genderText" :required="gender == 'other'">
        <small id="genderHelp" class="form-text text-muted" v-if="gender == 'other'">If you select Other, please enter your gender</small>
      </div>
      <select class="custom-select" v-model="country">
        <option selected>SELECT COUNTRY ----</option>
        <option v-for="(nation, key) in countries" :value="key" :key="key">{{ nation }}</option>
      </select>
      <div class="form-group">
        <label for="postalCode">Postal Code</label>
        <input type="text" class="form-control" id="contactPostalCode" placeholder="Postal Code" v-model="postalCode" required>
      </div>
      <button type="submit" class="btn btn-primary" @click="validateData">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'AddContacts',
  data () {
    return {
      customGenderField: false,
      userName: '',
      userEmail: '',
      gender: '',
      genderText: '',
      country: '',
      postalCode: '',
      contactPackage: {}
    }
  },
  created() {
    if (this.$route.name === 'ui.edit-contact') {
      this.userName = this.getContactToEdit.name
      this.userEmail = this.getContactToEdit.email
      this.gender = this.genderText || this.getContactToEdit.gender
      this.country = this.getContactToEdit.country
      this.postalCode = this.getContactToEdit.postalCode
    }
  },
  computed: {
    ...mapGetters({
      contacts: 'getContacts',
      getContactToEdit: 'getContactToEdit',
      countries: 'getCountries'
    })
  },
  methods: {
    toggleDisable () {
      this.customGenderField = !this.customGenderField
      return this.customGenderField
    },
    disableTextField () {
      if (this.customGenderField === true) {
        this.customGenderField = false
        return this.customGenderField
      } else {}
    },
    readData () {
      this.contactPackage = {
        name: this.userName,
        email: this.userEmail,
        gender: this.genderText || this.gender,
        country: this.country,
        postalCode: this.postalCode,
        index: this.getContactToEdit.index || null
      }
      if (this.$route.name === 'ui.add-contact') {
        this.$store.commit('addContacts', this.contactPackage)
      } else {
        this.$store.commit('editContact', this.contactPackage)
      }
      this.$router.push('/list')
    },
    validateData () {
      let forms = document.getElementsByClassName('needs-validation')

      Array.prototype.filter.call(forms, (form) => {
        form.addEventListener('submit', (event) => {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            return
          }
          form.classList.add('was-validated')
          this.readData()
        }, false)
      })
    },
    ...mapMutations({
      addContacts: 'addContacts',
      editContact: 'editContact'
    })
  }
}
</script>

<style>
  .country-dropdown {
    text-align: center;
  }

  label {
    padding: 5px;
  }
</style>
