import { createRouter, createWebHashHistory } from 'vue-router'
import { ref, computed } from 'vue'

import SignInPage from './views/SignInPage.vue'
import SignUpPage from './views/SignUpPage.vue'
import Home from './views/Home.vue'
import ProductList from './views/ProductList.vue'
import ProductDetail from './views/ProductDetail.vue'
import MyProfile from './views/MyProfile.vue'
import AddToCart from './views/AddToCart.vue'
import EmptyCart from './views/EmptyCart.vue'
import ErrorPage from './views/ErrorPage.vue'
import OrderDetails from './views/OrderDetails.vue'

const routes = [
	{ name: 'Home', path: '/', component: Home },
	{ name: 'SignIn', path: '/signin', component: SignInPage },
	{ name: 'SignUp', path: '/signup', component: SignUpPage },
	{ name: 'ProductList', path: '/productlist', component: ProductList },
	{ name: 'ProductDetail', path: '/productdetail', component: ProductDetail },
	{ name: 'MyProfile', path: '/profile', component: MyProfile },
	{ name: 'OrderDetails', path: '/orderdetails', component: OrderDetails },
	{ name: 'AddToCart', path: '/addtocart', component: AddToCart },
	{ name: 'EmptyCart', path: '/emptycart', component: EmptyCart },
	{ path: '/:catchAll(.*)', component: ErrorPage },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash
})

const currentView = computed(() => {
	return routes[currentPath.value.slice(1) || '/'] || ErrorPage
})

export default router