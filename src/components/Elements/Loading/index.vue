<template>
  <div class="wrapper">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 14px;
  text-align: center;
  z-index: 1;
}
.loading {
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border-top-color: rgb(255, 255, 255);
  animation: 1s spin infinite ease-in-out reverse;
}

@keyframes spin {
  to {
    transform: rotate(-360deg);
  }
}
</style>