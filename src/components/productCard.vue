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
  .product_box{
    border: 1px solid black;
    width: 90%;
  }
  .card{
    display: flex;
  }
  .card img{
    width: 1rem;
    height: 1rem;
  }
  </style>