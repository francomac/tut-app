<template>
  <div>
    <h1>Parent</h1>
    <ChildTodo></ChildTodo>
  </div>
</template>

<script>
import ChildTodo from "./ChildTodo.vue";

export default {
  name: "ParentTodo",
  props: {
    msg: String,
  },
  components: {
    ChildTodo,
  },
};
</script>

