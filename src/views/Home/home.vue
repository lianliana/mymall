<template>
  <div class="home">
    <div class="navbar-wrapper">
      <NavBar class="home-nav">
      <template v-slot:center>
       <div>购物街</div>
      </template>
    </NavBar>
    <TabControl :titles="['流行','新款','精选']" @TabControlClick="TabControlClick" ref="TabControl" class="TabControl" v-show="TabControlShow"></TabControl>
    </div>  
    <Scroll ref='scroll' :probeType="3" class="wrapper" @scrollon="contentscroll" :pull-up-load="true" @pullup="pullingup">
      <HomeSwiper :banners="banners.list" @homeSwiperLoad="homeSwiperLoad"></HomeSwiper>
      <home-recommend :recommends="recommends.list"></home-recommend>
      <feature-view></feature-view>
      <TabControl :titles="['流行','新款','精选']" @TabControlClick="TabControlClick" ref="TabControl"></TabControl>
      <GoodList :goods="this.goods[currentType].list"></GoodList>
    </Scroll>
    <back-top @click="BackTop" v-show="isbacktop"></back-top>
    <ul>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
      <li>sss</li>
    </ul>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar/NavBar.vue'
import Scroll from '../../components/common/Scroll/Scroll.vue'
import BackTop from '../../components/common/BackTop/BackTop.vue'


import TabControl from '../../components/context/TabControl'
import GoodList from '../../components/context/GoodList/GoodList.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMutidata,getHomeGoods} from '../../network/home'

import {emitter } from '../../components/context/GoodList/GoodListItem.vue'
export default {
  name:"Home",
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isbacktop:false,
      tabOffserTop:0,
      TabControlShow:false
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  created(){
    this.getHomeMutidata(),
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
  },
  mounted(){
    const myrefresh=this.debounce(this.$refs.scroll.scrollRefresh,500)
    emitter.on('itemImageLoad', () => {
      myrefresh()
    })
  },
  methods:{
    homeSwiperLoad(){
     this.tabOffserTop=this.$refs.TabControl.$el.offsetTop
    },
    debounce(func,delay){
      let timer=null
      return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(() => {
          func.apply(this,args)
        }, delay);

      }
    },
    getHomeMutidata(){
      getHomeMutidata().then(res=>{     
      this.banners=res.data.banner,
      this.recommends=res.data.recommend
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1;
        this.$refs.scroll.scroll.finishPullUp()
      })
     
    },
    TabControlClick(index){
      if(index==0){
        this.currentType='pop'
      }
      else if(index==1){
        this.currentType='new'
      }
      else if(index==2){
        this.currentType='sell'
      }
    },
    BackTop(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    contentscroll(postion){
      this.isbacktop=-postion.y>1000
      if(-postion.y>(this.tabOffserTop-42)){
        this.TabControlShow=true
      }
      else{
        this.TabControlShow=false
      }
    },
    pullingup(){
      console.log("下拉加载更多");
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    }
  }
}
</script>

<style scope>
.wrapper{
height: 100vh;
}
.HomeSwiper{
  padding-top: 44px;
}
.navbar-wrapper{
  position: absolute;
  z-index: 999;
  width: 100%;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  font-size: 19px;
  
}
.TabControl{
  background-color: white;
}



</style>