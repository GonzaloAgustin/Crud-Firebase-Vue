<template>
    <div class="text-center">
        <h2 class="mt-3">Log In</h2>

        <form @submit.prevent="usuarioLogIn({email: email, clave: clave})">

        <input 
        type="email"
        placeholder="Ingrese su email"
        v-model="email"
        class="m-2"
        >
        <br>

        <input 
        type="password"
        placeholder="Ingrese su clave"
        v-model="clave"
        class="m-2"
        >
        <br>

        <button type='submit' class='btn btn-info m-2'>Acceder</button>
        </form>
        <b class="text-danger">{{error}}</b>
        
    </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
    name: 'LogIn',
    data(){
        return{
            email: '',
            clave: ''
        }
    },
    computed:{
        ...mapState(['error'])
    },
    methods:{
        ...mapActions(['usuarioLogIn']),
    }
    
}
</script>