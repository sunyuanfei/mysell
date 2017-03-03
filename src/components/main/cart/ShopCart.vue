<template>
    <div class="shopCart">
        <div class="content">
            <div class="content-left">
                <div class="log-wrapper">
                    <div class="logo">
                        <span class="icon-compass"></span>
                    </div>
                </div>
                <div class="price">¥11</div>
                <div class="desc">打折</div>
            </div>
            <div class="content-right">
                <div class="pay">
                    0元起送
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        created () {

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
    .log-wrapper .logo {
        background-color: #2b343c;
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
    }
</style>
