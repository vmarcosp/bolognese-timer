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

@media screen and(min-width:$mobile-screen-size) {
  .container {
    box-shadow: 0 1px 2px rgba(0, 0, 0, .23);
    max-width: $mobile-screen-size;
    margin: 0 auto;
    font-size:100px;
    display: flex;
    align-items: center;
    padding:5rem 1rem;
    box-sizing: border-box;
    justify-content: center;
}
}

@media screen and(max-width:$mobile-screen-size) {
  .container {
    >.timer-value {
      font-size: 80px;
    }
  }
}
</style>
