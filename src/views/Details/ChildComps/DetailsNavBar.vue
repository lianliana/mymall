<template>
  <nav-bar class="DetailsNavBar">
      <template v-slot:left>
          <img class="backImg" src="~assets/img/common/back.svg" alt="" @click="BackClick">
      </template>
      <template v-slot:center>
          <div class="titles">
              <div class="itemOfTitles" v-for="(item,index) in titles" :key="index" :class="{active:currentindex===index}" @click="titleClick(index)">{{item}}</div>
          </div> 
      </template>
  </nav-bar>
</template>

<script>
import NavBar from '../../../components/common/NavBar/NavBar.vue'
export default {
    name:"DetailsNavBar",
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentindex:0
        }
    },
    methods:{
        BackClick(){
            this.$router.back()
        },
        titleClick(index){
            this.currentindex=index
        }
    }
}
</script>

<style>
.titles{
    display: flex;
    font-size: 14px;
}
.itemOfTitles{
    flex:1
}
.backImg{
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-right: 10px;
}
.active{
    color: var(--color-high-text);
}
</style>