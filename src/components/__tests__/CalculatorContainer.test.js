import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CalculatorContainer from "../CalculatorContainer.vue";
import BoxComponent from "../BoxComponent.vue";
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

  it("should issue an event when the user enters the account value", async () => {
    const sut = makeSut();

    const inputBill = sut.findAll('[data-testid="bill"]').at(1);
    await inputBill.setValue(10);

    expect(sut.emitted().setPersons[0]).toStrictEqual([10]);
  });

  it("should issue an event when the user selected a percentage", async () => {
    const sut = makeSut();

    const boxPercentage = sut.findAllComponents(BoxComponent).at(1);
    await boxPercentage.trigger("click");

    expect(sut.emitted().setPercentage[0]).toStrictEqual([10]);
  });
});
