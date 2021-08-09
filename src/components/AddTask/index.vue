<template>
  <div class="container-fluid">
    <h1>Add Task</h1>
    <form @submit="onSubmit">
      <div class="row">
        <div class="col-100">
          <input type="text" placeholder="Add new task..." v-model="title" />
        </div>
      </div>
      <div class="row">
        <div class="col-100 title">
          <label>Description</label>
        </div>
        <div class="col-100">
          <textarea cols="30" rows="5" v-model="description"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-50 title">
          <label>Due Date</label>
          <div class="date-input">
            <input type="date" v-model="date" />
          </div>
        </div>
        <div class="col-50 title">
          <label>Piority</label>
          <div class="select-input">
            <select v-model="piority">
              <option value="nomal" selected>Nomal</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-100 submit-btn">
          <button type="submit" class="btn-success">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'AddTask',
  data() {
    return {
      title: '',
      description: '',
      date: '',
      piority: 'nomal'
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(event) {
      event.preventDefault()
      let newTodo = {
        id: uuidv4(),
        title: this.title,
        description: this.description,
        date: new Date(this.date),
        piority: this.piority,
        completed: false
      }
      this.addTodo(newTodo)
      this.title = ''
      this.description = ''
      this.date = ''
      this.piority = ''
    }
  }
}
</script>

<style>
label {
  padding: 20px 12px 6px 0;
  display: inline-block;
}

.title {
  text-align: left;
  font-weight: 600;
}

input[type='text'],
input[type='date'],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.submit-btn {
  margin-top: 20px;
}
button {
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-success {
  background-color: #04aa6d;
}

.btn-danger {
  background-color: rgb(158, 27, 27);
}

.btn-primary {
  background-color: rgb(75, 148, 207);
}

.btn-success:hover {
  background-color: #45a049;
}

@media screen and (min-width: 600px) {
  .date-input {
    margin-right: 10px;
  }
}
</style>