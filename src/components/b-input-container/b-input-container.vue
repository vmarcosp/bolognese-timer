<template>
  <div class="b-input-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'b-input-container'
};
</script>

<style lang="scss" scoped>
@import '~@flexbox';

.b-input-container {
  @extend %flex;
  @extend %column-wrap;
  width: 100%;
  margin: 1rem 0;
}
</style>


