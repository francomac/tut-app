import { shallowMount } from "@vue/test-utils";
import ParentTodo from "@/components/TodoApp/ParentTodo.vue";

describe("ParentTodo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ParentTodo);
  });

  it("should render ParentTodo ", () => {
    expect(wrapper.text()).toContain("Parent");
  });

  // only with mount this one will pass
  // it("should render ParentTodo as well ", () => {
  //   expect(wrapper.text()).toContain("Child");
  // });
});
