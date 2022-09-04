<template>
 <div class="container">
  <form class="filters">
    <button @click="sort">Sort</button>
    <select name="" class="inp" v-model="category">
        <label>Sort By Catergory</label>
        <option value="All" selected>All</option>
        <option value="CPU">CPU</option>
        <option value="Case-Fans">Case-Fans</option>
        <option value="Console-Accessories">Console-Accessories</option>
        <option value="Console">Console</option>
        <option value="Gaming-Chairs">Gaming-Chairs</option>
        <option value="Gaming-Desktops">Gaming-Desktops</option>
        <option value="Graphics-Card">Graphics-Card</option>
    </select>
    <input type="text" v-model="search" placeholder="search..."  class="inp" />
    {{ search }}
</form>
 <div v-if="products" class="prods">
  <Card
   v-for="product of filteredProducts" 
   :key="product.id" 
   :product="product"/>

  </div>
 </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return{
      search: "",
      price: "All",
      category: "All"
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  filteredProducts() {
    return this.$store.state.products?.filter((product) => {
      let isMatch = true;
      if (!product.name.toLowerCase().includes(this.search.toLowerCase())) isMatch = false
      if(this.category !== "All" && product.category !== this.category)
      isMatch = false;
      return isMatch
    });
  },
  },
  methods: {
sort() {
  this.$store.commit("sortByPrice");
}
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5%;
  gap: 20px;
  padding: 20px;
}
.prods a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.filters{
  background: lightgrey;
  border-radius: 10px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 20%;
  margin-bottom: -70px;
  gap: 10px;
}
</style>

