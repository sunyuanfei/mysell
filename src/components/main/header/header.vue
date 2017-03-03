<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">百米贩</span>
                </div>
                <div class="description">主营:网络科技服务</div>
                <div class="support">
                    <span class="icon"></span>
                    <span class="text">首单减10元优惠</span>
                </div>
            </div>
            <div class="support-count" @click="showDetail">
                <span class="count">5个</span>
                <i class="icon-spinner9"></i>
            </div>
        </div>
        <div class="bulletin-wrapper"></div>
        <div class="background"></div>
        <div v-show="detailShow" class="detail">
            <div class="detail-wrapper">
                <div class="detail-main clearfix">
                    <h1 class="name">旺马财富</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="4.5"></star>
                    </div>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul class="supports">
                        <li>
                            <span></span>
                            <span>Hello</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家供稿</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin-wrapper">
                        <div>
                            “行高“指一行文子的高度，具体来说是指两行文子间基线间的距离。
                            在CSS，line-height被用来控制行与行之间的垂直距离。line-height
                            属性会影响行框的布局。在应用到一个块级元素时，
                            它定义了该元素中基线之间的最小距离而不是最大距离。
                            所有浏览器都支持 line-height 属性。
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-close" @click="hideDetail">
                <i class="icon-home2"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import Star from '../public/star.vue'
    const ERR_OK = '200'
    export default {
        data () {
            return {
                'carouse': {},
                'api': '',
                'detailShow': false
            }
        },
        created () {
            this.api = this.$store.state.api
            this.$http.get('http://tm.hw.sunday.so/api/carousel/list').then(response => {
                if (response.data.status === ERR_OK) {
                    this.carouse = response.data.data[0]
                }
            }, response => {

            })
        },
        components: {
            star: Star
        },
        methods: {
            showDetail () {
                this.detailShow = true
            },
            hideDetail () {
                this.detailShow = false
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/minxin.styl"

    .header
      color #ffffff
      overflow hidden
      position relative
      background-color rgba(7, 17, 27, 0.2)
      .content-wrapper
        position relative
        padding 24px 12px 18px 24px
        font-size 0
        .avatar
          vertical-align top
          display inline-block
          img
            border-radius 2px
        .content
          display inline-block
          margin-left 16px
          font-size 14px
          .title
            margin 2px 0 8px 0
            .brand
              vertical-align top
              display inline-block
              width 30px
              height 18px
              background-size 30px 18px
              background-repeat no-repeat
            .name
              margin-left 6px
              font-size 16px
              line-height 18px
              font-weight bold
          .description
             font-size 12px
             line-height 17px
             margin-bottom 10px
          .support
             .icon
               display inline-block
               width 12px
               height 12px
               background-size 12px 12px
               background-repeat no-repeat
               margin-right 4px
             .text
               line-height 12px
               font-size 10px
        .support-count
          position absolute
          right 12px
          bottom 18px
          padding 0 8px 0 0
          height 24px
          line-height 24px
          border-radius 14px
          background-color rgba(0, 0, 0, 0.2)
          text-align center
          .count
            font-size 10px
          .icon-spinner9
            margin-left 2px
            line-height 24px
            font-size 10px
      .background
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        z-index -1
        filter blur(10px)
        background-image url('../header/demo.jpg')
      .detail
        position fixed
        width 100%
        height 100%
        overflow auto
        z-index 100
        background rgba(7, 17, 27, 0.8)
        top 0
        left 0
        .detail-wrapper
          min-height 100%
          width 100%
          .detail-main
            margin-top 64px
            padding-bottom 64px
            width 100%
            .name
               font-size 16px
               line-height 16px
               font-weight 700
               text-align center
             .star-wrapper
               text-align center
               margin 14px auto 8px auto
            .title
              display flex
              width 80%
              margin 30px auto 30px auto
              .line
                flex 1
                position relative
                top -6px
                border-bottom 1px solid rgba(255, 255, 255, 0.2)
              .text
                padding 0 12px
                font-size 12px
                font-weight 700
            .supports
               width 80%
               margin 10px auto 10px auto
            .bulletin-wrapper
               width 80%
               margin 0 auto 0 auto
               font-size 16px
               color #fff
        .detail-close
            position relative
            width 32px
            height 32px
            margin -64px auto 0 auto
            clear both
            font-size 32px
</style>
