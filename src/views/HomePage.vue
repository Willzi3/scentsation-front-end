<template>
<router-link to="/profile">
<div class="profile-name" v-if="user">
<i class="fa-solid fa-user"></i>
<h2>{{ user.full_name}}</h2>
</div></router-link>

 <div v-if="user.user_type === 'user'">
     <h1>Welcome User</h1>
 </div>
 <div v-else-if="user.user_type === 'Admin'">
    <h1>Welcome Admin</h1>
 </div>
 
</template>

<script>
// import Admin from "../components/Admin.vue"
export default {
computed: {
    user() {
        return this.$store.state.user
    }
},
// components: {
//     Admin
// }
}
</script>

<style scoped>
.profile-name{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;
    margin-inline: 5%;
    margin-top: 10px;
    gap: 10px;
}
.profile-name i{
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
.profile-name h2{
     background: black;
    color: white;
    width: 120px;
    height: 30px;
    border-radius: 6px;
}
</style>