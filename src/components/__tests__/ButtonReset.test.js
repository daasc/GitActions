import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonReset from "../ButtonReset.vue";

const makeSut = () => {
  const sut = mount(ButtonReset);

  return sut;
};

describe("ButtonReset", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });

  it("should emit event of the reset number", () => {
    const sut = makeSut();

    const button = sut.find("button");
    button.trigger("click");

    expect(sut.emitted().resetValue[0]).toStrictEqual([]);
  });
});
