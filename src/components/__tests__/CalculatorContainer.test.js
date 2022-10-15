import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CalculatorContainer from "../CalculatorContainer.vue";

// import BoxComponent from "@/components/BoxComponent.vue";
// import InputComponent from "@/components/InputComponent.vue";
const makeSut = () => {
  const sut = mount(CalculatorContainer);

  return sut;
};

describe("CalculatorContainer", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });

  it("should issue an event when the user enters the account value", async () => {
    const sut = makeSut();

    const inputBill = sut.find('[data-testid="bill"]');
    await inputBill.setValue(100);

    expect(sut.emitted().setTip[0]).toStrictEqual([100]);
  });
});
