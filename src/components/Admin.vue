<template>
  <div v-if="users">
    {{ users.full_name}}
  </div>
</template>

<script>
export default {
computed: {
    users() {
        return this.$store.state.users
    }
}
}
</script>

<style>

</style>