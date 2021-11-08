<template>
    <div class="DetailsSwiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render >      
        <van-swipe-item v-for="(item,index) in topImages" :key="index" >
                <div class="imgWrapper">
                    <img :src="item" >
                </div>
        </van-swipe-item>
    </van-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {  
    name:"DetailsSwiper",
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            
        }
    },
    components:{
       'van-swipe': Swipe,
       'van-swipe-item': SwipeItem
    },
    methods:{
       
    }
}
</script>

<style>
.van-swipe {
    color: #fff;
    font-size: 20px;
    background-color: white;
  }
.van-swipe__track{
    display: flex;
}
.van-swipe-item{
     width: 100%;
}
.DetailsSwiper{
    height: 350px;
    overflow: hidden;
}
</style>