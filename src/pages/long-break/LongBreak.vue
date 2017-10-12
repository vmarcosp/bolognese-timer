<template>
  <BTimer :initial-time="initialTime" />
</template>
<script>
import { mapState } from 'vuex';
import { BTimer } from '@/components/b-timer';

export default {
  name: 'LongBreak',
  components: {
    BTimer
  },
  computed: mapState({
    initialTime: state => state.LongBreak.defaultTime
  })
};
</script>