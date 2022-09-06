<template>
    <!-- <router-link class="user_box" :to="{ name: 'ProductDetails', params: { id: product.product_id } }"> -->
      <div class="card">
        <!-- <img class="product_img" :src="product.image" /> -->
        <p class="user_name">{{ user.full_name }}</p>
        <p class="user_email">{{ user.email }}</p>
      </div>
    <!-- </router-link> -->
  </template>
  <script>
  export default {
    props: ["user"],
  };
  </script>
  <style scoped>
  
  </style>