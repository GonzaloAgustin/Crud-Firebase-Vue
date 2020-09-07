<template>
    <div>
        <div class="text-center">
            <h3 class="mt-3">Crud-Firebase</h3>

            <router-link to="/agregar" v-if="validoUsuarioLogeado">
                <button class="btn btn-success m-3">Agregar Tarea</button>    
            </router-link>

            <router-link to="/registrar" v-if="!validoUsuarioLogeado">
                <button class="btn btn-info m-3">Registrar Usuario</button>    
            </router-link>

            <router-link to="/logIn" v-if="!validoUsuarioLogeado">
                <button class="btn btn-primary m-3">Log In</button>    
            </router-link>

                <button class="btn btn-dark m-3" @click="logOut"  v-if="validoUsuarioLogeado">Log Out</button>  

            <ul class="list-group">
                <li v-for="(item, index) in tareas" :key="index" class="list-group-item">

                    {{item.nombre}} - {{item.id}}

                    <router-link :to="{name: 'Editar', params:{id: item.id}}">
                        <button class="pt-1 btn btn-sm btn-warning m-1 text-white">Editar</button>    
                     </router-link>
                        <button class="btn btn-sm btn-danger" type="submit" @click="eliminarTarea(item.id)">Eliminar</button>
                </li>
            </ul>
        </div>                   
    </div>
</template>


<script>

import {mapActions, mapState, mapGetters} from 'vuex'

export default {
    name: 'Inicio',
    created(){
        this.getTareas();
    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea', 'logOut'])
    },
    computed:{
        ...mapState(['tareas']),
        ...mapGetters(['validoUsuarioLogeado'])
    }
}
</script>