<template>
  <div class="container__calculator">
    <label for="bill">Bill</label>
    <input type="text" id="bill" />
    Select Tip
    <box-component :number="10"></box-component>
    <label for="numberPeople">Number of the people</label>
    <input type="text" id="numberPeople" />
  </div>
</template>
<script>
import BoxComponent from "./BoxComponent.vue";
export default {
  components: { BoxComponent },
  name: "CalculatorContainer",
};
</script>
<style scoped>
.container__calculator {
  display: flex;
  flex-direction: column;
  width: 40%;
}
</style>
