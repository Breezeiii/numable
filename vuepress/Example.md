## base

<div class="example-group" v-for="(item, index) in Base" :key="index">
  <p class="example-format">format: <input  v-model="item.format"/></p>
  <p class="example-console">console: {{ item.number }} => {{ BaseToFormats[index] }}</p>
</div>

## FillZero

<div class="example-group" v-for="(item, index) in FillZero" :key="index">
  <p class="example-format">format: <input  v-model="item.format"/></p>
  <p class="example-console">console: {{ item.number }} => {{ FillZeroToFormats[index] }}</p>
</div>

## Currency

<div class="example-group" v-for="(item, index) in Currency" :key="index">
  <p class="example-format">format: <input  v-model="item.format"/></p>
  <p class="example-console">console: {{ item.number }} => {{ CurrencyToFormats[index] }}</p>
</div>

## Percentage
<div class="example-group" v-for="(item, index) in Percentage" :key="index">
  <p class="example-format">format: <input  v-model="item.format"/></p>
  <p class="example-console">console: {{ item.number }} => {{ PercentageToFormats[index] }}</p>
</div>

## FillAnyCharacter
<div class="example-group" v-for="(item, index) in FillAnyCharacter" :key="index">
  <p class="example-format">format: <input  v-model="item.format"/></p>
  <p class="example-console">console: {{ item.number }} => {{ FillAnyCharacterToFormats[index] }}</p>
</div>

<script lang="ts" setup>
import numable from "../../../../dist";

import { ref,reactive,computed,toRefs } from "vue";

const num = 123456789.123;
const percent = 0.123;
const time = 123;

interface formatModel {
  number: number
  format: string
}

// ########
// const base = ref<formatModel[]>([{
//   number: num,
//   format: "#,###",
// }]);

const __formats = reactive({
  Base: [{
    number: num,
    format: "#,###",
  }],
  FillZero:[{
    number: num,
    format: "000000000#,####.00000000"
  }],
  Currency:[{
    number: num,
    format: "￥#,###",
  },
  {
    number: num,
    format: "#,###$",
  }],
  Percentage:[{
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
  }],
  FillAnyCharacter:[{
    number: num,
    format: "AAA-#,###-BBB",
  },
  {
    number: percent,
    format: "AAA-#.0%-BBB",
  }]
});

const { Base,FillZero,Currency,Percentage,FillAnyCharacter } = toRefs(__formats);
const BaseToFormats = computed(()=>{
  return toFormat(Base)
});
const FillZeroToFormats = computed(()=>{
  return toFormat(FillZero)
});
const CurrencyToFormats = computed(()=>{
  return toFormat(Currency)
});
const PercentageToFormats = computed(()=>{
  return toFormat(Percentage)
});
const FillAnyCharacterToFormats = computed(()=>{
  return toFormat(FillAnyCharacter)
});

function toFormat(input){
  return input.value.map((item) => {
    return numable(item.number).format(item.format)
  });
}
</script>

<style scoped lang="scss">
.example-group {
  & + .example-group {
    margin-top:10px;
  }

  .example-format {
    margin-bottom:6px;
  }
  .example-console {
    margin-top: 6px;
  }

  input {
    line-height: 20px;
    padding:0 8px;
    min-width: 220px;
  }
}
</style>
