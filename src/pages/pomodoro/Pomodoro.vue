<template>
  <div>
    <BTimer :initial-time="initialTime" />
    <BSidebarSettings />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { BTimer } from '@/components/b-timer';
import { BSidebarSettings } from '@/components/b-sidebar-settings';

export default {
  name: 'Pomodoro',
  components: {
    BTimer,
    BSidebarSettings
  },
  computed: mapState({
    initialTime: state => state.Pomodoro.defaultTime
  })
};
</script>

<style lang="scss" scoped>

</style>
