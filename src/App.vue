<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~@scss-variables';

body {
  background: $red;
}

.app {
  font-family: 'Montserrat', sans-serif;
}
</style>
