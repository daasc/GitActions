import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CalculatorContainer from "../CalculatorContainer.vue";

const makeSut = () => {
  const sut = mount(CalculatorContainer);

  return sut;
};

describe("CalculatorContainer", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });
});
