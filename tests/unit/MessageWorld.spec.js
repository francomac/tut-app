import { mount } from "@vue/test-utils";
import MessageWorld from "../../src/components/MessageWorld.vue";

describe("MessageWorld", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = mount(MessageWorld, {
      propsData: { msg: "Hello Friends" },
    });

    expect(wrapper.text()).toContain("Hello Friends");
  });
});
