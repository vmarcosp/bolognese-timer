<template>
  <div class="container">
    <span class="timer-value">22:00</span>
  </div>
</template>

<script>
export default {
  name: 'BTimer'
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';
@media screen and(max-width:$mobile-screen-size) {
  .container{
    >.timer-value{
      font-size:80px;
    }
  }
}
</style>
