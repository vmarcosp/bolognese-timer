<template>
  <b-timer :initial-time="initialTime" />
</template>
<script>
import bTimer from '@/components/b-timer';
import { mapState } from 'vuex';

export default {
  name: 'short-break',
  components: {
    bTimer
  },
  computed: mapState({
    initialTime: state => state.ShortBreak.defaultTime
  })
};
</script>
