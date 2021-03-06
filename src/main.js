import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false


auth.onAuthStateChanged(user => {
  if(user){
    console.log(user)
    const userDetectado = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('usuarioDetectado', userDetectado)
  }else{
    console.log(user)
    store.dispatch('usuarioDetectado', user)
  }
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

})

