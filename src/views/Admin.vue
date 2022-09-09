<template>
    <div class="container" v-if="user.user_type === 'Admin'">
    <div class="row">
        <div v-if="products" class="prods">
     <productCard
      v-for="product in products" 
      :key="product.id" 
      :product="product"/>
   <router-link to="/AddProduct">add product</router-link>
     </div>
     <div v-if="users" class="prods">
     <userCard
      v-for="user in users" 
      :key="user.id" 
      :user="user"/>
   
     </div>
    </div>
    </div>
    <div class="form" v-else-if="user.user_type === 'user'">
      <div class="error"><h1>Access Denied!</h1></div>
      
    </div>
    <div v-else>Login</div>
   </template>
   <script>
    
     import productCard from "../components/productCard.vue";
   import userCard from "../components/userCard.vue";
   export default {
     computed: {
       products() {
         return this.$store.state.products
       },
       users() {
         return this.$store.state.users
       },
       user() {
         return this.$store.state.user
       }
     },

     components: { userCard,
    productCard,},
     mounted() {
       this.$store.dispatch("getProducts");
       this.$store.dispatch("getUsers");
     }
   };
   </script>
   <style scoped>
   .container{
     width: 100vw;
     height: 100vh;
   }
   .prods{
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
   }
   .form{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   form{
  background: black;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  gap: 20px;
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
   .error h1{
    font-size: 4.5rem;
   }
   </style>
   
   