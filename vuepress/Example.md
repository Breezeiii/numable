---
sidebar: false
---

<div class="example-container">
    <div class="example-group" v-for="(item, index) in numbers" :key="index">
        <h3>number: {{ item.number }}</h3>
        <p>format: {{ item.format }}</p>
        <p>console: {{ item.toformat }}</p>
    </div>
</div>

<script lang="ts" setup>
import numable from "../../../../dist";

import { ref } from "vue";

const num = 123456.123;
const percent = 0.123;

const formats = [
  {
    number: num,
    format: "#,###"
  },
  {
    number: num,
    format: "#,####"
  },
  {
    number: percent,
    format: "#%"
  },
  {
    number: percent,
    format: "#.0%"
  }
];

const numbers = ref<string[]>([]);

numbers.value = formats.map((item) => {
  return {
      ...item,
      toformat:numable(item.number).format(item.format)
  };
});
</script>

<style scoped lang='scss'>
.example-container{
    display:grid;
    grid-template-rows:auto auto ;
    grid-template-columns:50% 50%;
    grid-gap: 10px;
    .example-group {
        background-color:rgba(0,0,0,0.8);
        color:#ffffff;
        border-radius:10px;
        padding:2px 20px;

        &+.example-group { 
        }
    }

}
</style>
