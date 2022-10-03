<template>
  <main>
    <h1>Tip Calculator</h1>
    <section class="container">
      <div class="container__calculator"></div>
      <result-container></result-container>
    </section>
  </main>
</template>
<script>
import ResultContainer from "@/components/ResultContainer.vue";
export default {
  components: { ResultContainer },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calculator",
};
</script>
<style lang="css" scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-align: center;
}
.container {
  display: flex;
  width: 50%;
  min-height: 500px;
  background-color: white;
  margin: 0 auto;
  border-radius: 20px;
  flex-direction: row-reverse;
  padding: 0 20px;
}
</style>
