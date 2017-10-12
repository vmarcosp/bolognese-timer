<template>
  <div class="app">
    <BBar />
    <BTab>
      <BTabItem :view-path="'/'" :tab-name="'Pomodoro'" />
      <BTabItem :view-path="'/'" :tab-name="'Long break'" />
      <BTabItem :view-path="'/'" :tab-name="'Short break'" />
    </BTab>
    <main class="view-container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import { BBar } from '@/components/b-bar';
import { BTab } from '@/components/b-tab';
import { BTabItem } from '@/components/b-tab-item';

export default {
  name: 'app',
  components: {
    BBar,
    BTab,
    BTabItem
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
