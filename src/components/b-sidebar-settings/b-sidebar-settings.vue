<template>
  <div class="sidebar-container">

    <button class="button-close">fechar</button>

    <div class="sidebar">

      <div class="sidebar-header">
        <h2>{{title}}</h2>
      </div>

      <div class="sidebar-body">

        <b-input-container>
          <b-label value="Timer"/>
          <b-input input-type="time" :value="teste" />
        </b-input-container/>

        <b-sound-switcher></b-sound-switcher>

        <b-input-container>
          <b-label value="Sound volume"/>
          <b-input input-type="range" :value="1" />
        </b-input-container/>

        <slot name="custom-input-settings"></slot>

      </div>

      <div class="sidebar-footer">

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
@import '~@flexbox';

.sidebar-container {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  @extend %flex;
  @include justify-content(flex-end);
}

.button-close {
  height: 25px;
}

.sidebar {
  @extend %flex;
  @extend %column-wrap;
  background: white;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
  width: 500px;
  @media screen and(max-width:$mobile-screen-size) {
    width: 80%;
  }
  > .sidebar-header {
    color: $primary;
    padding: 0.2rem 1rem;
    box-sizing: border-box;
    border-bottom: solid 1px $gray-light;
  }
  > .sidebar-body {
    flex-grow: 6;
    padding: 1rem;
    overflow: auto;
  }
  > .sidebar-footer {
    flex-grow: 1;
    padding: 1.5rem 1rem;
    border-top: solid 1px $gray-light;
    max-height: 100px;
  }
}
</style>
