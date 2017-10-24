<template>
  <div class="modal-container">
    <div class="modal">
      <div class="modal-header">
        <h1>Pomodoro Settings</h1>
      </div>
      <div class="modal-body">
        <input type="time" name="" id="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BSidebarSettings'
};
</script>

<style lang="scss" scoped>
@import '~@scss-variables';

.modal-container{
  position: fixed;
  top:0;
  background: rgba(0,0,0,.5);
  left: 0;
  height: 100%;
  width: 100%;
}

.modal{
  top:0;
  right: 0;
  background: white;
  height: 100%;
  position: absolute;
  width:500px;
  >.modal-header{
    color:$gray;
    padding:.5rem 1rem;
    box-sizing: border-box;
    border-bottom: solid 1px $gray;
  }
}

</style>
