<template>
  <footer>
    <div>All Rights Reserved- created by zachary williams</div>
    <router-link to="/admin"><div class="admin"><h2>Admin</h2></div></router-link>
  </footer>
 
</template>

<script>
export default {
}
</script>

<style>
footer{
    
    height: 100px;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    position:fixed;
 bottom:0;
 width: 100%;
}
.admin{
  color: white;
  border: 1px solid white;
}
a{
  text-decoration: none;
  padding: 10px;
  
}
@media (min-width: 300px) and (max-width: 400px) {
 footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
}
@media (min-width: 200px) and (max-width: 300px) {
 footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
}
</style>