<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
    const LENGTH = 5
    const CLS_ON = 'on'
    const CLS_HALF = 'half'
    const CLS_OFF = 'off'
    export default {
        props: {
          size: {
              type: Number
          },
          score: {
              type: Number
            }
        },
        computed: {
            starType () {
                return 'star-' + this.size
            },
            itemClasses () {
                let result = []
                let score = Math.floor(this.score * 2) / 2
                let hasDecimal = score % 1 !== 0
                let integer = Math.floor(score)
                for (let i = 0; i < integer; i++) {
                    result.push(CLS_ON)
                }
                if (hasDecimal) {
                    result.push(CLS_HALF)
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF)
                }
                return result
            }
        },
        data () {
            return {}
        },
        created () {
        },
        components: {},
        methods: {}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/minxin.styl"
    .star
      font-size 0
      .star-item
        display inline-block
        background-repeat no-repeat
      &.star-48
         .star-item
           width 20px
           height 20px
           margin-right 24px
           background-size 20px 20px
           &:last-child
             margin-right 0
           &.on
             background-color chartreuse
           &.half
             background-color chartreuse
           &.off
             background-color chartreuse
      &.star-36
         .star-item
           width 15px
           height 15px
           margin-right 16px
           background-size 15px 15px
           &:last-child
              margin-right 0
           &.on
             background-color aqua
           &.half
             background-color aqua
           &.off
             background-color aqua
      &.star-24
         .star-item
           width 10px
           height 10px
           margin-right 3px
           background-size 10px 10px
           &:last-child
              margin-right 0
           &.on
             background-color aqua
           &.half
             background-color aqua
           &.off
             background-color aqua
</style>
