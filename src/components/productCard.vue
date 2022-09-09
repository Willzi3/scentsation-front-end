<template>
  
      <router-link class="product_box" :to="{ name: 'ProductOptions', params: { id: product.product_id } }">
        <tr>
        <td><img class="product_img" :src="product.image" /></td>
        <td>{{product.name}}</td>
      </tr>
      </router-link>
    
      
   
  </template>
  <script>
  export default {
    props: ["product"],
  };
  </script>
  <style scoped>
    tr{
      width: 100%;
      height: 60px;
      border: 1px solid black;
    }
    td{
      border: 1px solid black;
    }
 .product_img{
  width: 50px;
  height: 50px;
  border: 1px solid black;
 }
  </style>