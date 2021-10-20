<template>
    <div class="HomeRecommend">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.HomeRecommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    border-bottom: #eee solid 10px;
}
.recommend-item{
    padding: 18px 0 15px 0;
    display: block;
    flex: 1;
}
.recommend-item a img{
    width: 75px;
    height: 75px;
}
</style>