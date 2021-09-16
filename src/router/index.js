import Vue from 'vue'
import Router from 'vue-router'

import Transactions from '../views/Transactions'

Vue.use(Router)

const routes = [
    {
        name: 'transactions',
        path: '/',
        component: Transactions,
    },
]

const router = new Router({ routes })

export default router
