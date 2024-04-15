<template>
  <div>
    <h1>Tut TODO</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id" data-test="todo">
        <p>{{ todo.text }}</p>
      </li>
    </ul>
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
      todos: [
        {
          id: 1,
          text: "testing tut",
          completed: false,
        },
        {
          id: 2,
          text: "testing tut2",
          completed: false,
        },
        {
          id: 3,
          text: "testing tut3",
          completed: false,
        },
      ],
    };
  },
};
</script>

