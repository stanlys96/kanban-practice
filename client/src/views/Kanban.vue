<template>
  <div class="container mt-5">
    <div class="row" id="kanban">
      <Backlog></Backlog>
      <Todo></Todo>
      <Doing></Doing>
      <Done></Done>
    </div>
  </div>
</template>

<script>
import Backlog from "../components/Backlog";
import Todo from "../components/Todo";
import Doing from "../components/Doing";
import Done from "../components/Done";
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
  components: {
    Backlog,
    Todo,
    Doing,
    Done,
  },
};
</script>

<style>
</style>