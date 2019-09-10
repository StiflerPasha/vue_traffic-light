<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1">Red</router-link> |
      <router-link to="/2">Yellow</router-link> |
      <router-link to="/3">Green</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$router.push({ path: '/1' });
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
