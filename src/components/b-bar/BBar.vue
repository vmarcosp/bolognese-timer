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
  padding: .1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary;
}
</style>
