<template>
  <div class="app">

    <div class="bar-container">
      <b-bar />
    </div>

    <main class="view-container">
      <router-view/>
    </main>

    <div class="tab-container">
      <b-tab />
    </div>
  </div>
</template>

<script>
import bBar from '@/components/b-bar';
import bTab from '@/components/b-tab';

export default {
  name: 'app',
  components: {
    bBar,
    bTab
  }
};
</script>

<style lang="scss">
@import '~@scss-variables';

body,
html,
button {
  font-family: 'Lato', sans-serif;
  background: $background;
}

html,
body,
.app {
  height: 100%;
}

.app {
  display: flex;
  flex-flow: column wrap;
}

@media screen and (min-width: $mobile-screen-size) {
  .bar-container {
    order: 1;
  }
  .tab-container {
    order: 2;
  }
  .view-container {
    order: 3;
    display: flex;
  }
}

@media screen and (max-width: $mobile-screen-size) {
  .bar-container {
    order: 1;
  }
  .view-container {
    flex-grow: 1;
    order: 2;
    display: flex;
  }
  .tab-container {
    order: 3;
    display: flex;
    align-items: flex-end;
  }
}
</style>
