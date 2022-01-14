---
sidebar: false
---

<div class="example-container">
    <div class="example-group" v-for="(item, index) in formats" :key="index">
        <h3 class="example-label" v-if="item.label">{{ item.label }}</h3>
        <p class="example-format">format: <input  v-model="item.format"/></p>
        <p class="example-console">console: {{ item.number }} => {{ valueFormats[index] }}</p>
    </div>
</div>

<script lang="ts" setup>
import numable from "../../../../dist";

import { ref,computed } from "vue";

const num = 123456789.123;
const percent = 0.123;
const time = 123;

// ########

const formats = ref([
  {
    number: num,
    format: "#,###",
  },
  {
    label:"Fill Zero",
    number: num,
    format: "000000000#,####.00000000"
  },
  {
    label: "Currency",
    number: num,
    format: "￥#,###",
  },
  {
    number: num,
    format: "#,###$",
  },
  {
    label: "Percentage",
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
  // {
  //   label: "time",
  //   number: time,
  //   format: "hh:mm:ss",
  // },
  // {
  //   label: "time",
  //   number: time,
  //   format: "mm:ss",
  // },
  {
    label: "Fill Any Character",
    number: num,
    format: "AAA-#,###-BBB",
  },
  {
    number: percent,
    format: "AAA-#.0%-BBB",
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
    }

    .example-label {
      font-weight: bold;
      border-top:1px solid #ddd;
      padding-top:20px;
    }

    .example-format {
      margin-bottom:6px;
    }
    .example-console {
      margin-top: 6px;
    }
  }
}
</style>
