<template>
  <div class="input-box">
    <slot name="sufix"></slot>
    <input type="number" placeholder="" />
  </div>
</template>
<script>
export default {
  name: "InputComponent",
};
</script>
<style scoped>
.input-box {
  display: flex;
  align-items: center;
  max-width: 300px;  
  background-color: var(--color-input);
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  padding-left: 0.5rem;
  overflow: hidden;
  font-family: sans-serif;
}

.input-box .prefix {
  font-weight: 300;
  font-size: 14px;
  color: #999;
}

.input-box input {
  flex-grow: 1;
  font-size: 14px;
  background: var(--color-input);
  border: none;
  outline: none;
  padding: 0.5rem;
  text-align: end;
  font-weight: bold;
}

.input-box:focus-within {
  border-color: #777;
}


</style>
