<template>
    <div v-if="products" class="prods">
   
  <ProductCard class="card"
   v-for="product in products" 
   :key="product.product_id" 
   :product="product"/>

  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
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
</style>