<template>
  <div>
    <h1>count: {{ count }}</h1>
    <button @click="increment">+1</button>
    <button @click="subtract">-1</button>
    <p>open Console panel</p>
  </div>
</template>

<script>
import { prevIncrement, prevSubtract } from './decorator';

export default {
  name: 'AppIndex',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    @prevIncrement()
    increment() {
      this.count++;
    },
    @prevSubtract()
    subtract() {
      this.count--;
    },
  },
};
</script>
