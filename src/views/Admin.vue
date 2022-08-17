<template>
  <div class="container">
    <div class="admin-items">
        <router-link to="/admin-users"><div class="item">USERS</div></router-link>
        <router-link to="/admin-products"><div class="item">PRODUCTS</div></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
    height: 89vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.admin-items{
    display: flex;
    gap: 20px;
}
.admin-items a {
    text-decoration: none;
    color: lightsalmon;
}
.item{
    box-shadow: 5px 5px 5px 5px lightsalmon;
    border-radius: 10px;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: lightsalmon;
}
.item:hover{
    background: lightsalmon;
    box-shadow: 5px 5px 5px 5px salmon;
    color: white;
}
</style>