<template>
  <label class="b-label">{{value}}</label>
</template>

<script>
export default {
  name: 'b-label',
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.b-label {
  color: $gray;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 0.5rem;
}
</style>

