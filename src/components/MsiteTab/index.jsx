<template>
  <div class="msite_tab_container">
    <!-- 轮播图 -->
    <Swiper />
    <!-- 主体区域 -->
    <div class="tab-main">
      <!-- 主体头部区域 -->
      <div class="main-header">
        <span>抑菌防螨</span>
        <span>抑菌防螨，健康居家</span>
      </div>
      <!-- 主体内容区域 -->
      <div class="main-content">
        <ul class="content-list"
            v-if="findNavItemData">
          <li class="content-item"
              v-for="(item,index) in findNavItemData.subCateList"
              :key="index">
            <img :src="item.wapBannerUrl"
                 alt="">
            <span>{{item.frontName}}</span>
            <p>{{item.frontDesc}}</p>
            <span class="item-price">￥45</span>
            <span class="item-sale">满99减10</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MsiteTab',
  computed: {
    ...mapState({
      nav: state => state.msite.nav
    }),
    findNavItemData () {
      const id = +this.$route.query.tabId
      let index = 0
      if (id) {
        index = this.nav.findIndex(item => item.id === id)
      }
      this.$bus.$emit('activeIndex', index)
      return this.nav[index]
    }

  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.msite_tab_container
  padding 85px 0 85px 0
  .tab-main
    width 100%
    background-color #fff
    .main-header
      display flex
      flex-direction column
      justify-content center
      width 100%
      height 60px
      box-sizing border-box
      text-align center
      span
        font-size 14px
        &:last-child
          font-size 12px
          color #999
          padding-top 5px
    .main-content
      width 100%
      .content-list
        display flex
        flex-wrap wrap
        width 97%
        margin 0 auto
        .content-item
          display flex
          flex-direction column
          width 49%
          box-sizing border-box
          margin-bottom 20px
          &:nth-child(2n)
            margin-left 5px
          img
            width 100%
            height 172px
            border-radius 5px
          span
            display inline-block
            overflow hidden
            &:nth-child(2)
              width 100%
              background-color #F1ECE2
              color #9F8A60
              font-size 12px
              white-space nowrap
              padding 5px 0 5px 5px
              text-overflow ellipsis
            &:nth-child(4)
              color #DD1A21
              font-size 16px
            &:nth-child(5)
              transform scale(0.8)
              width 70px
              text-align center
              border-radius 10px
              border 1px solid #DD1A21
              background-color #fff
              color #DD1A21
              font-size 12px
              margin-left -10px
          p
            width 100%
            font-size 13px
            margin-left 5px
</style>