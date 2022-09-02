<template>
  <router-link class="product_box" :to="{ name: 'ProductDetails', params: { id: product.product_id } }">
    <div class="card">
      <img class="product_img" :src="product.image" />
      <p class="product_title">{{ product.name }}</p>
      <p class="product_title">{{ product.price }}</p>
       
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.card{
   border: 1px solid black;
    border-radius: 10px;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.product_img{
    height: 200px;
    width: 200px;
}
.product_price{
  margin: none;
}
</style>