<template>
  <div class="col-3">
    <h2></h2>
    <p class="text-danger bg-light p-2 my-2"></p>
    <div class="cards">
      <TaskCard></TaskCard>
    </div>
    <form class="addtask-form">
      <textarea
        name="addtask"
        id="addtask"
        cols="30"
        rows="3"
        placeholder="Add a task"
      ></textarea>
      <button class="btn btn-success taskAdd" type="submit">Add Task</button>
      <button class="btn btn-danger cancel">Cancel</button>
    </form>
    <a href="#" class="add"><i class="fa fa-plus mr-2"></i>Add a card</a>
  </div>
</template>

<script>
import TaskCard from "./TaskCard";
import axios from "axios";
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
  components: {
    TaskCard,
  },
  created: function () {},
  computed: {},
};
</script>

<style>
.cards {
  max-height: 60vh;
  overflow: auto;
}

h2 {
  text-align: center;
  background-color: #d35400;
  border-radius: 12px;
  color: #fff;
  border: 2px solid #000;
  font-size: 18px;
  padding: 7px;
}

a {
  display: inline-block;
  margin-top: 5px;
  color: #fff;
  text-decoration: none;
}

.col-3:first-of-type {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.col-3:last-of-type {
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.col-3 {
  background-color: rgba(149, 165, 166, 0.7);
  padding: 10px;
  max-height: 80vh;
  overflow: auto;
}

.add {
  opacity: 1;
  display: inline-block;
  padding: 5px 25px;
  background-color: #2c3e50;
  border: 2px solid #000;
  margin: 10px auto 0;
  border-radius: 12px;
}

.taskAdd,
.cancel {
  border: 2px solid #000;
}
</style>