<template>
  <textarea
    :value="value"
    cols="30"
    rows="5"
    @input="$emit('input', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: 'Textarea',
  props: { value: String }
}
</script>

<style>
/* textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
} */
</style>