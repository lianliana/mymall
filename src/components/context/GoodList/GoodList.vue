<template>
  <div class="GoodList">
      <good-list-item v-for="(item,index) in goods" :GoodsItem="item" :key="index"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
    name:"GoodList",
    components:{
        GoodListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
    }
}
</script>

<style>
.GoodList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
}
</style>