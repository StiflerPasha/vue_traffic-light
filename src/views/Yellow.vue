<template>
  <div>
    <Lights fire="yellow" count='3'/>
  </div>
</template>

<script>
import Lights from '../components/Lights';

export default {
  name: 'yellow',
  components: {
    Lights,
  },
};
</script>
