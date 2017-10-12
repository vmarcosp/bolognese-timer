<template>
  <div class="app">

    <div class="bar-container">
      <BBar />
    </div>

    <main class="view-container">
      <router-view/>
    </main>

    <div class="tab-container">
      <BTab />
    </div>
  </div>
</template>

<script>
import { BBar } from '@/components/b-bar';
import { BTab } from '@/components/b-tab';

export default {
  name: 'app',
  components: {
    BBar,
    BTab
  }
};
</script>

<style lang="scss">
@import '~@scss-variables';

body {
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

@media screen and (min-width:$mobile-screen-size) {
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

@media screen and (max-width:$mobile-screen-size) {
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
