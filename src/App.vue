<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-50"><AddTask /></div>
        <div class="col-50"><TodoList /></div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: { AddTask, TodoList },
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
  content: "";
  display: table;
  clear: both;
}

.container-fluid {
  border-radius: 5px;
  /* background-color: #f2f2f2; */
  padding: 20px;
}

.container {
  min-width: 16rem;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 600px) {
  .col-50 {
    width: 100%;
    margin-top: 0;
  }
}
</style>
