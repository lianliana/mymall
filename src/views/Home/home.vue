<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
       <div>购物街</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners.list"></HomeSwiper>
    <home-recommend :recommends="recommends.list"></home-recommend>
  </div>
</template>

<script>
import NavBar from '../../components/common/NavBar/NavBar.vue'
import {getHomeMutidata} from '../../network/home'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
export default {
  name:"Home",
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created(){
    getHomeMutidata().then(res=>{
      
      this.banners=res.data.banner,
      
      this.recommends=res.data.recommend
    })
  }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
  font-size: 19px;
}
</style>