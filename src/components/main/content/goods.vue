<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menu">
            <ul>
                <li class="menu-item" @click="selectMenu(1)">
                    <span class="text border-1px">
                        <span class="icon"></span>
                        热销
                    </span>
                </li>
                <li class="menu-item" @click="selectMenu(2)">
                    <span class="text">
                        <span class="icon"></span>
                        盖浇饭
                    </span>
                </li>
                <li class="menu-item" @click="selectMenu(3)">
                    <span class="text">
                        <span class="icon"></span>
                        商家推荐
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foods">
            <ul>
                <li class="foods-list food-list-hook">
                    <h1 class="title">包子稀饭</h1>
                    <ul>
                        <li class="food-item border-1px">
                            <div class="icon">
                                <img src="">
                            </div>
                            <div class="content">
                                <h2 class="name">炒饭</h2>
                                <p class="desc">好吃会常来光顾</p>
                                <div class="extra">
                                    <span>月售</span>
                                    <span>好评率</span>
                                </div>
                                <div class="price">
                                    <span>¥价格</span>
                                    <span>降价</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="foods-list food-list-hook">
                    <h1 class="title">包子稀饭</h1>
                    <ul>
                        <li class="food-item border-1px">
                            <div class="icon">
                                <img src="">
                            </div>
                            <div class="content">
                                <h2 class="name">炒饭</h2>
                                <p class="desc">好吃会常来光顾</p>
                                <div class="extra">
                                    <span>月售</span>
                                    <span>好评率</span>
                                </div>
                                <div class="price">
                                    <span>¥价格</span>
                                    <span>降价</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="foods-list food-list-hook">
                    <h1 class="title">包子稀饭</h1>
                    <ul>
                        <li class="food-item border-1px">
                            <div class="icon">
                                <img src="">
                            </div>
                            <div class="content">
                                <h2 class="name">炒饭</h2>
                                <p class="desc">好吃会常来光顾</p>
                                <div class="extra">
                                    <span>月售</span>
                                    <span>好评率</span>
                                </div>
                                <div class="price">
                                    <span>¥价格</span>
                                    <span>降价</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="foods-list food-list-hook">
                    <h1 class="title">包子稀饭</h1>
                    <ul>
                        <li class="food-item border-1px">
                            <div class="icon">
                                <img src="">
                            </div>
                            <div class="content">
                                <h2 class="name">炒饭</h2>
                                <p class="desc">好吃会常来光顾</p>
                                <div class="extra">
                                    <span>月售</span>
                                    <span>好评率</span>
                                </div>
                                <div class="price">
                                    <span>¥价格</span>
                                    <span>降价</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="foods-list food-list-hook">
                    <h1 class="title">包子稀饭</h1>
                    <ul>
                        <li class="food-item border-1px">
                            <div class="icon">
                                <img src="">
                            </div>
                            <div class="content">
                                <h2 class="name">炒饭</h2>
                                <p class="desc">好吃会常来光顾</p>
                                <div class="extra">
                                    <span>月售</span>
                                    <span>好评率</span>
                                </div>
                                <div class="price">
                                    <span>¥价格</span>
                                    <span>降价</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <shopCart></shopCart>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'
    import ShopCart from '../cart/ShopCart.vue'
    export default {
        data () {
            return {
                listHeight: [],
                scrollY: ''
            }
        },
        created () {
            this.$nextTick(function () {
                this._initBscroll()
                this._calculateHe()
            })
        },
        components: {
            shopCart: ShopCart
        },
        computed: {
            currentIndex () {
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i]
                    let height2 = this.listHeight[i + 1]
                    if (!height2 && this.scrollY > height1 && this.scrollY < height2) {
                        return i
                    }
                }
                return 0
            }
        },
        methods: {
            selectMenu (index) {
                let foodlist = this.$refs.foods.getElementsByClassName('food-list-hook')
                let el = foodlist[index]
                this.foods_wrapper.scrollToElement(el, 300)
            },
            _initBscroll () {
                this.menu_wrapper = new BScroll(this.$refs.menu, {
                    click: true
                })
                this.foods_wrapper = new BScroll(this.$refs.foods, {
                    probeType: 3
                })
                this.foods_wrapper.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.random(pos.y))
                })
            },
            _calculateHe () {
                let foodlist = this.$refs.foods.getElementsByClassName('food-list-hook')
                let height = 0
                this.listHeight.push(height)
                for (let i = 0; i < foodlist.length; i++) {
                    let item = foodlist[i]
                    height += item.clientHeight
                    this.listHeight.push(height)
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/minxin.styl"
    .goods
      display flex
      width 100%
      position absolute
      top 151px
      bottom 46px
      overflow hidden
      .menu-wrapper
        flex 0 0 80px
        width 80px
        background-color #f3f5f7
        .menu-item
          padding 0 12px
          display table
          height 54px
          width 56px
          line-height 14px
          &.current
             background-color #ffffff
             z-index 10
             font-weight 700
             margin-top -1px
             position relative
             .text
               border-none()
          .text
            display table-cell
            width 56px
            font-size 12px
            vertical-align middle
            border-1px(rgba(7, 17, 27, 0.1))
      .foods-wrapper
        flex 1
        .title
           padding-left 2px
           height 26px
           line-height 26px
           border-left: 2px solid #7e8c8d
           font-size 12px
           color rgb(147, 153, 159)
           background-color #f3f5f7
        .food-item
           display flex
           margin 18px
           padding-bottom 18px
           border-1px(rgba(7, 17, 27, 0.1))
           &:last-child
              border-no()
              margin-bottom 0
           .icon
             width 57px
             height 57px
             flex 0 0 57px
             margin-right 10px
           .content
             flex 1
             .name
               font-size 14px
               margin 2px 14px 8px 14px
               color rgb(7, 17, 27)
             .desc,.extra
               font-size 10px
               line-height 12px
               color rgb(7, 17, 27)
               margin-bottom 8px
             .price
               font-weight 700
               font-size 10px
               color #cccccc
               margin-right 4px
</style>
