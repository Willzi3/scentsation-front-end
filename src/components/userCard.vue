<template>
    <router-link class="user_box" :to="{ name: 'UserOptions', params: { id: user.user_id } }">
      <tr>
        <td><img class="user_img" :src="user.image" /></td>
        <td>{{user.full_name}}</td>
        
      </tr>
    </router-link>
  </template>
  <script>
  export default {
    props: ["user"],
  };
  </script>
  <style scoped>
 tr{
      width: 800px;
      height: 50px;
      border: 1px solid black;
    }
 .user_img{
  width: 50px;
  height: 50px;
  border: 1px solid black;
 }
  </style>