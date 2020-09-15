import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import { db, auth } from '@/firebase'
import router from '@/router'
//import { auth } from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: '', id: '' },
    usuario: null,
    error: null,
    loading: false
  },
  mutations: {
    setTareas(state, payload) {
      state.tareas = payload;
    },
    setTarea(state, payload) {
      state.tarea = payload;
    },
    setEliminarTarea(state, payload) {
      state.tareas = state.tareas.filter(o => o.id !== payload)
    },
    setUsuarioCreado(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload){
      state.loading = payload
    }
  },
  actions: {
    getTareas({ commit, state }) {
        commit('setLoading', true)
        if(state.usuario !== null){
        //setTimeout(() => {
          db.collection(state.usuario.email).get()
          .then(res => {
            const tareas = []
            res.forEach(doc => {
              let tarea = doc.data();
              tarea.id = doc.id
              tareas.push(tarea)
              commit('setLoading', false)
            })
            commit('setTareas', tareas);
          })
        }
        //},2500)
    },
    getTarea({ commit, state }, idTarea) {
      db.collection(state.usuario.email).doc(idTarea).get()
        .then(doc => {
          console.log(doc.id);
          console.log(doc.data())
          let tarea = doc.data();
          tarea.id = doc.id
          commit('setTarea', tarea);
        })
    },
    editarTarea({ commit, state }, tarea) {
      db.collection(state.usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre
      }).then(() => {
        console.log('Tarea editada');
        router.push('/');
      })
    },
    agregarTarea({ commit, state }, tarea) {
      //db.collection('Tarea').doc('idUsuario').set({ // <-- Se agrega un id manual.
      commit('setLoading', true)
      db.collection(state.usuario.email).add({ // <-- Se agrega un id automático.
        nombre: tarea.nombre, 
        prueba: tarea.prueba
      }).then(doc => {
        commit('setLoading', false)
        console.log('Tarea agregada');
        router.push('/');
      })
    },
    eliminarTarea({ commit, dispatch, state }, idTarea) {
      db.collection(state.usuario.email).doc(idTarea).delete()
        .then(() => {
          console.log('Tarea eliminada');
          //dispatch('getTareas');
          commit('setEliminarTarea', idTarea)
        })
    },
    registrarUsuario({ commit }, usuario) {
      auth.createUserWithEmailAndPassword(usuario.email, usuario.clave)
        .then(res => {
          console.log(res);

          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          db.collection(res.user.email).add({
            nombre: 'Tarea de ejemplo creada automáticamente'
          })
          commit('setUsuarioCreado', usuarioCreado);
          router.push('/logeado')
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    usuarioLogIn({ commit }, user) {
      auth.signInWithEmailAndPassword(user.email, user.clave)
        .then(res => {
          console.log(res);
          const usuarioLogeado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuarioCreado', usuarioLogeado);
          router.push('/logeado')

        }).catch(error => {
          console.log(error)
          commit('setError', error)
        })
    },
    logOut({ commit }) {
      auth.signOut()
        .then(() => {
          router.push('/logIn')
        })
    },
    usuarioDetectado({ commit }, user) {
      commit('setUsuarioCreado', user)
    }
  },
  getters: {
    validoUsuarioLogeado(state) {
      if (state.usuario === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
