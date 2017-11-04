<template>
    <input class="b-input" :value="value" v-on:input="updateValue($event.target.value)" :type="inputType">
</template>

<script>
export default {
  name: 'BInput',
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

label {
  color: $gray;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0.5rem;
}
.b-input {
  outline: 0;
  padding: 0.5rem;
  color: $gray;
  font-size: 22px;
  border: solid 2px $gray-light;
}
</style>
