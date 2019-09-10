<template>
  <div>
    <Lights fire="green" count='15'/>
  </div>
</template>

<script>
import Lights from '../components/Lights';

export default {
  name: 'green',
  components: {
    Lights,
  },
};
</script>
