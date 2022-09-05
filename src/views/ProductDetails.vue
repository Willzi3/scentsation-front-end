<template>
<div class="container">
    <div v-if="products" class="prod">
       <div class="product-image">
        <img :src="products.image" />
        <div class="info">{{ products.name}}</div>
       </div>
       <div class="product-info">
        <h1 class="product-title">About This Product</h1>
        <div class="info">{{ products.descriptions}}</div>
        <div class="info">{{ products.price}}</div>
        <div class="info">{{ products.category}}</div>
        <button class="btn">Add To Cart</button>
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
   }
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

    
</style>