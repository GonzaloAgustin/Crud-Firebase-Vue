<template>
    <div class="text-center">
        <h2>Agregar nueva tarea</h2>
        <form @submit.prevent="agregarTarea(tareaNueva)" class="mt-3">
            <input type="text" v-model="tareaNueva.nombre" placeholder="Nombre" class="mb-3"><br>
            <input type="text" v-model="tareaNueva.prueba" placeholder="Prueba"><br>
            <button type="submit" class="mt-3 btn btn-success">Agregar Tarea</button>
        </form>
    </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: 'Agregar',
    data(){
        return{
            tareaNueva: {nombre: '', prueba: ''}
        }
    },
    methods:{
        ...mapActions(['agregarTarea'])
    }
}
</script>