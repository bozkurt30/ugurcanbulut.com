<template>
  <div class="container-1">
    <Home />
    <Service :services="serviceList" />
    <Project :projects="menuList" />
    <Stages />
  </div>
</template>

<script>
export default {
  computed: {
    menuList () {
      return this.$store.getters.getProjects
    },
    serviceList () {
      return this.$store.getters.getService
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
