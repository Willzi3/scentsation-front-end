<template>
  <router-link class="product_box" :to="{ name: 'ProductDetails', params: { id: product.product_id } }">
    <div class="card">
      <img class="product_img" :src="product.image" />
      <p class="product_title">{{ product.name }}</p>
      <p class="product_title">R{{ product.price }}.00</p>
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
   box-shadow: 5px 5px 5px 5px black;
   color: black;
    border-radius: 10px;
    width: 300px;
    height: 350px;
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