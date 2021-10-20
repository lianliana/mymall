<template>
  <div class="TabControl">
      <div v-for="(item,index) in titles" class="TabControlItem" :key="index" :class="{active:currentindex===index}" @click="itemClick(index)">   
          <div class="TabSpan"><span >{{item}}</span></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    data(){
        return{
            currentindex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentindex=index;
            this.$emit('TabControlClick',index)
        }
    }
}
</script>

<style>
.TabControl{
    display: flex;
    text-align: center;    
    z-index: 13;
}
.TabControlItem{
     flex: 1;
     height: 44px;
}
.TabSpan{
    padding-top: 10px;
    vertical-align: middle;
}
.active span{
    padding:6px;
    border-bottom: 2px solid red 
}
</style>