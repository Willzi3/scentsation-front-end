<template>
<div v-if="products" class="container">
    <div class="row">
        <div class="col">
            <div class="product-image">
                <img :src="products.image" />
            </div>
        </div>
        <div class="col">
           <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
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
    </div>
    <div class="flip-card-back">
      <form>
        <input type="text" name="name" placeholder="Name:" />
         <input type="text" name="price" placeholder="Price:" />
          <input type="text" name="descriptions" placeholder="Description:" />
           <input type="text" name="category" placeholder="Category:" />
            <input type="text" name="created_by" placeholder="Created By:" />
            <button>Update</button>
      </form>
    </div>
  </div>
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
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 500px;
  height: 500px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
    
</style>