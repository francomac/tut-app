<template>
  <div id="app">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoApp msg="Welcome to Your Vue.js App" />
    <ParentTodo />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import TodoApp from "./components/TodoApp/TodoApp.vue";
import ParentTodo from "./components/TodoApp/ParentTodo.vue";

export default {
  name: "App",
  components: {
    TodoApp,
    NavBar,
    ParentTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
