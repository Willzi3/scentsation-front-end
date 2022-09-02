<template>
  <div v-if="user" class="profile-name">
    <i class="fa-solid fa-user"></i><router-link to="/profile"><p>{{ user.full_name }}</p></router-link>
     </div>
<div class="container">
  
  <div v-if="products"  class="prods">
     
   
     <Card class="card"
      v-for="product in products" 
      :key="product.product_id" 
      :product="product"/>
   
     </div>
</div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    user() {
      return this.$store.state.user
    }
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUser");
  }
};
</script>
<style scoped>
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
h1{
    font-size: 5rem;
    color: black;
}
.prods{
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-inline: 7%;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: bold;
    box-shadow: 5px 5px 5px 5px lightgrey;
}
.prods a {
    text-decoration: none;
    color: black;
}
.image{
    height: 170px;
    width: 200px;
}
.profile-name{
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding-right: 130px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px;
  
}
.profile-name p{
  border: 1px solid black;
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
</style>