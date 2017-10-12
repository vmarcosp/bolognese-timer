<template>
  <img class="logo" :src="pathLogo">
</template>

<script>
import logo from '@/assets/images/logo.svg';

export default {
  name: 'BLogo',
  data() {
    return {
      pathLogo: logo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

@media screen and (max-width:$mobile-screen-size) {
  .logo{
    height: 60px;
  }
}
</style>
