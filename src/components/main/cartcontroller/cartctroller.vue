<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count > 0"
             @click="decreaseCart" transition="move">
            <span class="icon-home2 inner"></span>
        </div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-home2" @click="addCart"></div>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data () {
            return {}
        },
        created () {
            console.log(this.food)
        },
        components: {},
        methods: {
            addCart (event) {
                if (!event._constructed) {
                    return
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1)
                } else {
                    this.food.count ++
                }
            },
            decreaseCart (event) {
                if (!event._constructed) {
                    return
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1)
                } else {
                    this.food.count --
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .cartcontrol
       font-size 0
      .cart-decrease, .cart-count
        display inline-block
        padding 6px
        transition all 0.4s linear
        &.move-transition
           opacity 1
           transform translate3D(0,0,0)
        .inner
          display inline-block
          font-size 24px
          line-height 24px
          color cornflowerblue
          transition all 0.4s linear
          transform rotate(0)
        &.move-enter, &.move-leave
          opacity
          transform translate3D(24px,0,0)
          .inner
            transition translate3D(24px,0,0)
      .cart-count
        display inline-block
        vertical-align top
        width 12px
        padding-top 6px
        text-align center
        font-size 13px
      .cart-add
        display inline-block
        font-size 24px
        line-height 24px
        color cornflowerblue
</style>
