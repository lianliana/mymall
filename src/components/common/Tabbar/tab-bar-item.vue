<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="itemFinColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path: String,
        itemColor:{
            type:String,
            default:'pink'
        }
    },
    data() {
        return {
           
        }
    },
    methods:{
        itemClick(){
           this.$router.push(this.path)
        }
    },
    computed:{
        isActive(){
            return this.$route.path.includes(this.path)
        },
        itemFinColor(){
            return this.isActive?{color:this.itemColor}:{}
        }
    }
}
</script>

<style>
.tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 16px;
 }
 .tab-bar-item img{
     height: 24px;
     width: 24px;
     vertical-align: middle;
     padding-bottom: 3px;
 }
 .tabbar-item p{
     margin: 0;

 }
 .active{
     color:palevioletred
 }
</style>