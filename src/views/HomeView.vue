<template>
  <div class="container">
    <form @submit.prevent="login">
      <p>Log in to Scentsation</p>
      <input type="text" name="email" required v-model="email"/>
      <input type="text" name="password" required v-model="password"/>
      <input type="submit" value="Login" />
    </form>
    <div v-if="user">Welcome {{ user.fullname }}</div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style>
.container{
  height: 86px;
}
</style>
