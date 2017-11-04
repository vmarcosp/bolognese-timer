<template>
  <div class="b-input-container">
    teste
  </div>
</template>

<script>
export default {
  name: 'b-input-container'
};
</script>

<style lang="scss" scoped>
@import '~@scss-polyfill';
@import '~@scss-variables';

.b-input-container {
  @extend %flex;
  @extend %column-wrap;
  width: 100%;
  margin: 1rem 0;
}
</style>


