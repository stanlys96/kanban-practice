<template>
  <div>
    <div class="kanban-card">
      <p></p>
      <p>By:</p>
      <div class="date-icon">
        <p>Created at:</p>
        <div class="icon">
          <a href="#"><i class="fas fa-pencil-alt pencil"></i></a>
          <a href="#"><i class="fas fa-trash-alt trash"></i></a>
          <a href="#"><i class="fas fa-arrows-alt move"></i></a>
        </div>
      </div>
    </div>
    <p class="text-danger bg-light p-2"></p>
    <form class="addtask-form mb-3" v-if="editTask === true">
      <textarea name="addtask" id="addtask" cols="30" rows="3"></textarea>
      <button class="btn btn-success taskAdd" type="submit">Edit Task</button>
      <button class="btn btn-danger cancel">Cancel</button>
    </form>
    <form class="addtask-form mb-3 bg-dark p-3" v-if="editCategoryVar === true">
      <label for="category" class="text-light mr-3">Pick Category</label>
      <select name="category" id="category">
        <option value="backlog">Backlog</option>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button class="btn btn-success taskAdd" type="submit">
        Edit Category
      </button>
      <button class="btn btn-danger cancel">Cancel</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: [],
  data() {
    return {
      addTask: false,
      editTask: false,
      editCategoryVar: false,
      editError: false,
    };
  },
  methods: {},
  created: function () {
    // console.log(this.task);
  },
  mounted: function () {},
};
</script>

<style>
#addtask {
  padding: 5px;
}

button {
  border: 2px solid #000;
}

.kanban-card {
  background-color: #fff;
  padding: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
  justify-content: center;
  border-radius: 12px;
}

a {
  color: #000;
  margin: 5px 5px 0;
}

.pencil,
.trash,
.move {
  color: #000;
  display: inline-block;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.icon {
  margin-top: 5px;
  display: flex;
}
</style>