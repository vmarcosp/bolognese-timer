<template>
<div class="b-sound-switcher">
  <b-input-container>
    <b-label value="Select sound"></b-label>
    <select class="sound-select">
      <option value="">Teste</option>
      <option value="">Teste</option>
      <option value="">Teste</option>
    </select>
  </b-input-container>
</div>
</template>

<script>
import bInputContainer from '@/components/b-input-container';
import bLabel from '@/components/b-label';

export default {
  name: 'BSoundSwitcher',
  components: {
    bInputContainer,
    bLabel
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.b-sound-switcher {
  .sound-select {
    outline: 0;
    padding: 0.5rem;
    color: $gray;
    font-size: 22px;
    border: solid 2px $gray-light;
    @media screen and(min-width:$mobile-screen-size) {
      font-size: 22px;
      padding: 0.5rem;
    }
    @media screen and(max-width:$mobile-screen-size) {
      font-size: 18px;
      padding: 0.3rem;
    }
  }
}
</style>
