<template>
    <div v-if="users" class="prods">
   
  <UserCard class="card"
   v-for="user in users" 
   :key="user.user_id" 
   :user="user"/>

  </div>
</template>
<script>
import UserCard from "../components/UserCard.vue";
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
  },
  components: { UserCard },
  mounted() {
    this.$store.dispatch("getUsers");
  }
};
</script>
<style scoped>

</style>