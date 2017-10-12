<template>
  <div class="app">

    <BBar />

    <main class="view-container">
      <router-view/>
    </main>

    <BTab />

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
  background: $background;
}

html,
body,
.app {
  height: 100%;
}

.app {
  font-family: 'Lato', sans-serif;
}

@media screen and (max-width:$mobile-screen-size) {
  .app {
    display: flex;
    flex-flow: column wrap;
  }
  .view-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.view-container {}
</style>
