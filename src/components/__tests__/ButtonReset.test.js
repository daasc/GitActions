import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonReset from "../ButtonReset.vue";

describe("ButtonReset", () => {
  it("renders properly", () => {
    const wrapper = mount(ButtonReset);
    expect(wrapper.vm).toBeDefined();
  });
});
