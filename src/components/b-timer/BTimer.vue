<template>
  <div class="container">
    <div class="controls">
      <BTimerButton @click.native="toggleTimer()" label="Play" button-color="#54acef" :icon="stopped ? 'play-circle' : 'pause-circle' " />
      <BTimerButton label="Reset" button-color="#ffd34e" icon="stop-circle" />
    </div>
    <span class="timer-value">{{time}}</span>
  </div>
</template>

<script>
import { BTimerButton } from '@/components/b-timer-button';
import moment from 'moment';

export default {
  name: 'BTimer',
  components: {
    BTimerButton
  },
  data() {
    return {
      time: '00:10',
      primitiveTime: moment('00:10', 'mm:ss'),
      timerInterval: null,
      stopped: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.timerInterval = setInterval(() => {
        this.decrementTime();
      }, 1000);
    },
    stopTimer() {
      window.clearInterval(this.timerInterval);
    },
    toggleTimer() {
      if (this.stopped) this.init();
      else this.stopTimer();

      this.stopped = !this.stopped;
    },
    decrementTime() {
      if (this.finishedTimer()) {
        this.notify();
      }
      this.primitiveTime.add(-1, 'seconds');
      this.time = this.primitiveTime.format('mm:ss');
    },
    finishedTimer() {
      return this.time === '00:00';
    },
    notify() {
      this.stopTimer();
      // TODO:Notify parent component
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.container {
  display: flex;
  >.timer-value {
    display: flex;
    color: $primary;
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
