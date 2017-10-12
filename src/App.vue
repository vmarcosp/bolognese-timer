<template>
  <div class="app">
    <BBar />
    <BTab />
    <main class="view-container">
      <router-view/>
    </main>
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

.app {
  font-family: 'Lato', sans-serif;
}
</style>
