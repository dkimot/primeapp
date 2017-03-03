<template>
  <div id="layout">
    <side-bar id="menu"></side-bar>
    <div id="main">
      <router-view id="main"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: 'app',
  components: { SideBar }
}
</script>

<style>
#layout {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: block;
}

#main {
  margin-top: -50px;
}
</style>
