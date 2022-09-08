<template>
 <div class="container">
    <form @submit.prevent="update">
      <h3>Update</h3>
        <input class="form-input" type="text" name="full_name" required v-model="full_name" placeholder="Full Name"/>
          <!-- <input class="form-input" type="text" name="joined_date" required v-model="joined_date" placeholder="Joined Date:"/> -->
          <!-- <input class="form-input" type="text" name="phone" required v-model="phone" placeholder="Phone:"/> -->
          <input class="form-input" type="text" name="gender" required v-model="gender" placeholder="Gender:"/>
          <!-- <input class="form-input" type="text" name="address" required v-model="address" placeholder="Address:"/>
          <input class="form-input" type="text" name="description" required v-model="description" placeholder="Description:"/>
          <input class="form-input" type="text" name="image" required v-model="image" placeholder="Image:"/> -->
          <input class="form-input" type="text" name="user_type" required v-model="user_type" placeholder="User Type:" readonly/>
          <input class="form-btn" type="submit" value="Update" />
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
    token() {
      return this.$store.state.token;
    },
  },
  data() {
    return {
      full_name: "",
      // email: "",
      // password: "",
      // phone: "",
      user_type: "user",
      // joined_date: "",
      // phone: "",
      gender: "",
      // address: "",
      // description: "",
      // image: "",
    };
  },
  methods: {
    update() {
      this.$store.dispatch("update", {
        id: this.user.id,
        full_name: this.full_name,
        // email: this.email,
        // password: this.password,
        // joined_date: this.joined_date,
        user_type: this.user_type,
        // joined_date: this.joined_date,
        // phone: this.phone,
        gender: this.gender,
        // address: this.address,
        // description: this.description,
        // image: this.image
        token:this.token
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