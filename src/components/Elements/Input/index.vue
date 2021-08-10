<template>
  <input
    type="text"
    :required="required"
    :placeholder="!!type ? 'Search...' : 'Add new task...'"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    required: Boolean,
    type: String,
    value: String
  }
}
</script>

<style>
input[type='text'] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>