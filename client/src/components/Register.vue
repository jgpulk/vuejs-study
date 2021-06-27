<template>
  <div>
    <h5>Register Page</h5>

    <input
    type= "email"
    name= "email"
    v-model="email"
    placeholder= "email"
    />
      <input
    type= "password"
    name= "password"
    v-model="password"
    placeholder= "password"
    />
    <button
    @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'joyalgeorgpeulk@gmail.com',
      password: '123456'

    }
  },
  methods: {
    async register () {
      console.log('register button was clicked', this.email, this.password)
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  watch: {
    email (value) {
      console.log('Email changed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
