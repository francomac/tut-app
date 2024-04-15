<template>
  <nav>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">My Profile</a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false,
      });
    },
  },
};
</script>

<style  scoped>
</style>