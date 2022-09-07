<template>
    <div class="container">
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
     margin: 10px;
   }
   .prods{
     background: grey;
     border-radius: 10px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 5%;
     gap: 10px;
     padding: 20px;
     width: 50%;
     height: 40%;

   }
   .prods a {
     text-decoration: none;
     color: black;
     font-weight: bold;
   }
   .row{
    width: 100%;
    display: flex;
   }
   </style>
   
   