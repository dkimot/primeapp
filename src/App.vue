<template>
  <div id="app">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: { SideBar },
}

import SideBar from './components/dashboard/SideBar'
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
