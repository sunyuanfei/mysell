<template>
    <div>
        <div class="header">
            <v-header></v-header>
        </div>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link :to="{path: '/goods'}">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{path: '/ratings'}">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{path: '/shop'}">商家</router-link>
            </div>
        </div>
        <div class="banner">

        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Header from './header/header.vue'
    export default {
        data () {
            return {}
        },
        created () {

        },
        components: {
            'v-header': Header
        },
        methods: {}
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/minxin.styl";
    .tab {
        display: flex
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-1px rgba(7, 17, 27, 0.1);
    }
    .tab-item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: rgb(77, 85, 93);
    }
    .tab-item a {
        display: block;
    }
    a.active {
        color: rgb(240, 20, 20);
    }
</style>
