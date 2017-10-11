<template>
  <div class="container">
    <!-- <img class="logo" :src="pathLogo"> -->
    <span>Bolognese Timer</span>
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
  text-transform: uppercase;
  padding: 1.5rem 0;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .2);
  color: white;
  text-align: center;
  font-size: 30px;
  .logo {
    height: 50px;
  }
}
</style>
