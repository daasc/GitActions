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
});
