<template>
 <div class="container">
    <form @submit.prevent="update">
      <h3>Register</h3>
          <input class="form-input" type="text" name="birth_date" required v-model="birth_date" placeholder="Birth Date"/>
          <input class="form-input" type="text" name="gender" required v-model="gender" placeholder="gender:"/>
          <input class="form-input" type="text" name="address" required v-model="address" placeholder="Address:"/>
          <input class="form-input" type="text" name="description" required v-model="description" placeholder="Description:"/>
          <input class="user-type" type="text" name="image" required v-model="image" placeholder="Image:"/>
          <input class="form-btn" type="submit" value="Edit" />
    </form>

    <div v-if="user">
      Welcome {{ user.full_name }}, Your sign up was successsul
    </div>
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
      birth_date: "",
      gender: "",
      address: "",
      description: "",
      image: ""
    };
  },
  methods: {
    update() {
      this.$store.dispatch("update", {
        birth_date: this.birth_date,
        gender: this.gender,
        address: this.address,
        description: this.description,
        image: this.image
      });
    },
  },
}
</script>

<style>
.container{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    width: 40%;
    height: 90%;
    border: 1px solid lightgrey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>