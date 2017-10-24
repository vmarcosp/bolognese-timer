<template>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <h1>Pomodoro Settings</h1>
      </div>
      <div class="modal-body"> 
        <BInput v-model="teste" input-type="time" label="Time" />
        <BInput v-model="teste" input-type="time" label="Time" />
      </div>
    </div>
  </div>
</template>

<script>
import { BInput } from '@/components/b-input';

export default {
  name: 'BSidebarSettings',
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

.modal-container {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}

.modal {
  top: 0;
  right: 0;
  background: white;
  height: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
  position: absolute;
  width: 500px;
  > .modal-header {
    color: $primary;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    border-bottom: solid 1px $gray-light;
  }
  > .modal-body {
    padding: 1.5rem;
  }
}

@media screen and(max-width:$mobile-screen-size) {
  .modal {
    width: 80%;
  }
}
</style>
