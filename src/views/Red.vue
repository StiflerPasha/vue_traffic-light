<template>
  <div>
    <Lights fire="red" count='10'/>
  </div>
</template>

<script>
import Lights from '../components/Lights';

export default {
  name: 'red',
  components: {
    Lights,
  },
};
</script>
