<template>
<div v-if="products" class="container">
    <div class="row">
        <div class="col">
            <div class="product-image">
                <img :src="products.image" />
            </div>
        </div>
        <div class="col">
            <div class="col-item">
                <h2>Product_id: {{ products.product_id }} </h2>
            </div>
            <div class="col-item">
                <h2>Name: {{ products.name }} </h2>
            </div>
            <div class="col-item">
                <h2>Price: R{{ products.price }}.00 </h2>
            </div>
            <div class="col-item">
                <h2>Description: {{ products.descriptions }} </h2>
            </div>
            <div class="col-item">
                <h2>Category: {{ products.category }} </h2>
            </div>
            <div class="col-item">
                <h2>Created By: {{ products.created_by }} </h2>
            </div>
            <hr>
            <div class="extra">
                <button>Update</button>
                <button>Delete</button>
            </div>

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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.row{
    width: 100%;
    display: flex;
    gap: 10px;
}
.col{
    width: 50%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.col-item{
    border: 1px solid black;
    width: 95%;
}
.product-image img {
    width: 500px;
}
.extra{
    display: flex;
    gap: 290px;
}

.extra button {
    width: 150px;
    height: 30px;
    border-radius: 5px;
}
    
</style>