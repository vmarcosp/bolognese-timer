<template>
  <BTimer :initial-time="initialTime" />
</template>
<script>
import { mapState } from 'vuex';
import { BTimer } from '@/components/b-timer';

export default {
  name: 'Pomodoro',
  components: {
    BTimer
  },
  computed: mapState({
    initialTime: state => state.Pomodoro.defaultTime
  })
};
</script>

<style lang="scss" scoped>

</style>
