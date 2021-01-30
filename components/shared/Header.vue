<template>
  <div>
    <nav class="nav-bar">
      <ul>
        <li v-for="(item,i) in setNav" :key="i">
          <NuxtLink :to="item.url" tag="a">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    setNav () {
      return this.$store.getters.getNavs
    }
  }
}
</script>
<style scoped>
nav.nav-bar {
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1000;
}

nav.nav-bar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #292D44;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 352px;
  height: 86px;
}

nav.nav-bar ul li {
    padding: 0px 16px;
}

nav.nav-bar ul li a {
    display: block;
    color: #FFFFFF;
    text-align: center;
    margin-top: 30px;
    text-decoration: none;
    font-size: 21px;
}

nav.nav-bar ul li a:hover {
    border-bottom: 1px solid #ffc727;
}
</style>
