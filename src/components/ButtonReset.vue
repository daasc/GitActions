<template>
  <div class="button_reset">
    <button @click="reset()">Reset</button>
  </div>
</template>
<script>
export default {
  name: "ButtonReset",
  methods: {
    reset() {
      this.$emit("resetValue");
    },
  },
};
</script>
<style scoped>
button {
  background-color: var(--color-button);
  color: white;
  font-weight: bold;
  border: none;
  width: 80%;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
}
.button_reset {
  display: flex;
  justify-content: center;
}
</style>
