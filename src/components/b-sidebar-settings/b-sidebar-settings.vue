<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <div class="sidebar-header">
        <h1>{{title}}</h1>
      </div>
      <div class="sidebar-body">
        <b-input-container>
          <b-label value="Timer"/>
          <b-input input-type="time" :value="teste" />
        </b-input-container/>
      </div>
    </div>
  </div>
</template>

<script>
import bInput from '@/components/b-input';
import bLabel from '@/components/b-label';
import bSoundSwitcher from '@/components/b-sound-switcher';
import bInputContainer from '@/components/b-input-container';

export default {
  name: 'b-sidebar-settings',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    bInput,
    bSoundSwitcher,
    bLabel,
    bInputContainer
  },
  data() {
    return {
      teste: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.sidebar-container {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}

.sidebar {
  top: 0;
  right: 0;
  background: white;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
  position: absolute;
  width: 500px;
  @media screen and(max-width:$mobile-screen-size) {
    width: 80%;
  }
  > .sidebar-header {
    color: $primary;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-bottom: solid 1px $gray-light;
  }
  > .sidebar-body {
    padding: 1.5rem;
  }
}
</style>
