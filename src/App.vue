<template>
  <div id="app">
    <router-view/>
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
</style>
