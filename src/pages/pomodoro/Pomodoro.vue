<template>
  <div>
    <b-timer :initial-time="initialTime" />
    <!-- <b-sidebar-settings title="Pomodoro settings">
      <span slot="custom-input-settings">Teste</span>
    </b-sidebar-settings> -->
  </div>
</template>
<script>
import { mapState } from 'vuex';
import bTimer from '@/components/b-timer';
import bSidebarSettings from '@/components/b-sidebar-settings';

export default {
  name: 'Pomodoro',
  components: {
    bTimer,
    bSidebarSettings
  },
  computed: mapState({
    initialTime: state => state.Pomodoro.defaultTime
  })
};
</script>

<style lang="scss" scoped>

</style>
