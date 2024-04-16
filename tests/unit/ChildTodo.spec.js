import { mount } from "@vue/test-utils";
import ChildTodo from "@/components/TodoApp/ChildTodo.vue";

describe("ChildTodo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ChildTodo);
  });

  it("should render ChildTodo ", () => {
    expect(wrapper.text()).toContain("Child");
  });
});
