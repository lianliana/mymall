<template>
  <div class="details">
      <DetailsNavBar></DetailsNavBar>
      <scroll ref="scroll">
        <DetailsSwiper :topImages="topImages"></DetailsSwiper>
        <DetailsGoods :goods="goods"></DetailsGoods>
        <DetailsShopInfo :shop="shop"></DetailsShopInfo>
        <DetailGoodsInfo :detailInfo="detailsInfo" @loadImgEvent="loadImgEventEvent"></DetailGoodsInfo>
        <DetailParams :paramInfo="paramInfo"></DetailParams>
        <DetailComment :comment="commentInfo"></DetailComment>
        <GoodsList :goods="recommends"></GoodsList>
      </scroll>
  </div>
</template>

<script>
import {getDetails,Goods,Shop,GoodsParam,getRecommend} from '../../network/details'


import DetailsNavBar from './ChildComps/DetailsNavBar.vue'
import DetailsSwiper from './ChildComps/DetailsSwiper.vue'
import DetailsGoods from './ChildComps/DetailGoods.vue'
import DetailsShopInfo from './ChildComps/DetailShopInfo.vue'
import DetailGoodsInfo from './ChildComps/DetailGoodsInfo.vue'
import DetailParams from './ChildComps/DetailParams.vue'
import DetailComment from './ChildComps/DetailComment.vue'

import Scroll from '../../components/common/Scroll/Scroll.vue'
import GoodsList from '../../components/context/GoodList/GoodList.vue'


export default {
    name:"Details",
    components:{
        DetailsNavBar,
        DetailsSwiper,
        DetailsGoods,
        DetailsShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParams,
        DetailComment,
        GoodsList
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailsInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[]
        }
    },
    created(){
        this.iid=this.$route.params.iid
        getDetails(this.iid).then(res=>{
            const data=res.result
            this.topImages=data.itemInfo.topImages
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop = new Shop(data.shopInfo);  
            this.detailsInfo=data.detailInfo
            this.paramInfo=new GoodsParam(data.itemParams.info,data,data.itemParams.rule)
            if(data.rate.cRate!==0){
                this.commentInfo=data.rate.list[0]
            }
        })
        getRecommend().then(res =>{
            this.recommends=res.data.list
        })
    },
    methods:{
        loadImgEventEvent(){
            this.$refs.scroll.scrollRefresh()
        }
    }
}
</script>

<style>
.DetailsNavBar{
    width: 100%;
    z-index: 999;
    position: relative;
     background-color: #fff;
}
.details{
    background-color: #fff;
    position: relative;
    z-index: 10;
}
</style>