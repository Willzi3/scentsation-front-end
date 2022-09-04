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
   background: white;
    border-radius: 10px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.product_img{
    height: 130px;
    width: 130px;
}
.product_price{
  margin: none;
}
.product_box{
  display: flex;

}
</style>