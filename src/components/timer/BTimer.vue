<template>
  <mu-paper style="display: inline-block;margin-right: 16px;">
    <mu-menu>
      <mu-menu-item title="menu 1">
        <mu-badge content="12" slot="after" />
      </mu-menu-item>
      <mu-menu-item title="menu 2">
        <mu-badge content="old" primary slot="after" />
      </mu-menu-item>
      <mu-menu-item title="menu 3">
        <mu-badge content="news" secondary slot="after" />
      </mu-menu-item>
    </mu-menu>
  </mu-paper>
</template>

<script>
export default {
  name: 'BTimer',
};
</script>

<style lang="scss" scoped>

</style>
