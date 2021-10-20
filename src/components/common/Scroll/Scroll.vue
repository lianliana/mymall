<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null,
            message:'hahah'
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            observeDOM:true,
            observeImage:true,
            pullUpLoad:this.pullUpLoad
        })

        if(this.probeType===3||this.probeType===2){

            this.scroll.on('scroll',(postion)=>{
            this.$emit('scrollon',postion)
        })
        }
        
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
            this.$emit('pullup')
        })
        }

    },
    methods:{
        scrollRefresh(){
            this.scroll&&this.scroll.refresh()
        }
    },
    onload(){
        scroll.refresh()
    }
}
</script>

<style scope>
</style>