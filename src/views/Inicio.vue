<template>
    <div>
        <div class="text-center">
            <h3 class="mt-3">Crud-Firebase</h3>

            <router-link to="/agregar">
                <button class="btn btn-success m-3">Agregar Tarea</button>    
            </router-link>

            <ul class="list-group">
                <li v-for="(item, index) in tareas" :key="index" class="list-group-item">

                    {{item.nombre}} - {{item.id}}

                    <router-link :to="{name: 'Editar', params:{id: item.id}}">
                        <button class="pt-1 btn btn-sm btn-warning m-1 text-dark">Editar</button>    
                     </router-link>
                        <button class="btn btn-sm btn-danger" type="submit" @click="eliminarTarea(item.id)">Eliminar</button>
                </li>
            </ul>
        </div>                   
    </div>
</template>


<script>

import {mapActions, mapState} from 'vuex'

export default {
    name: 'Inicio',
    created(){
        this.getTareas();
    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>