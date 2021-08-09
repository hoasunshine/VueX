<template>
  <div class="row bulk-form">
      <div class="col-50 title-text">Bulk Action</div>
      <div class="row col-50">
        <div class="col-50">
          <button class="btn-primary btn-detail">Done</button>
        </div>
        <div class="col-50">
          <button class="btn-danger btn-remove" @click="REMOVE_TODO_CHECKED">
            Remove
          </button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'BulkAction',
    methods: mapMutations(['REMOVE_TODO_CHECKED'])
}
</script>

<style>
.title-text {
    text-align: left;
    padding-left: 15px;
}

.bulk-form {
    padding: 15px;
    background: #ccc;
    line-height: 2;
    font-family: sans-serif;
}
</style>