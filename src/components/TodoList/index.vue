<template>
  <div>
    <div class="row container-fluid">
      <div class="col-100">
        <input type="text" placeholder="Search..." v-model="search" />
      </div>
      <div class="col-100">
        <TodoItem v-for="todo in filteredData" :key="todo.id" :todo="todo" />
      </div>
    </div>
    <div class="row container-fluid"><BulkAction /></div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem'
import BulkAction from '../BulkAction'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  components: { TodoItem, BulkAction },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapGetters(['todos']),
    filteredData() {
      return this.todos.filter(todo => {
        return todo.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    this.getTodos();
  },
  methods: mapActions(['getTodos'])
}
</script>

<style scoped>
</style>