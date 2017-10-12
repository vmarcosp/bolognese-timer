<template>
  <router-link class="tab-link" :to="viewPath" exact>
    <span :class="`mdi mdi-${icon}`"></span>
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
    },
    icon: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';
.tab-link {
  width: 100%;
  background: $background;
}

@media screen and(max-width:$mobile-screen-size) {
  .tab-link {
    padding: .3rem;
    font-size: 16px;
    color: black;
    text-decoration: none;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    color:$gray;
    border:solid 3px $background;  
    .mdi {
      font-size: 26px;
    }
    &.router-link-active {
      color: $primary;
      border-bottom: solid 3px $primary;
    }
  }
}
</style>
