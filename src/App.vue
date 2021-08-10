<template>
  <div id="app">
      <div class="task-action">
        <h2>Add Task</h2>
        <TaskAction />
      </div>
      <div class="todo-list">
        <h2>To Do List</h2>
        <TodoList />
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

* {
  box-sizing: border-box;
}

.col-25 {
  float: left;
  width: 25%;
}

.col-50 {
  float: left;
  width: 50%;
}

.col-75 {
  float: left;
  width: 75%;
}

.col-100 {
  float: left;
  width: 100%;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}

.task-action {
  border: 1px solid;
  padding: 0 30px 30px 30px;
  width: 500px;
}

.todo-list {
  border: 1px solid;
  border-left: none;
  padding: 0 30px 30px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
