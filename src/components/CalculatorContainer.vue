<template>
  <section class="container__calculator">
    <div class="content__calculator">
      <label for="bill"
        >Bill
        <input-component :emit="bill" @setValue="setValue">
          <template #sufix>
            <span class="prefix"
              ><img src="../assets/img/dollar.png" alt=""
            /></span>
          </template>
        </input-component>
      </label>
      <div>
        Select Tip
        <div class="box__list">
          <box-component :number="5"></box-component>
          <box-component :number="10"></box-component>
          <box-component :number="15"></box-component>
          <box-component :number="20"></box-component>
          <box-component :number="25"></box-component>
          <box-component :custom="true"></box-component>
        </div>
      </div>
      <label for="numberPeople"
        >Number of the people
        <input-component :emit="person" @setValue="setValue">
          <template #sufix>
            <span class="prefix"
              ><img src="../assets/img/user.png" alt=""
            /></span> </template
        ></input-component>
      </label>
    </div>
  </section>
</template>
<script>
import BoxComponent from "./BoxComponent.vue";
import InputComponent from "./InputComponent.vue";
export default {
  components: { BoxComponent, InputComponent },
  name: "CalculatorContainer",
  methods: {
    setValue({ value, emit }) {
      if (emit === "setBill") {
        this.$emit("setTip", value);
      } else {
        this.$emit("setPersons", value);
      }
    },
  },
  data() {
    return {
      bill: "setBill",
      person: "setPerson",
    };
  },
};
</script>
<style scoped>
.container__calculator {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 400px;
  justify-content: space-around;
}
.prefix img {
  width: 20px;
}
.box__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
}
.content__calculator {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 20px;
}
</style>
