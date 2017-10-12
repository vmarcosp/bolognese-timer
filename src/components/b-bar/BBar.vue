<template>
  <div class="container">
    <BLogo/>
  </div>
</template>

<script>
import { BLogo } from '@/components/b-logo';

export default {
  name: 'BBar',
  components: {
    BLogo
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';
.container {
  padding: .5rem 0;
  display: flex;
  box-shadow: 0 1px 2px rgba(0,0,0,.23);
  align-items: center;
  justify-content: center;
  background: $primary;
}
</style>
