<template>
  <div class="bulk-form">
    <div class="title-text">Bulk Action:</div>
    <div class="actions-btn">
      <div class="done-btn">
        <Button
          :type="'button'"
          :styleType="TypeButton.primary"
          :size="SizeButton.default"
          :title="'Done'"
          :onclick="CHECK_ALL_TODO"
        />
      </div>
      <div class="remove-btn">
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
import { SizeButton, TypeButton } from '../../enums'

export default {
  name: 'BulkAction',
  components: { Button },
  data() {
    return { SizeButton, TypeButton }
  },
  methods: mapMutations(['CHECK_ALL_TODO', 'REMOVE_TODO_CHECKED'])
}
</script>

<style>
.title-text {
  text-align: left;
  padding-left: 15px;
}

.actions-btn {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.done-btn {
  margin-right: 10px;
}

.bulk-form {
  display: flex;
  padding: 0 10px;
  border-top: 1px solid;
  background-color: rgb(190, 190, 190);
  justify-content: space-between;
  align-items: center;
}
</style>