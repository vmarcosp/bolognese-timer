<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <div class="sidebar-header">
        <h1>{{title}}</h1>
      </div>
      <div class="sidebar-body">
        <BInput v-model="teste" input-type="time" label="Time" />
      </div>
    </div>
  </div>
</template>

<script>
import { BInput } from '@/components/b-input';

export default {
  name: 'BSidebarSettings',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    BInput
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
