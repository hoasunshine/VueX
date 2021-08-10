<template>
  <input
    type="date"
    :min="getCurrentTime()"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
import { getCurrentTime } from '../../../helpers'

export default {
  name: 'Date',
  props: { value: String },
  data() {
    return {
      getCurrentTime,
    }
  }
}
</script>

<style>
input[type='date'] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>