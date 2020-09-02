<template>
    <div>
        <div class="text-center">
            <h3 class="mt-3">Crud-Firebase</h3>

            <router-link to="/agregar">
                <button class="btn btn-success">Agregar Tarea</button>    
            </router-link>

            <ul>
                <li v-for="(item, index) in tareas" :key="index">
                    
                    {{item.nombre}} - {{item.id}}

                    <router-link :to="{name: 'Editar', params:{id: item.id}}">
                        <button>Editar</button>    
                     </router-link>

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
        ...mapActions(['getTareas'])
    },
    computed:{
        ...mapState(['tareas'])
    }
}
</script>