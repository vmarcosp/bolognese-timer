<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  name: 'BTab'
};
</script>

<style lang="scss" scoped>
.container {
  height: 80px;
  background: white;
}

@media screen and (max-width:600px) {
  .container {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
