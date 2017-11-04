<template>
  <BTimer :initial-time="initialTime" />
</template>
<script>
import BTimer from '@/components/b-timer';
import { mapState } from 'vuex';

export default {
  name: 'ShortBreak',
  components: {
    BTimer
  },
  computed: mapState({
    initialTime: state => state.ShortBreak.defaultTime
  })
};
</script>
