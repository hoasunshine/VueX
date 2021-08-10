<template>
  <div class="row bulk-form">
    <div class="col-50 title-text">Bulk Action</div>
    <div class="row col-50">
      <div class="col-50">
        <Button
          :type="'button'"
          :styleType="TypeButton.primary"
          :size="SizeButton.default"
          :title="'Done'"
          :onclick="CHECK_ALL_TODO"
        />
      </div>
      <div class="col-50">
        <Button
          :type="'button'"
          :styleType="TypeButton.danger"
          :size="SizeButton.default"
          :title="'Remove'"
          :onclick="REMOVE_TODO_CHECKED"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Button from '../Elements/Button'
import {SizeButton, TypeButton} from '../../enums'

export default {
  name: 'BulkAction',
  components: { Button },
  data() {
    return { SizeButton, TypeButton}
  },
  methods: mapMutations(['CHECK_ALL_TODO', 'REMOVE_TODO_CHECKED'])
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