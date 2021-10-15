<template>
  <div id="App">
 <router-view></router-view>
     <MainTabBar></MainTabBar>
  </div>
  
</template>

<script>
import MainTabBar from './components/context/mainTabbar.vue'
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
