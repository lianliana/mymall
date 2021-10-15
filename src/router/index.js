import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/home.vue'
import category from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import Profile from '../views/profile/profile.vue'
const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/cart',
        component:cart
    },
    {
        path:'/category',
        component:category
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
export default router