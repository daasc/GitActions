<template>
  <div class="container__calculator">
    <label for="bill">Bill</label>
    <input-component>
      <template #sufix>
        <span class="prefix"
          ><img src="../assets/img/dollar.png" alt=""
        /></span>
      </template>
    </input-component>
    Select Tip
    <box-component :number="10"></box-component>
    <label for="numberPeople">Number of the people</label>
    <input-component>
      <template #sufix>
        <span class="prefix"
          ><img src="../assets/img/user.png" alt=""
        /></span> </template
    ></input-component>
  </div>
</template>
<script>
import BoxComponent from "./BoxComponent.vue";
import InputComponent from "./InputComponent.vue";
export default {
  components: { BoxComponent, InputComponent },
  name: "CalculatorContainer",
};
</script>
<style scoped>
.container__calculator {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.prefix img {
  width: 20px;
}
</style>
