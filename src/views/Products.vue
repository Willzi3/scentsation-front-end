<template>
 <div class="container" v-if="user">
  <form class="filters">
    <button @click="sort" class="inp">Sort</button>
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
    <router-link to="/profile">
      <div class="user" v-if="user">
      <i class="fa-solid fa-user"></i>
      <div class="profile-name"><h2>{{user.full_name}}</h2></div>
    </div>
    </router-link>
   <router-link to="/cart">
    <div class="cart">
      <i class="fa-solid fa-cart-shopping"></i>
      <h2>Cart</h2>
    </div>
   </router-link>
</form>
 <div v-if="products" class="prods">
  <Card
   v-for="product of filteredProducts" 
   :key="product.id" 
   :product="product"/>

  </div>
 </div>
 <div v-else>Login</div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return{
      search: "",
      price: "All",
      category: "All",
      email: "",
      password: "",
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    user() {
      return this.$store.state.user
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
},
login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      router.push("/admin")
    },

  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
    // this.$store.dispatch("getUser");
  }
};
</script>
<style scoped>
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.prods{
  width: 90%;
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
  background: black;
  border-radius: 10px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom: -70px;
  gap: 10px;
}
.user{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  width: 300px;
}
a{
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 6px;
}
.cart{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
  width: 150px;
}
.inp{
  border: none;
  height: 50px;
  border-radius: 6px;
  background: white;
}
form button{
  width: 200px;
}
</style>

