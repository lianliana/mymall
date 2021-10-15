<template>
  <div id="TabBar">
      <slot></slot> 
  </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>

 #TabBar{
   display: flex;
   position: fixed;
   background-color: #f6f6f6;
   left: 0;
   right: 0;
   bottom: 0;
   
   box-shadow: 0px -1px 2px rgba(100, 100, 100, .2);
 }
 
</style>