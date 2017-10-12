<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BTab'
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.container {
  background: $background;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width:$mobile-screen-size) {
  .container {
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .23);
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
