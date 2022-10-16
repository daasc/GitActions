import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import BoxComponent from "../BoxComponent.vue";

const makeSut = (custom = false) => {
  const sut = mount(BoxComponent, { props: { custom } });

  return sut;
};

describe("BoxComponent", () => {
  it("renders properly", () => {
    const sut = makeSut();
    expect(sut.exists()).toBeTruthy();
  });

  it("should emit event of the value custom ", async () => {
    const sut = makeSut(true);

    const input = sut.find('[data-testid="inputCustom"]');
    await input.setValue(10);

    expect(sut.emitted().valueCustom[0]).toStrictEqual([10]);
  });
});
