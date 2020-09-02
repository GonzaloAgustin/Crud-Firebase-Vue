import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import {db} from '@/firebase'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: {nombre: '', id:''}
  },
  mutations: {
    setTareas(state, payload){
      state.tareas = payload;
    },
    setTarea(state, payload){
      state.tarea = payload;
    }
  },
  actions: {
    getTareas({commit}){
      db.collection('Tarea').get()
        .then(res => {
          const tareas = []
          res.forEach(doc => {
            let tarea = doc.data();
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas);
        })
    },
    getTarea({commit}, idTarea){
      db.collection('Tarea').doc(idTarea).get()
        .then(doc => {
          console.log(doc.id);
          console.log(doc.data())
          let tarea = doc.data();
          tarea.id = doc.id
          commit('setTarea', tarea);
        })
    },
    editarTarea({commit}, tarea){
      db.collection('Tarea').doc(tarea.id).update({
        nombre: tarea.nombre
      }).then(() => {
        console.log('Tarea editada');
        router.push('/');
      })
    },
    agregarTarea({commit}, tarea){
      //db.collection('Tarea').doc('idInventado').set({ // <-- Se agrega un id manual.
      db.collection('Tarea').add({ // <-- Se agrega un id automático.
        nombre: tarea.nombre,
        prueba: tarea.prueba
      }).then(doc => {
        console.log('Tarea agregada');
        router.push('/');
      })
    }
  },
  modules: {
  }
})
