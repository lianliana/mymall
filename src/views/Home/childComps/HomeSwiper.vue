<template>
    <div class="HomeSwiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>      
        <van-swipe-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image">
            </a>
        </van-swipe-item>
    </van-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
       'van-swipe': Swipe,
       'van-swipe-item': SwipeItem
    }
}
</script>

<style>
.van-swipe {
    color: #fff;
    font-size: 20px;
    
    line-height: 150px;
    text-align: center;
    background-color: white;
  }
.van-swipe__track{
    height: 195px;
    display: flex;
}
.van-swipe-item{
     width: 100%;
     height: 195px;
}
img{
    width: 100%;
}
</style>