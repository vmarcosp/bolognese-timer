<template>
  <div class="container">
    <img class="logo" :src="pathLogo">
  </div>
</template>

<script>
import logo from '@/assets/images/logo.svg';

export default {
  name: 'BBar',
  data() {
    return {
      pathLogo: logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .2);
  .logo {
    height: 80px;
  }
}
</style>
