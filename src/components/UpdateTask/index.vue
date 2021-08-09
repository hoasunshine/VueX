<template>
  <div class="container-fluid">
    <form @submit="onSubmit" class="update-form">
      <div class="row">
        <div class="col-100">
          <input
            type="text"
            placeholder="Add new task..."
            v-model="todo.title"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-100 title">
          <label>Description</label>
        </div>
        <div class="col-100">
          <textarea cols="30" rows="5" v-model="todo.description"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-50 title">
          <label>Due Date</label>
          <div class="date-input">
            <input type="date" v-model="todo.date" />
          </div>
        </div>
        <div class="col-50 title">
          <label>Piority</label>
          <div class="select-input">
            <select v-model="todo.piority">
              <option value="nomal" selected>Nomal</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-100 submit-btn">
          <button type="submit" class="btn-success">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'updateTask',
  props: ['todo'],
  methods: {
    ...mapActions(['updateTodo']),
    onSubmit(event) {
      event.preventDefault()
      let newTodo = {
          id: this.todo.id,
        title: this.todo.title,
        description: this.todo.description,
        date: new Date(this.todo.date),
        piority: this.todo.piority,
        completed: this.todo.completed,
      }
      this.updateTodo(newTodo);
    }
  }
}
</script>

<style scoped>
.container-fluid {
  border: 1px solid #ccc;

}
.update-form {
  margin: 10px;
}
</style>