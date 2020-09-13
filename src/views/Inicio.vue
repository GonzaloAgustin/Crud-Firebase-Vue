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

                <div v-if="loading && validoUsuarioLogeado" class="text-center">
                    <h5 class="mt-3">Cargando contenido..</h5>
                    <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </div>

        <div v-if="validoUsuarioLogeado && !loading"> 
            <ul class="list-group">
                <li v-for="(item, index) in tareas" :key="index" class="list-group-item">

                    {{item.nombre}} - {{item.id}}

                    <router-link :to="{name: 'Editar', params:{id: item.id}}">
                        <button class="btn btn-sm btn-warning m-1 text-white">Editar</button>    
                     </router-link>
                        <button class="btn btn-sm btn-danger" type="submit" @click="eliminarTarea(item.id)">Eliminar</button>
                </li>
            </ul>
        </div>
        </div>                   
    </div>
</template>

<!--
<script>
//  Centro el loading del pacman
new Spinner().spin(document.getElementById('center'));
</script> 

// Al body
<div id ="center" style="position:fixed;top:60%;left:45%" class="mt-4">
<pacman-loader :loading="loading"></pacman-loader>
</div>
-->


<script>

import {mapActions, mapState, mapGetters} from 'vuex'
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'



export default {
    name: 'Inicio',
    created(){
        this.getTareas();
    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea', 'logOut'])
    },
    computed:{
        ...mapState(['tareas','loading']),
        ...mapGetters(['validoUsuarioLogeado'])
    },
    /*components: {
    PacmanLoader
  }*/
}
</script>