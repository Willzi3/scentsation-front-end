<template>
      <div class="container">
        <div class="profile" v-if="user">
        <!-- <i class="fa-solid fa-user"></i><router-link to="/profile"><p>{{ user.full_name }}</p></router-link> -->
        <div class="profile-image">
           <img :src="user.image" />
         </div>
        <div class="profile-item">{{ user.gender}}</div>
        <div class="profile-item">{{ user.address}}</div>
        <div class="profile-item">{{ user.description}}</div>
        <div class="profile-item">{{ user.full_name}}</div>
        <router-link to="/edit"><div class="profile-edit">Edit</div></router-link>

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
    }
  },
  mounted() {
    // this.$store.dispatch("getUser");
  }
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile{
    box-shadow: 5px 5px 5px 5px lightgrey;
    border-radius: 10px;
    height: 80%;
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
    border: 1px solid lightgrey;
    border-radius: 6px;
    width: 400px;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    height: 50px;
}
.profile-image{
    border: 1px solid lightgrey;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile-image img{
  border-radius: 50%;
    height: 200px;
    width: 200px;
}
.profile-edit{
    width: 400px;
    height: 50px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    color: white;
}
</style>