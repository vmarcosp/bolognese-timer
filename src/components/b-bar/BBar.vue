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
.container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: .5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .2);
}
</style>
