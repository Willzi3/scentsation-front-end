<template>
  <div class="container">
    <div class="categories">
      <div class="cat">CPU</div>
      <div class="cat">CASE FANS</div>
      <div class="cat">CONSOLE ACCESSORIES</div>
      <div class="cat">CONSOLES</div>
      <div class="cat">GAMING CHAIRS</div>
      <div class="cat">GAMING DESKTOPS</div>
      <div class="cat">GRAPHIC CARDS</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categories{
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}
.cat{
  border-radius: 10px;
  background: lightgrey;
  width: 350px;
  height: 200px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>