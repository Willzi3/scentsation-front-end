<template>
  
    <div class="card">
       <!-- <p class="user_id">{{ user.user_id }}</p>
      <p class="user_name">{{ user.name }}</p> -->
      <div class="card-item">{{ user.user_id }}</div>
      <div class="card-item">{{ user.email }}</div>
      <div class="card-item">{{ user.password }}</div>
      <div class="card-item">{{ user.full_name }}</div>
      <div class="card-item">{{ user.phone }}</div>
      <div class="card-item">{{ user.user_type }}</div>
      <div class="card-item">{{ user.joined_date }}</div>
       
    </div>

</template>
<script>
export default {
  props: ["user"],
};
</script>
<style>
.card{
   box-shadow: 5px 5px 5px 5px lightsalmon;
    border-radius: 10px;
    width: 300px;
    height: 300px;
}
.product_img{
    height: 200px;
    width: 200px;
}
.product_price{
  margin: none;
}
</style>