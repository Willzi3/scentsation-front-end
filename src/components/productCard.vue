<template>
    <router-link class="product_box" :to="{ name: 'ProductOptions', params: { id: product.product_id } }">
      <div class="card">
        <img class="product_img" :src="product.image" />
        <p class="product_title">{{ product.name }}</p>
        <p class="product_price">{{ product.price }}</p>
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
  .card:hover{
    background: black;
    color: white;
  }
  .card img{
    width: 4rem;
    height: 4rem;
    border: 1px solid black;
    width: 30%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
  .product_img{
    border: 1px solid black;
    width: 30%;
  }
  .product_title{
    border: 1px solid black;
    width: 30%;
  }
  .product_price{
    border: 1px solid black;
    width: 30%;
  }
  </style>