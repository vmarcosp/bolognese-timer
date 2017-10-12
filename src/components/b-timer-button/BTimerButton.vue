<template>
  <button class="btn" :style="{color:buttonColor}">
    <span :class="`mdi mdi-${icon}`"></span>
    <label class="btn-label">{{label}}</label>
  </button>
</template>

<script>
export default {
  name: 'BTimerButton',
  props: {
    label: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    buttonColor: {
      required: false,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';
.btn {
  cursor: pointer;
  border: 0;
  background: 0;
  color: $gray;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

@media screen and(min-width:$mobile-screen-size) {
  .btn {
    >.btn-label {
      font-size: 25px;
    }
    >.mdi {
      font-size: 35px;
    }
  }
}

@media screen and(max-width:$mobile-screen-size) {
  .btn {
    >.btn-label {
      font-size: 25px;
    }
    >.mdi {
      font-size: 35px;
    }
  }
}
</style>
