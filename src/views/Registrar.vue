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

            <button type="submit" class="btn btn-success" :disabled='!desactivar'>Registrar</button><br>
            <b v-if="mensajeError === true" class="text-danger">{{msg}}</b>
            <b v-if="mensajeError === false" class="text-success">{{msg}}</b>
            <br>
            <b class="text-dark">{{error}}</b>
        </form>

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
            clave2:'',
            msg: ''
        }
    },
    created(){
 
    },
    methods:{
        ...mapActions(['registrarUsuario']),

 
    },
    computed:{
        ...mapState(['error']),
        desactivar(){
            return this.clave1 === this.clave2 && this.clave1.trim() !== '' && this.clave1.length >= 6
            },
            mensajeError(){
            if(this.desactivar === false){
                this.msg = 'Las claves deben ser iguales'
                return true;
            }else{
                this.msg = '¡Las claves son iguales!';
                return false;
            }
        } 
        }
  
}
</script>