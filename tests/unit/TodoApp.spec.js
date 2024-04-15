import { mount } from "@vue/test-utils";
import AppTodo from "@/components/TodoApp/TodoApp.vue";

describe("TodoApp", () => {
  it("should render AppTodo text", () => {
    const wrapper = mount(AppTodo);
    const todo = wrapper.get("[data-test='todo']");

    expect(todo.text()).toBe("testing tut");
  });
});
