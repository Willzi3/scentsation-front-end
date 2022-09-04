<template>
  <div  v-if="products.category === CPU">

    {{ products.image }}
 
  </div>
</template>

<script>
export default {
 computed: {
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
}
</script>

<style>

</style>