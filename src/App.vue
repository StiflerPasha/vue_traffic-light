<template>
    <router-view />
</template>

<script>
   export default {
	  mounted() {
		 this.$route.path === '/' && this.$router.push({ path: '/1' });
	  },
   };

</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #242424
  }
</style>
