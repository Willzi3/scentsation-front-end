<template>
  <div class="container">
    <form @submit.prevent="login">
      <h3>Log in:</h3>
      <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email:"/>
      <input class="form-input" type="text" name="password" required v-model="password" placeholder="Password:"/>
      <input class="form-btn" type="submit" value="Login" />
      <hr>
      <div class="form-extra">
        <router-link to="/register"><p>Register</p></router-link>
        <router-link to="/reset"><p>Reset-Psw</p></router-link>
      </div>
    </form>
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
<style scoped>
.container{
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
 
}
form{
  background: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  gap: 20px;
  color: white;
}
.form-input{
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 50px;
}
.form-btn{
  width: 70%;
  border: none;
  border-radius: 5px;
  height: 50px;
}
.form-extra{
  display: flex;
  gap: 10px;
}
.form-extra p {
  width: 170px;
  height: 30px;
  background: white;
  border-radius: 5px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
h3{
  font-weight: bold;
  font-size: 1.4rem;
}
hr{
  width: 90%;
  

}
@media (min-width: 300px) and (max-width: 400px) {
  .container{
    height: 80vh;
  }
  .form-input{
    width: 170px;
    height: 30px;
  }
  .form-btn{
    width: 170px;
     height: 30px;
  }
  .form-extra{
    display: flex;
    flex-direction: column;
  }
  form{
    width: 400px;
  }
  h3{
    display: none;
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .form-input{
    width: 140px;
  }
  .form-btn{
    width: 140px;
  }
  .form-extra{
    display: flex;
    flex-direction: column;
  }
  form{
    width: 350px;
  }
}
</style>
