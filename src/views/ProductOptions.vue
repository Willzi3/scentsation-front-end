<template>
    <div class="container">
        <div v-if="products" class="prod">
           <div class="product-image">
            <img :src="products.image" />
            <div class="info">{{ products.name}}</div>
           </div>
           <div class="options">
            <div class="option">Edit</div>
            
            <div class="option"  @click="deleteproduct(products.product_id)">Delete</div>
           </div>
        </div>
    </div>
    </template>
    <script>
    export default {
       props: ["id"],
       
       computed: {
        products() {
            return this.$store.state.product;
        },
       },
       mounted() {
        this.$store.dispatch("getProduct", this.$route.params.id)
       },
       methods: {
    deleteproduct(id) {
      return this.$store.dispatch("Deleteproduct", id);
    },
  },
    }
    </script>
    <style scoped>
    .container{
        height: 89vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .prod{
    width: 89%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    }
    .product-image{
        width: 45%;
        height: 80%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .product-info{
        width: 45%;
        height: 80%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .product-title{
        border: 1px solid black;
        width: 90%;
        font-size: 4rem;
    }
    .info{
        border: 1px solid black;
        width: 90%;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .btn{
        width: 90%;
        height: 10%;
        border-radius: 10px;
    }
    .prod img{
        width: 450px;
        height: 450px;
    }
    .prod p {
        font-size: 2rem;
       
       font-family: 'Rubik Distressed';
    }
    .options{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        width: 45%;
    }
        .option{
            border: 1px solid black;
            width: 30%;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .option:hover{
            background: black;
            color: white;
            cursor: pointer;
        }
    </style>