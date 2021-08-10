<template>
  <div class="container-fluid">
    <form @submit="onSubmit">
      <div class="row">
        <div class="col-100">
          <Input v-model="currentVal.title" :required="true" />
        </div>
      </div>
      <div class="row">
        <div class="col-100 title">
          <label>Description</label>
        </div>
        <div class="col-100">
          <Textarea v-model="currentVal.description" />
        </div>
      </div>
      <div class="row">
        <div class="col-50 title">
          <label>Due Date</label>
          <div class="date-input">
            <Date v-model="currentVal.date" />
          </div>
        </div>
        <div class="col-50 title">
          <label>Piority</label>
          <div class="select-input">
            <Select v-model="currentVal.piority" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-100">
          <Button
          :type="TypeButton.success"
          :size="SizeButton.full"
          :title="isUpdate ? 'Update' : 'Add'"
          :loading="loading"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { getCurrentTime } from '../../helpers'

import Input from '../Elements/Input'
import Textarea from '../Elements/Textarea'
import Date from '../Elements/Date'
import Select from '../Elements/Select'
import Button from '../Elements/Button'
import { TypeButton, SizeButton } from '../../enums'

export default {
  name: 'TaskAction',
  components: { Input, Textarea, Date, Select, Button},
  props: {
    isUpdate: Boolean,
    todo: Object
  },
  data() {
    const defaultVal = {
      title: '',
      description: '',
      date: getCurrentTime(),
      piority: 'nomal'
    }
    const currentVal = this.$props.isUpdate ? this.$props.todo : defaultVal
    return {
      defaultVal,
      currentVal,
      loading,
      TypeButton,
      SizeButton
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    resetForm() {
      this.currentVal = this.defaultVal
    },
    onSubmit(event) {
      this.loading = true; 
      event.preventDefault()
      this.addTodo(...this.currentVal, { id: uuidv4(), completed: false })
      this.resetForm()
    }
  }
}
</script>

<style>
label {
  padding: 20px 12px 6px 0;
  display: inline-block;
}

.title {
  text-align: left;
  font-weight: 600;
}

input[type='text'],
input[type='date'],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

button {
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-success {
  background-color: #04aa6d;
}

.btn-danger {
  background-color: rgb(158, 27, 27);
}

.btn-primary {
  background-color: rgb(75, 148, 207);
}

.btn-success:hover {
  background-color: #45a049;
}

@media screen and (min-width: 600px) {
  .date-input {
    margin-right: 10px;
  }
}
</style>