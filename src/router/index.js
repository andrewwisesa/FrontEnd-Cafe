import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KasirHome from '../views/kasir/KasirHome.vue'
import TransaksiPage from '../views/kasir/TransaksiPage.vue'
import AddMenu from '../views/kasir/AddMenu.vue'
import OnGoing from '../views/kasir/OnGoing.vue'
import PrintNota from '../views/kasir/PrintNota.vue'
import AdminHome from '../views/admin/AdminHome.vue'
import ManageMeja from '../views/admin/ManageMeja.vue'
import ManageMenu from '../views/admin/ManageMenu.vue'
import ManageUser from '../views/admin/ManageUser.vue'
import LoginPage from '../views/LoginPage.vue'
import AllTransaksi from '../views/manager/AllTransaksi.vue'
import FilterTransaksi from '../views/manager/FilterTransaksi.vue'
import ProfitPage from '../views/manager/ProfitPage.vue'
import ManagerHome from '../views/manager/ManagerHome.vue'
import NotFound from '../views/NotFound.vue'
import SalahAkses from '../views/SalahAkses.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kasirHome',
    name: KasirHome,
    component: KasirHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/transaksi',
    name: TransaksiPage,
    component: TransaksiPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/addmenu',
    name: AddMenu,
    component: AddMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/ongoing',
    name: OnGoing,
    component: OnGoing,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/printnota/:id',
    name: PrintNota,
    component: PrintNota,
    meta: {
      requiresAuth: true,
      allowedRoles: ['kasir']
    }
  },
  {
    path: '/adminHome',
    name: AdminHome,
    component: AdminHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managemeja',
    name: ManageMeja,
    component: ManageMeja,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/managemenu',
    name: ManageMenu,
    component: ManageMenu,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/manageuser',
    name: ManageUser,
    component: ManageUser,
    meta: {
      requiresAuth: true,
      allowedRoles: ['admin']
    }
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/alltransaksi',
    name: AllTransaksi,
    component: AllTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/filtertransaksi',
    name: FilterTransaksi,
    component: FilterTransaksi,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/ProfitPage',
    name: ProfitPage,
    component: ProfitPage,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '/ManagerHome',
    name: ManagerHome,
    component: ManagerHome,
    meta: {
      requiresAuth: true,
      allowedRoles: ['manager']
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/forbidden',
    component: SalahAkses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,form, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    const userRole = localStorage.getItem("role")
    if (!userRole) {
      next({
        path: '/'
      })
    } else {
      if (to.meta.allowedRoles.includes(userRole)) {
        next()
      } else {
        next({
          path: '/forbidden'
        })
      }
    }
  } else {
    next();
  }
})
export default router
