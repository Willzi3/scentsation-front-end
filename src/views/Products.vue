<template>

    <div v-if="products"  class="prods">
     
   
  <Card class="card"
   v-for="product in products" 
   :key="product.product_id" 
   :product="product"/>

  </div>
  <div v-if="user">
    {{ user.full_name }}
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
}
.prods a {
    text-decoration: none;
    color: black;
}
.image{
    height: 170px;
    width: 200px;
}
.profile{
  border: 1px solid black;
  height: 500px;
}
</style>