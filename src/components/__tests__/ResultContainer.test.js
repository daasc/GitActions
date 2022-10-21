import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ResultContainer from "../ResultContainer.vue";
const makeSut = (tipAmount = 0, person = 0, percentage = 0) => {
  const sut = mount(ResultContainer, {
    props: { tipAmount, person, percentage },
  });

  return sut;
};

describe("ResultContainer", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });

  it("should show the tip amount", async () => {
    const sut = makeSut(100, 1, 10);

    const tipAmount = sut.find('[data-testid="tip-amount"]');

    expect(tipAmount.text()).toContain("10.00");
  });
});
