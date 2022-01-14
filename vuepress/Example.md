---
sidebar: false
---

<div class="example-container">
    <div class="example-group" v-for="(item, index) in formats" :key="index">
        <p>format: <input  v-model="item.format"/></p>
        <p>console: {{ item.number }} => {{ valueFormats[index] }}</p>
    </div>
</div>

<script lang="ts" setup>
import numable from "../../../../dist";

import { ref,computed } from "vue";

const num = 123456789.123;
const percent = 0.123;

// ########

const formats = ref([
  {
    number: num,
    format: "#,###",
  },
  {
    number: num,
    format: "#,####.000000"
  },
  {
    number: num,
    format: "$#,###",
  },
  {
    number: num,
    format: "￥#,###",
  },
  {
    number: num,
    format: "#,###元",
  },
  {
    number: percent,
    format: "#%"
  },
  {
    number: percent,
    format: "#.##%"
  },
  {
    number: percent,
    format: "#.00%"
  },
  {
    number: num,
    format: "AAA#,###BBB",
  },
]);

const valueFormats = computed(()=>{
  return  formats.value.map((item) => {
    return numable(item.number).format(item.format)
  });
});
</script>

<style scoped lang='scss'>
.example-container {
  .example-group {
    & + .example-group {
      margin-top:10px;
      border-top:1px solid #ddd;
    }
  }
}
</style>
