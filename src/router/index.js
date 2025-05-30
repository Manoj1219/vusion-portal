import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: () => import('../views/HomePageView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    },
    {
        path: '/careers',
        name: 'Careers',
        component: () => import('../views/CareersView.vue')
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: () => import('../views/AboutUsView.vue')
    },
    {
        path: '/events',
        name: 'Events',
        component: () => import('../views/EventsView.vue')
    },
    {
        path: '/newsroom',
        name: 'Newsroom',
        component: () => import('../views/NewsroomView.vue')
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: () => import('../views/ContactUsView.vue')
    },
    {
        path: '/partners',
        name: 'Partners',
        component: () => import('../views/PartnersView.vue')
    },
    {
        path: '/legal',
        name: 'Legal',
        component: () => import('../views/LegalView.vue')
    },
    {
        path: '/privacy-policy',
        name: 'Privacy Policy',
        component: () => import('../views/PrivacyPolicyView.vue')
    },
    {
        path: '/edgesense',
        name: 'EdgeSense',
        component: () => import('../views/EdgeSenseView.vue')
    },
    {
        path: '/products',
        name: 'Products',
        children: [
            {
                path: '',
                name: 'overview',
                component: () => import('../views/products/pages/ProductsOverview.vue')
            },
            {
                path: 'vusion-live',
                name: 'VusionLive',
                component: () => import('../views/products/pages/VusionLive.vue')
            },
        ]
    },
    {
        path: '/solutions',
        name: 'Solutions',
        children: [
            {
                path: '',
                name: 'overview',
                component: () => import('../views/solutions/SolutionsView.vue'),
            },
            {
                path: 'store-operational-excellence',
                name: 'store-operational-excellence',
                component: () => import('../views/solutions/pages/StoreOperationalExcellence.vue')
            },
            {
                path: 'digital-in-store-retail-media',
                name: 'digital-in-store-retail-media',
                component: () => import('../views/solutions/pages/DigitalInStoreRetailMedia.vue')
            },
            {
                path: 'food-waste-management',
                name: 'food-waste-management',
                component: () => import('../views/solutions/pages/FoodWasteManagement.vue')
            },
            {
                path: 'local-ecommerce',
                name: 'local-ecommerce',
                component: () => import('../views/solutions/pages/LocalEcommerce.vue')
            },
            {
                path: 'category-optimization',
                name: 'category-optimization',
                component: () => import('../views/solutions/pages/CategoryOptimization.vue')
            },
            {
                path: 'shopper-services',
                name: 'shopper-services',
                component: () => import('../views/solutions/pages/ShopperServices.vue')
            },
            {
                path: 'collaboration-data-monetization',
                name: 'collaboration-data-monetization',
                component: () => import('../views/solutions/pages/CollaborationDataMonetization.vue')
            }
        ]
    },
    {
        path: '/positive-commerce',
        name: 'Positive Commerce',
        component: () => import('../views/positive-commerce/PositiveCommerceView.vue')
    }
]
// Lazy loading is a technique that delays the loading of a resource until it is needed. 
// In this case, the components for the routes are loaded only when the route is visited,
// which can improve performance by reducing the initial load time of the application.
const router = createRouter({
    history: createWebHistory(),
    routes
})

// Scroll to top of page on route change
router.beforeEach((to, from, next) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
    next()
})

export default router
