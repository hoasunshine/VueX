<template>
  <div class="submit-btn">
    <button
      :type="type"
      :disabled="loading || disabled"
      :class="{
        [getType(styleType)]: true,
        [getSize(styleType)]: true,
        ['disabled']: loading || disabled
      }"
      @click="onclick"
    >
      <div v-if="loading" class="spin"><Loading /></div>
      {{ title }}
    </button>
  </div>
</template>

<script>
import Loading from '../Loading'
import { SizeButton, TypeButton } from '../../../enums'

export default {
  name: 'Button',
  components: { Loading },
  props: {
    loading: Boolean,
    title: String,
    size: String,
    type: String,
    styleType: String,
    disabled: Boolean,
    onclick: Function
  },
  data() {
    const getSize = size => {
      switch (size) {
        case SizeButton.default:
          return 'default'
        case SizeButton.full:
          return 'full'
        default:
          return ''
      }
    }
    const getType = type => {
      switch (type) {
        case TypeButton.primary:
          return 'bg-primary'
        case TypeButton.success:
          return 'bg-success'
        case TypeButton.danger:
          return 'bg-danger'
        default:
          return 'bg-primary'
      }
    }
    return { getSize, getType }
  }
}
</script>

<style>
button {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
.spin {
  margin-right: 5px;
}
.bg-primary {
  background-color: #2196f3;
}
.bg-success {
  background-color: #0fbd3a;
}
.bg-danger {
  background-color: #f44336;
}
.defaultSize {
  padding: 10px 40px;
}
.fullSize {
  width: 100%;
}
/* button {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.submit-btn {
  margin-top: 20px;
  width: 100%;
} */
</style>