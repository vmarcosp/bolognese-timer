<template>
  <div class="container">
    <label>{{label}}</label>
    <input :value="value" v-on:input="updateValue($event.target.value)" :type="inputType">
  </div>
</template>

<script>
export default {
  name: 'BInput',
  props: {
    inputType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-polyfill';
@import '~@scss-variables';
.container {
  @extend %flex;
  @extend %column-wrap;
  width: 100%;
  margin: 1rem 0;
  > label {
    color: $gray;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0.5rem;
  }
  > input {
    outline: 0;
    padding: 0.5rem;
    color: $gray;
    font-size: 22px;
    border: solid 2px $gray-light;
  }
}
</style>
