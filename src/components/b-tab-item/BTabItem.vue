<template>
  <router-link class="tab-link" :to="viewPath">
    <span class="mdi mdi-alarm-check"></span>
    <div class="tab-item">{{tabName}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'BTabItem',
  props: {
    viewPath: {
      required: true,
      type: String
    },
    tabName: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';
.tab-link{
  width: 100%;
  background: $background;
}
@media screen and(max-width:$mobile-screen-size) {
  .tab-link{
    padding:.3rem;
    font-size:16px;
    color:black;
    text-decoration: none;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    color:$primary;
    .mdi{
      font-size:22px;
    }
  }
}
</style>
