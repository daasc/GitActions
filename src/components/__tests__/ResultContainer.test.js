import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ResultContainer from "../ResultContainer.vue";
const makeSut = () => {
  const sut = mount(ResultContainer);

  return sut;
};

describe("ResultContainer", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });
});
