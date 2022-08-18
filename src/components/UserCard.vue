<template>
  
    <div class="card">
       <!-- <p class="user_id">{{ user.user_id }}</p>
      <p class="user_name">{{ user.name }}</p> -->
      <div class="card-item">User_id:{{ user.user_id }}</div>
      <div class="card-item">Email:{{ user.email }}</div>
      <div class="card-item">Password:{{ user.password }}</div>
      <div class="card-item">Full_Name:{{ user.full_name }}</div>
      <div class="card-item">Phone_Number:{{ user.phone }}</div>
      <div class="card-item">User_Type:{{ user.user_type }}</div>
      <div class="card-item">Joined_Date:{{ user.joined_date }}</div>
       
    </div>

</template>
<script>
export default {
  props: ["user"],
};
</script>
<style scoped>
.card{
   box-shadow: 5px 5px 5px 5px lightsalmon;
    border-radius: 10px;
    width: 800px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.card-item{
  border: 1px solid black;
  width: 90%;
}

</style>