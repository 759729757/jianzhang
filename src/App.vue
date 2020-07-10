<template>
  <div id="app">
    <transition name="no-mode-translate-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  margin-top: 0;

}
.transition-no{transition:all 0s!important;}
  body{
    margin: 0;font-size: 12px;
  }
  .white-bg{background-color: white;}
  .text-center{
    text-align: center;
  }
  .abs{
    position: absolute;
  }

.no-mode-translate-demo-wrapper {
  position: relative;
  height: 18px;
}
.no-mode-translate-demo-wrapper button {
  position: absolute;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
  transition: all 1s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateX(100%);
}
.no-mode-translate-fade-leave-active {
  transform: translateX(-100%);
}
</style>
