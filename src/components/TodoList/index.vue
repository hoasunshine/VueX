<template>
  <div class="todo-form">
    <div class="input-type">
      <input type="text" placeholder="Search..." v-model="search" />
    </div>
    <div >
      <TodoItem v-for="todo in [...filteredData]" :key="todo.id" :todo="{...todo}" />
    </div>
    <div class="bulk-actions"><BulkAction v-if="isBulkActions" /></div>
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
    ...mapGetters(['todos', 'isBulkActions']),
    filteredData() {
      return this.todos.filter(todo => {
        return todo.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    this.getTodos()
  },
  methods: mapActions(['getTodos'])
}
</script>

<style>
.todo-form {
  margin-bottom: 100px;
}

.bulk-actions {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>