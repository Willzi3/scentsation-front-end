<template>
      <div class="container">
        <div class="profile" v-if="user">
        <div class="profile-image">
           <img :src="user.image" />
         </div>
        <div class="profile-item"><h2>{{ user.gender}}</h2></div>
        <div class="profile-item"><h2>{{ user.address}}</h2></div>
        <div class="profile-item"><h2>{{ user.description}}</h2></div>
        <div class="profile-item"><h2>{{ user.full_name}}</h2></div>
        <router-link to="/edit"><div class="profile-edit">Edit</div></router-link>
        <div class="option"  @click="deleteuser(user.user_id)">Delete</div>
        <div class="profile-edit" @click="logout">Logout</div>

      </div>
      
      <div v-else>
        No User
      </div>
      </div>
</template>

<script>
export default {
    computed: {
    user() {
      return this.$store.state.user
    },
    users() {
      return this.$store.state.users
    },

  },
  mounted() {
    // this.$store.dispatch("getUser");
  },
  methods: {
    logout() {
      console.log("object");
      this.$store.state.user = null;
      this.$store.state.cart = null;
      localStorage.removeItem("users");
      this.$router.push("/");
    },
    deleteuser(id) {
      return this.$store.dispatch("Deleteuser", id);
    },
  }
}
</script>

<style scoped>
.container{
  height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile{
    box-shadow: 5px 5px 5px 5px black;
    border-radius: 10px;
    height: 90%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    margin: 10px;
    
}
.profile-name{
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-right: 200px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px;
  
}
.profile-name p{
  border: 1px solid lightgrey;
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-decoration: none;
}
.profile-name a{
  text-decoration: none;
  color: none;
}
.profile-item{
    background: black;
    color: white;
    border-radius: 6px;
    width: 400px;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    height: 70px;
}
.profile-image{
    
    height: 300px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-image img{
  object-fit: cover;
  object-position: top;
    height: 300px;
    width: 400px;
    border-radius: 10px;
}
.profile-edit{
  border-radius: 10px;
    width: 400px;
    height: 50px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkgray;
    color: white;
}
.profile-edit:hover{
background: white;
border: 1px solid lightgrey;
color: black;
cursor: pointer;
}
a{
  text-decoration: none;
}
</style>