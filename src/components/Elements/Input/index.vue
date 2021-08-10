<template>
  <input
    type="text"
    :value="value"
    :required="required"
    :placeholder="!!placeholder ? 'Search...' : 'Add new task...'"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    required: Boolean,
    placeholder: String,
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