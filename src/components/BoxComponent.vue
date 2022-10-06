<template>
  <div class="box">{{ number }}%</div>
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
  },
};
</script>
<style scoped>
.box {
  color: white;
  background-color: v-bind(color);
  width: 33%;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
}
</style>
