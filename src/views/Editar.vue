<template>
    <div  class="text-center">
        <h2>Editar Tarea</h2>
        <br>
        <h6>{{tarea.nombre}} - {{tarea.id}}</h6>
        <br>
        <h6 v-if="tarea.hasOwnProperty('prueba') === true">
            Prueba (campo): {{tarea.prueba}}
            </h6>
        <form  @submit.prevent="editarTarea(tarea)" class="mt-2">
            <input type="text" v-model="tarea.nombre">
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script>

import {mapState, mapActions} from 'vuex'

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
    }

}
</script>