<template>
    <div  class="text-center">
        <h2>Editar Tarea</h2>
        <br>
        <h6 class="mb-1">{{tarea.nombre}} - {{tarea.id}}</h6>
        <br>
        <h6 class="mb-3" 
        v-if="tarea.hasOwnProperty('prueba') === true && tarea.prueba !== ''">
            Prueba: {{tarea.prueba}}
        </h6>
        <form  @submit.prevent="editarTarea(tarea)" class="mt-2">

        <input type="text" v-model="$v.tarea.nombre.$model"><br>

        <small class="d-block text-danger" v-if="!$v.tarea.nombre.required">
            Campo requerido
        </small>

        <small class="d-block text-danger" v-if="!$v.tarea.nombre.minLength">
            Mínimo 5 carácteres
        </small>
        
        <button type="submit" class="btn btn-primary my-3" :disabled="$v.tarea.nombre.$invalid">
            Editar
        </button>
        
        </form>
        {{$v.tarea.nombre}}
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Editar',
    data(){
        return {
        id: this.$route.params.id
        }
    },
    created(){
    this.getTarea(this.id);
    },
    methods:{
    ...mapActions(['getTarea', 'editarTarea'])
    },
    computed:{
    ...mapState(['tarea'])
    },
    validations:{
        tarea:{
            nombre:{
                required,
                minLength: minLength(5)
            }
        }
    }

}
</script>