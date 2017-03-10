<template>
    <div class="shopCart">
        <div class="content">
            <div class="content-left">
                <div class="log-wrapper">
                    <div class="logo">
                        <span class="icon-compass" :class="{'highlight': true}"></span>
                    </div>
                    <div v-show="totalCount>0" class="num">{{totalCount}}</div>
                </div>
                <div class="price" :class="{'highlight_new': true}">¥{{totalPrice}}</div>
                <div class="desc">打折</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass">
                    {{payDesc}}
                </div>
            </div>
        </div>
        <div class="ball-container">
            <div class="ball" transition="drop" v-for="ball in balls" v-show="ball.show"></div>
            <div class="inner"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            selectFoods: {
                type: Array,
                default () {
                    return [{
                        price: 200,
                        count: 5
                    }]
                }
            },
            deliveryPrice: {
                type: Number,
                default: 0
            },
            minPrice: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                balls: [
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    },
                    {
                        show: false
                    }
                ],
                dropballs: []
            }
        },
        created () {

        },
        computed: {
            totalPrice () {
                let total = 0
                this.selectFoods.forEach((food) => {
                    total += food.price * food.count
                })
                return total
            },
            totalCount () {
                let count = 0
                this.selectFoods.forEach((food) => {
                    count += food.count
                })
                return count
            },
            payDesc () {
                if (this.totalPrice === 0) {
                    return '￥' + this.minPrice
                } else if (this.totalPrice() < this.minPrice) {
                    let diff = this.minPrice - this.totalPrice
                    return '还差¥' + diff
                } else {
                    return '去结算'
                }
            },
            payClass () {
                if (this.totalPrice < this.minPrice) {
                    return 'not-enough'
                } else {
                    return 'enough'
                }
            }
        },
        components: {},
        methods: {}
    }
</script>
<style>
    .shopCart {
        position: fixed;
        height: 48px;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 50;
        background-color: #000000;
    }
    .shopCart .content {
        display: flex;
        background: #141d27;
        font-size: 0;
    }
    .shopCart .content .content-left {
        flex: 1;
    }
    .content-left .log-wrapper {
        display: inline-block;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background: #141d27;
    }
    .log-wrapper .num {
        position: absolute;
        top:0;
        right: 0;
        width: 24px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 15px;
        font-weight: 700;
        background-color: red;
        color: #ffffff;
        font-size: 9px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    }
    .log-wrapper .logo {
        background-color: #2b343c;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .highlight_new {
        color: #ffffff;
    }
    .highlight {
        background-color: aqua;
        color: #ffffff;
    }
    .logo .icon-compass {
        font-size: 24px;
        line-height: 24px;
        color: #80858a;
    }
    .content-left .price {
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin-top: 12px;
        vertical-align: top;
        box-sizing: border-box;
        padding-right: 12px;
        border-right: 1px solid red;
        color: #7e8c8d;
    }
    .content-left .desc {
        display: inline-block;
        vertical-align: top;
        line-height: 24px;
        margin: 12px;
        font-size: 10px;
        font-weight: 700;
        color: #7e8c8d;
    }
    .shopCart .content .content-right {
        flex: 0 0 105px;
        height: 105px;
    }
    .content-right .pay {
        background-color: #7e8c8d;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        color: aliceblue;
        font-weight: 700;
    }

    .not-enough {
        background-color: aqua;
    }

    .enough {
        background-color: red;
        color: #ffffff;
    }
</style>
