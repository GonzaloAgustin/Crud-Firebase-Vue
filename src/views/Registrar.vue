<template>
    <div class="text-center">
        <h2>Registrar usuario</h2>

        <form @submit.prevent="registrarUsuario({email: email, clave:clave1})">

            <input 
            type="email"
            v-model="email"
            placeholder="Ingrese su email"
            class="m-2"
            > <br>

            <input type="password"
            v-model="clave1"
            placeholder="Ingrese su clave"
            class="m-2"
            > <br>

            <input type="password"
            v-model="clave2"
            placeholder="Verifique su clave"
            class="m-2"
            > <br>

            <button type="submit" class="btn btn-success">Registrar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name: 'Registrar',
    data(){
        return{
            email:'',
            clave1:'',
            clave2:''
        }
    },
    created(){

    },
    methods:{
        ...mapActions(['registrarUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>