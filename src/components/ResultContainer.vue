<template class="template">
  <div class="container__result">
    <div class="space_result">
      <div class="content_result">
        <div class="describe_result">
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <div class="number_result" data-testid="tip-amount">
          ${{ tipValue }}
        </div>
      </div>
      <div class="content_result">
        <div class="describe_result">
          <span>Total</span>
          <span>/ person</span>
        </div>
        <div class="number_result">${{ tipPerPerson }}</div>
      </div>
    </div>
    <button-reset @resetValue="reset"></button-reset>
  </div>
</template>
<script>
import ButtonReset from "./ButtonReset.vue";
export default {
  components: { ButtonReset },
  name: "ResultContainer",
  props: {
    tipAmount: {
      type: Number,
      default: 0,
      required: true,
    },
    person: {
      type: Number,
      default: 0,
      required: true,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {
    tipValue() {
      const result = (this.tipAmount / 100) * this.percentage;
      return Number(result).toFixed(2);
    },
    tipPerPerson() {
      const result = ((this.tipAmount / 100) * this.percentage) / this.person;
      if (!isNaN(result) && this.person) {
        return Number(result).toFixed(2);
      }
      return 0;
    },
  },
  methods: {
    reset() {
      this.$emit("resetValue");
    },
  },
};
</script>
<style scoped>
.container__result {
  background-color: var(--color-container-result);
  width: 50%;
  height: 80%;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
}
.space_result {
  height: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
}
.content_result {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.describe_result {
  display: flex;
  flex-direction: column;
}
.describe_result span:first-child {
  color: white;
  font-size: 1.3rem;
}
.describe_result span:last-child {
  color: var(--color-font-result);
  font-size: 1.2rem;
}
.number_result {
  color: var(--color-font-result);
  font-size: 2rem;
}
</style>
