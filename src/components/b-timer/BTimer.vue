<template>
  <div class="container">
    <div class="controls">
      <BTimerButton label="Stop" icon="pause-circle" />
      <BTimerButton label="Play" icon="play-circle" />
      <BTimerButton label="Reset" icon="stop-circle" />
    </div>
    <span class="timer-value">22:00</span>
  </div>
</template>

<script>
import { BTimerButton } from '@/components/b-timer-button';

export default {
  name: 'BTimer',
  components: {
    BTimerButton
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.container {
  display: flex;
  >.timer-value {
    display: flex;
    justify-content: center;
  }
  >.controls {
    display: flex;
    justify-content: space-around;
  }
}

@media screen and(min-width:$mobile-screen-size) {
  .container {
    box-shadow: 0 1px 2px rgba(0, 0, 0, .23);
    max-width: $mobile-screen-size;
    margin: 0 auto;
    height: 400px;
    font-size: 100px;
    align-items: center;
    flex-flow: column wrap;
    box-sizing: border-box;
    justify-content: center;
    padding: 1rem 0;
    box-sizing: border-box;
    >.timer-value {
      order: 1;
      align-items: center;
      flex-grow: 1;
      width: 100%;
    }
    >.controls {
      order: 2;
      width: 100%;
    }
  }
}

@media screen and(max-width:$mobile-screen-size) {
  .container {
    width: 100%;
    flex-flow: column wrap;
    >.timer-value {
      order: 2;
      font-size: 80px;
      margin: 7rem 0;
    }
    >.controls {
      order: 1;
    }
  }
}
</style>
