<template>
    <div class="text-center">
        <h2>Agregar nueva tarea</h2>
        <form @submit.prevent="agregarTarea(tareaNueva)" class="mt-3">
    
            <small 
            v-if="!$v.tareaNueva.nombre.required" 
            class="text-danger d-block"
            >
            Campo obligatorio  
            </small>

            <small 
            v-if="!$v.tareaNueva.nombre.minLength" 
            class="text-danger d-block"
            >
            Mínimo 5 caracteres 
            </small>
            <input type="text" v-model="$v.tareaNueva.$model.nombre" placeholder="Nombre" class="mb-3">
            <br>
            <input type="text" v-model="tareaNueva.prueba" placeholder="Prueba"><br>

            <button type="submit" class="mt-3 btn btn-success" :disabled="$v.$invalid || loading">
                Agregar Tarea
            </button>
        </form>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Agregar',
    data(){
        return{
            tareaNueva: {nombre: '', prueba: ''}
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    },
    computed:{
        ...mapState(['loading'])
    },
    validations: {
    tareaNueva: {
     nombre:{
      required,
      minLength: minLength(5)
      },
      prueba:{
          //... No tiene validaciones.
      }
    }
  }
}
</script>