<template>
    <input :class="classType" :value="value" v-on:input="updateValue($event.target.value)" :type="inputType">
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
  },
  computed: {
    classType() {
      return this.inputType === 'range' ? 'b-input-range' : 'b-input';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@flexbox';
@import '~@scss-variables';

.b-input {
  outline: 0;
  color: $gray;
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
</style>
