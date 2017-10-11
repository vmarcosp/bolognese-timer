<template>
  <div class="app">
    <BBar/>
    <main class="view-container">
      <router-view/>
    </main>
  </div>
</template>

<script>
import BBar from '@/components/b-bar/BBar';

export default {
  name: 'app',
  components: {
    BBar,
  },
};
</script>

<style lang="scss">
@import '~@scss-variables';

body {
  background: $red;
}

.app {
  font-family: 'Pacifico', cursive;
}
</style>
