<template>
  <div>
    <h1>Tut TODO</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id" data-test="todo">
        <p>{{ todo.text }}</p>
      </li>
    </ul>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" type="text" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  props: {
    msg: String,
  },
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "testing tut",
          completed: false,
        },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
    },
  },
};
</script>

