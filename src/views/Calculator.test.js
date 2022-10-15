import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Calculator from "../views/Calculator.vue";

describe("Calculator", () => {
  it("renders properly", () => {
    const wrapper = mount(Calculator);
    expect(wrapper.exists()).toBeTruthy();
  });
});
