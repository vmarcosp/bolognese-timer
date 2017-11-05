<template>
  <div class="container">
    <b-tab-item view-path="/" icon="alarm-plus" tab-name="Pomodoro" />
    <b-tab-item view-path="/short-break" icon="alarm-off" tab-name="Short break" />
    <b-tab-item view-path="/long-break" icon="alarm-snooze" tab-name="Long break" />
  </div>
</template>

<script>
import bTabItem from '@/components/b-tab-item';
export default {
  name: 'b-tab',
  components: {
    bTabItem
  }
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

@media screen and(min-width:$mobile-screen-size) {
  .container {
    margin-top: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
    max-width: $mobile-screen-size;
    margin: 2rem auto;
  }
}

@media screen and (max-width: $mobile-screen-size) {
  .container {
    width: 100%;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.23); // position: fixed;
    // bottom: 0;
    // left: 0;
  }
}
</style>
