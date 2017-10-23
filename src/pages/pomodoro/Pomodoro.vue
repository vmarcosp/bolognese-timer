<template>
  <!-- <div> -->
    <BTimer :initial-time="initialTime" />
    <!-- <BModalSettings /> -->
  <!-- </div> -->
</template>
<script>
import { mapState } from 'vuex';
import { BTimer } from '@/components/b-timer';
import { BModalSettings } from '@/components/b-modal-settings';

export default {
  name: 'Pomodoro',
  components: {
    BTimer,
    BModalSettings
  },
  computed: mapState({
    initialTime: state => state.Pomodoro.defaultTime
  })
};
</script>

<style lang="scss" scoped>

</style>
