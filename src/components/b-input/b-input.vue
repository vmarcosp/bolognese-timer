<template>
    <input class="b-input" :value="value" v-on:input="updateValue($event.target.value)" :type="inputType">
</template>

<script>
export default {
  name: 'b-input',
  props: {
    inputType: {
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

.b-input {
  outline: 0;
  padding: 0.5rem;
  color: $gray;
  font-size: 22px;
  border: solid 2px $gray-light;
}
</style>
