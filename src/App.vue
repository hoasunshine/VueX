<template>
  <div id="app">
    <div class="row app">
      <div class="col-6 col-s-12 task-action">
        <h2>Add Task</h2>
        <TaskAction />
      </div>
      <div class="col-6 col-s-12 todo-list">
        <h2>To Do List</h2>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import TaskAction from './components/TaskAction'
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: { TaskAction, TodoList }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.app {
  border: 1px solid;
}

.task-action {
  padding: 0 30px 30px 30px;
}

.todo-list {
  padding: 0 30px 30px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}

* {
  box-sizing: border-box;
}

.row::after {
  content: '';
  clear: both;
  display: table;
}

[class*='col-'] {
  float: left;
  padding: 15px;
}

[class*='col-s'] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .col-s-1 {
    width: 8.33%;
  }
  .col-s-2 {
    width: 16.66%;
  }
  .col-s-3 {
    width: 25%;
  }
  .col-s-4 {
    width: 33.33%;
  }
  .col-s-5 {
    width: 41.66%;
  }
  .col-s-6 {
    width: 50%;
  }
  .col-s-7 {
    width: 58.33%;
  }
  .col-s-8 {
    width: 66.66%;
  }
  .col-s-9 {
    width: 75%;
  }
  .col-s-10 {
    width: 83.33%;
  }
  .col-s-11 {
    width: 91.66%;
  }
  .col-s-12 {
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .todo-list {
    border-top: 1px solid;
  }
}
@media only screen and (min-width: 768px) {
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
  .task-action {
    border-right: 1px solid;
  }
  .todo-list {
    border-left: 1px solid;
    width: 600px;
  }
}
</style>
