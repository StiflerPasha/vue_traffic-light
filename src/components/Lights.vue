<template>
  <div class="lights">
    <div class="light red"
         v-bind:class="{
         active: this.fire === 'red',
         blink: this.fire === 'red' && counter <= 3
         }"></div>
    <div class="light yellow" v-bind:class="{active: this.fire === 'yellow'}">
      <pre class='timer'
           v-bind:style="{color: this.fire}"
           v-if="this.fire !== 'yellow'">{{counter}}</pre>
    </div>
    <div class="light green"
         v-bind:class="{
         active: this.fire === 'green',
         blink: this.fire === 'green' && counter <= 3
         }"></div>
  </div>
</template>

<script>
   export default {
	  name: 'lights',
	  props: ['fire', 'count'],
	  data() {
		 return {
			counter: 0,
		 };
	  },
	  methods: {
		 countDown() {
			if (this.counter) {
			   return setTimeout(() => {
				  --this.counter;
				  this.countDown();
			   }, 1000);
			} else {
			   switch (this.$route.name) {
				  case 'red': {
					 this.$router.push({ name: 'yellow' });
					 break;
				  }
				  case 'yellow': {
					 if (localStorage.getItem('LAST_FIRE') === 'green') {
						this.$router.push({ name: 'red' });
					 } else {
						this.$router.push({ name: 'green' });
					 }
					 break;
				  }
				  case 'green': {
					 this.$router.push({ name: 'yellow' });
					 break;
				  }
				  default:
					 return false;
			   }
			}
		 },
	  },
	  mounted() {
		 this.counter = this.count;
		 this.countDown();
	  },
   };
</script>


<style scoped>
  .lights {
    width: 140px;
    margin: 15vh auto;
    padding: 10px;
    border: 2px solid wheat;
    border-radius: 25px;
    background: #141212;
    box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
  }

  .light {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px;
    opacity: 0.25;
  }

  .red {
    background: red;
  }

  .yellow {
    background: orange;
  }

  .green {
    background: green;
  }

  .active {
    opacity: 1;
  }

  .timer {
    text-align: center;
    line-height: 100px;
    font-size: 4em;
    font-weight: bolder;
  }

  .blink {
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
</style>

