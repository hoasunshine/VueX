<template>
  <div>
    <div
      :class="['row todoItem', todo.completed ? 'completed' : '']"
    >
      <div class="col-50 checkbox-title">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="MARK_COMPLETE(todo.id)"
        />
        <span class="title-item">{{ todo.title }}</span>
      </div>
      <div class="row col-50">
        <div class="col-50">
          <button class="btn-primary btn-detail" @click="showDetail">
            Detail
          </button>
        </div>
        <div class="col-50">
          <button class="btn-danger btn-remove" @click="deleteTodo(todo.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
    <TaskAction :todo="todo" :isUpdate="true" v-if="show" />
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import TaskAction from '../TaskAction'

export default {
  name: 'TodoItem',
  props: ['todo'],
  data() {
    let show = false
    return { show }
  },
  components: { TaskAction },
  methods: {
    ...mapMutations(['MARK_COMPLETE']),
    ...mapActions(['deleteTodo']),
    showDetail() {
      this.show = !this.show
    }
  }
}
</script>

<style>
.todoItem {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 15px;
}

.checkbox-title {
  text-align: left;
  margin-top: 7px;
}

input[type='checkbox'] {
  -ms-transform: scale(2);
  -moz-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.title-item {
  font-weight: 600;
}

.completed {
  background: rgb(199, 218, 243);
}

@media screen and (min-width: 600px){
  .btn-detail {
    float: right;
  }
  .btn-remove {
    float: left;
    margin-left: 10px;
  }
}
</style>