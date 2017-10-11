<template>
  <mu-paper class="container" :zDepth="2">
    <span class="timer-value">12:00</span>
  </mu-paper>
</template>

<script>
export default {
  name: 'BTimer',
};
</script>

<style lang="scss" scoped>
.container{
  margin: 20px;
  text-align: center;
    >.timer-value{
    font-size:40px;
  }
}
</style>
