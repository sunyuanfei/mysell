import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/main/home.vue'
import Goods from '../components/main/content/goods.vue'
import Shop from '../components/main/content/shop.vue'
import Ratings from '../components/main/content/ratings.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/goods',
                    name: 'Goods',
                    component: Goods
                },

                {
                    path: '/shop',
                    name: 'Shop',
                    component: Shop
                },
                {
                    path: '/ratings',
                    name: 'Ratings',
                    component: Ratings
                }
            ]
        }
    ]
})
