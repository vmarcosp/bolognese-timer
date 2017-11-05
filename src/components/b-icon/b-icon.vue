<template>
    <span :class="`mdi mdi-${icon}`"></span>
</template>

<script>
export default {
  name: 'b-icon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
