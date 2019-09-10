<template>
		<div>
				<pre @click="countDown">{{counter}}</pre>
				<div class="red" v-bind:class="{active: this.fire === 'red'}"></div>
				<div class="yellow" v-bind:class="{active: this.fire === 'yellow'}"></div>
				<div class="green" v-bind:class="{active: this.fire === 'green'}"></div>
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
              this.$router.push({ name: 'green' });
              break;
            }
            case 'green': {
              this.$router.push({ name: 'red' });
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
		.red {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				background: red;
				margin: 15px;
				opacity: 0.25;
		}

		.yellow {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				background: orange;
				margin: 15px;
				opacity: 0.25;
		}

		.green {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				background: green;
				margin: 15px;
				opacity: 0.25;
		}

		.active {
				opacity: 1;
		}
</style>
