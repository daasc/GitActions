<template>
  <main>
    <h1>Tip Calculator</h1>
    <section class="container">
      <calculator-container></calculator-container>
      <result-container></result-container>
    </section>
  </main>
</template>
<script>
import ResultContainer from "@/components/ResultContainer.vue";
import CalculatorContainer from "../components/CalculatorContainer.vue";
export default {
  components: { ResultContainer, CalculatorContainer },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Calculator",
  data() {
    return {
      tip: 0,
      persons: 0,
      percentage: 0,
    };
  },
  methods: {
    setTip({ tip }) {
      this.tip = tip;
    },
    setPersons({ persons }) {
      this.persons = persons;
    },
    setPercentage({ percentage }) {
      this.percentage = percentage;
    },
  },
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
  padding: 0 20px;
  justify-content: space-between;
}
</style>
