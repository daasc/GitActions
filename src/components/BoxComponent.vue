<template>
  <div class="box">
    <input v-if="custom" type="number" placeholder="Custom" />
    <div v-else>{{ number }}%</div>
  </div>
</template>
<script>
export default {
  name: "BoxComponent",
  props: {
    number: {
      type: Number,
    },
    color: {
      type: String,
      default: "#03363a",
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.box {
  color: white;
  background-color: v-bind(color);
  width: 30%;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
input[type="number"] {
  display: flex;
  align-items: center;
  max-width: 300px;
  background-color: var(--color-input);
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  overflow: hidden;
  font-family: sans-serif;
  -moz-appearance: textfield;
  height: 50px;
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
