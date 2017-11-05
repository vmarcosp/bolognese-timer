<template>
  <router-link class="tab-link" :to="viewPath" exact>
    <span :class="`mdi mdi-${icon}`"></span>
    <div class="tab-name">{{tabName}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'b-tab-item',
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
  display: flex;
  justify-content: center;
  text-decoration: none;
}

@media screen and(min-width:$mobile-screen-size) {
  .tab-link {
    padding: 1rem;
    color: $gray;
    align-items: center;
    background: $gray-light;
    .tab-name {
      margin-left: 10px;
      font-size: 20px;
    }
    .mdi {
      font-size: 30px;
    }
    &.router-link-active {
      background: $background;
      color: $primary;
    }
  }
}

@media screen and(max-width:$mobile-screen-size) {
  .tab-link {
    align-items: center;
    flex-flow: column wrap;
    padding: 0.3rem;
    color: $gray;
    border: solid 3px $background;
    .tab-name {
      font-size: 14px;
    }
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
