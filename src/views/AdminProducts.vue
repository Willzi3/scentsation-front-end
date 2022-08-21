<template>
    <div v-if="products" class="prods">
   
  <ProductCard class="card"
   v-for="product in products" 
   :key="product.product_id" 
   :product="product"/>

  </div>
  <div class="form-container">
    <form @submit.prevent="addProduct">
      <h3>Add Product</h3>
      <input class="form-input" type="text" name="name" required v-model="name" placeholder="Name:" />
      <input class="form-input" type="text" name="price" required v-model="price" placeholder="Price:"/>
      <input class="form-input" type="text" name="descriptions" required v-model="descriptions" placeholder="Descriptions:"/>
      <input class="form-input" type="text" name="image" required v-model="image" placeholder="Image:"/>
      <input class="form-input" type="text" name="category" required v-model="category" placeholder="Category:"/>
      <input class="form-input" type="text" name="created_by" required v-model="created_by" placeholder="Created_By:"/>
      <input class="form-btn" type="submit" value="Add Product" />
    </form>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  computed: {
    products() {
      return this.$store.state.products
    },
    product() {
      return this.$store.state.product
    }
  },
  components: { ProductCard },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("addProduct");
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", {
        name: this.name,
        price: this.price,
        descriptions: this.descriptions,
        image: this.image,
        category: this.category,
        created_by: this.created_by
      });
    },
  },
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
form{
  border: 1px solid black;
  height: 400px;
  width: 300px;
}
.form-container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
</style>