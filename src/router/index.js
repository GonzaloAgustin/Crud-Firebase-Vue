import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '@/firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Editar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Agregar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Registrar.vue')
  },
  {
    path: '/logeado',
    name: 'Logeado',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Logeado.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/LogIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    const usuario = auth.currentUser
    console.log(usuario)

    if (!usuario) {
      next({
        path: '/LogIn'
      })
    } else {
      next()
    }

  } else {
    next()
  }
})

export default router
