<template>
  <b-timer :initial-time="initialTime" />
</template>
<script>
import { mapState } from 'vuex';
import bTimer from '@/components/b-timer';

export default {
  name: 'long-break',
  components: {
    bTimer
  },
  computed: mapState({
    initialTime: state => state.LongBreak.defaultTime
  })
};
</script>
