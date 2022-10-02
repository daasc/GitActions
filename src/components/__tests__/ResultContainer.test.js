import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ResultContainer from "../ResultContainer.vue";

describe("ResultContainer", () => {
  it("renders properly", () => {
    const wrapper = mount(ResultContainer);
    expect(wrapper.vm).toBeDefined();
  });
});
