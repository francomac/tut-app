import { mount } from "@vue/test-utils";
import AppTodo from "@/components/TodoApp/TodoApp.vue";

describe("TodoApp", () => {
  it("should render AppTodo text", () => {
    const wrapper = mount(AppTodo);
    const todo = wrapper.get("[data-test='todo']");

    expect(todo.text()).toBe("testing tut");
  });

  it("should add a new todo", async () => {
    const wrapper = mount(AppTodo);

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

    expect(wrapper.vm.newTodo).toMatch("");
  });
});
