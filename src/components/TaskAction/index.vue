<template>
  <form @submit="onSubmit">
    <div class="input-type">
      <Input v-model="currentVal.title" :required="true" />
    </div>
    <div class="title">
      <label>Description</label>
    </div>
    <div class="input-type">
      <Textarea v-model="currentVal.description" />
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

    <Button
      :type="'submit'"
      :styleType="TypeButton.success"
      :size="SizeButton.full"
      :title="isUpdate ? 'Update' : 'Add'"
      :loading="loading"
      :onclick="() => {}"
    />
  </form>
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
  components: { Input, Textarea, Date, Select, Button },
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
      loading: false,
      TypeButton,
      SizeButton
    }
  },
  methods: {
    ...mapActions(['addTodo', 'updateTodo']),
    resetForm() {
      this.currentVal = {
        id: '',
        title: '',
        description: '',
        date: getCurrentTime(),
        piority: 'nomal'
      }
    },
    async onSubmit(event) {
      event.preventDefault()
      this.loading = true
      if (this.isUpdate) {
        await this.updateTodo(this.currentVal).finally(() => {
          this.loading = false
        })
      } else {
        await this.addTodo({
          ...this.currentVal,
          id: uuidv4(),
          completed: false
        })
          .then(() => {
            this.resetForm()
          })
          .finally(() => {
            this.loading = false
          })
      }
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
  font-weight: 300;
}

.input-type {
  display: flex;
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
    margin-right: 30px;
  }
}
</style>